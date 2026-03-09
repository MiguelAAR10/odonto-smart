"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { locationsPage, ClinicLocation } from "@/data/pages-content";

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function NearestLocationFinder({
  locations,
  onNearestFound,
}: {
  locations: ClinicLocation[];
  onNearestFound: (location: ClinicLocation) => void;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "found" | "error">("idle");
  const [nearestLocation, setNearestLocation] = useState<ClinicLocation | null>(null);

  const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number) => {
    const R = 6371; // Earth's radius in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const findNearest = useCallback(() => {
    setStatus("loading");

    if (!navigator.geolocation) {
      setStatus("error");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        let nearest = locations[0];
        let minDistance = calculateDistance(
          latitude,
          longitude,
          locations[0].coordinates.lat,
          locations[0].coordinates.lng
        );

        locations.forEach((location) => {
          const distance = calculateDistance(
            latitude,
            longitude,
            location.coordinates.lat,
            location.coordinates.lng
          );
          if (distance < minDistance) {
            minDistance = distance;
            nearest = location;
          }
        });

        setNearestLocation(nearest);
        setStatus("found");
        onNearestFound(nearest);
      },
      () => {
        setStatus("error");
      }
    );
  }, [locations, onNearestFound]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl bg-gradient-to-r from-brand-teal to-brand-teal-strong p-6 text-white shadow-xl"
    >
      <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
          <LocationIcon className="h-8 w-8" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold">{locationsPage.findNearest.title}</h3>
          <p className="mt-1 text-white/80">{locationsPage.findNearest.description}</p>
        </div>
        <button
          onClick={findNearest}
          disabled={status === "loading"}
          className="rounded-full bg-white px-6 py-3 font-semibold text-brand-teal-strong transition-all hover:-translate-y-1 hover:shadow-lg disabled:opacity-70"
        >
          {status === "loading" ? (
            <span className="flex items-center gap-2">
              <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              {locationsPage.findNearest.calculating}
            </span>
          ) : (
            locationsPage.findNearest.buttonText
          )}
        </button>
      </div>

      {status === "found" && nearestLocation && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-4 rounded-xl bg-white/10 p-4"
        >
          <p className="text-sm text-white/80">{locationsPage.findNearest.nearestText}:</p>
          <p className="text-lg font-bold">{nearestLocation.name}</p>
          <p className="text-white/80">{nearestLocation.address}</p>
        </motion.div>
      )}

      {status === "error" && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-sm text-white/80"
        >
          No pudimos acceder a tu ubicación. Por favor, revisa los permisos de tu navegador.
        </motion.p>
      )}
    </motion.div>
  );
}

function LocationCard({
  location,
  isHighlighted,
}: {
  location: ClinicLocation;
  isHighlighted: boolean;
}) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`overflow-hidden rounded-3xl bg-white shadow-xl transition-all ${
        isHighlighted ? "ring-4 ring-brand-teal ring-offset-4" : ""
      }`}
    >
      {/* Image Gallery */}
      <div className="relative aspect-video">
        <Image
          src={location.images[selectedImage]}
          alt={`${location.name} - imagen ${selectedImage + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {location.isMain && (
          <div className="absolute left-4 top-4 rounded-full bg-brand-purple px-3 py-1 text-sm font-semibold text-white">
            Sede Principal
          </div>
        )}
        {isHighlighted && (
          <div className="absolute right-4 top-4 rounded-full bg-brand-teal px-3 py-1 text-sm font-semibold text-white">
            Más Cercana
          </div>
        )}
        {/* Image Thumbnails */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {location.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setSelectedImage(i)}
              className={`h-2 w-8 rounded-full transition-all ${
                i === selectedImage ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-text-dark">{location.name}</h3>
        <p className="mt-1 text-brand-teal">{location.district}</p>

        {/* Address & Contact */}
        <div className="mt-4 space-y-3">
          <div className="flex items-start gap-3">
            <LocationIcon className="mt-1 h-5 w-5 flex-shrink-0 text-brand-teal" />
            <span className="text-text-muted">{location.fullAddress}</span>
          </div>
          <div className="flex items-center gap-3">
            <PhoneIcon className="h-5 w-5 flex-shrink-0 text-brand-teal" />
            <a href={`tel:${location.phone}`} className="text-text-muted hover:text-brand-teal">
              {location.phone}
            </a>
          </div>
          <div className="flex items-start gap-3">
            <ClockIcon className="mt-1 h-5 w-5 flex-shrink-0 text-brand-teal" />
            <div className="text-sm text-text-muted">
              <p>Lun - Vie: {location.hours.weekdays}</p>
              <p>Sábado: {location.hours.saturday}</p>
              <p>Domingo: {location.hours.sunday}</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-4">
          <h4 className="mb-2 text-sm font-semibold text-text-dark">Características</h4>
          <div className="flex flex-wrap gap-2">
            {location.features.map((feature, i) => (
              <span
                key={i}
                className="rounded-full bg-bg-soft px-3 py-1 text-xs text-text-muted"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="mt-6 overflow-hidden rounded-xl">
          <iframe
            src={location.mapEmbedUrl}
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Mapa de ${location.name}`}
            className="grayscale transition-all hover:grayscale-0"
          />
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(location.fullAddress)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-brand-teal px-4 py-3 font-semibold text-brand-teal transition-all hover:bg-brand-teal hover:text-white"
          >
            <LocationIcon className="h-5 w-5" />
            Cómo Llegar
          </a>
          <a
            href={`https://wa.me/${location.whatsapp.replace(/\+/g, "")}?text=Hola,%20me%20gustaría%20agendar%20una%20cita%20en%20la%20sede%20${location.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-semibold text-white transition-all hover:bg-[#128C7E]"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Agendar Cita
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function SedesPage() {
  const [highlightedLocation, setHighlightedLocation] = useState<string | null>(null);

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          label={locationsPage.hero.label}
          title={locationsPage.hero.title}
          description={locationsPage.hero.description}
        />

        <section className="bg-bg-page py-16">
          <Container>
            {/* Nearest Location Finder */}
            <div className="mb-12">
              <NearestLocationFinder
                locations={locationsPage.locations}
                onNearestFound={(location) => setHighlightedLocation(location.id)}
              />
            </div>

            {/* Locations Grid */}
            <div id="contacto" className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {locationsPage.locations.map((location) => (
                <LocationCard
                  key={location.id}
                  location={location}
                  isHighlighted={highlightedLocation === location.id}
                />
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
