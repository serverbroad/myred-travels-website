import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Plane,
  Hotel,
  MapPin,
  Compass,
  Car,
  Shield,
  Briefcase,
  Users,
  Heart,
  Star,
  Quote,
} from 'lucide-react';

const LOGO_URL = 'https://miaoda-conversation-file.s3cdn.medo.dev/user-d3irbo6242kg/app-dxkz3ebw9eyp/20260824/Exe_Logo_My_Red_Travels.png';
const APP_STORE_URL = 'https://apps.apple.com/us/app/myred-travel/id6803848717';

const useInView = (options?: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.1, ...options });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isInView };
};

const Section = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const { ref, isInView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${className}`}
    >
      {children}
    </div>
  );
};

const AppStoreBadge = () => (
  <a
    href={APP_STORE_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center rounded-lg bg-black px-4 py-2 text-white hover:opacity-90 transition-opacity"
  >
    <svg className="h-7 w-7" viewBox="0 0 384 512" fill="currentColor">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.2-19.7C63.3 141.2 4.1 210.9 4.1 297.9c0 28.4 5.1 57.7 15.2 87.2 10.2 29.6 47.3 108.7 87.3 110.1 21.1.7 36.1-15.2 63.7-15.2 27.1 0 40.7 15.2 76.2 15.2 53.4 0 94.4-72.2 116.1-110.9-69.3-32.5-73.6-80.1-68.8-104.4zM231.5 84.1c31.3-37.2 26.3-71.2 25.6-84.1-24.8 1.4-52.6 16.5-69.1 37.4-15.2 19.2-27.2 49.6-23.8 79.3 27.2 2.1 51.8-13.8 67.3-32.6z" />
    </svg>
    <div className="ml-2 text-left leading-none">
      <div className="text-[0.6rem] opacity-80">Download on the</div>
      <div className="text-sm font-semibold -mt-0.5">App Store</div>
    </div>
  </a>
);

const GooglePlayBadge = () => (
  <a
    href="https://play.google.com"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center rounded-lg bg-black px-4 py-2 text-white hover:opacity-90 transition-opacity"
  >
    <svg className="h-7 w-7" viewBox="0 0 512 512" fill="currentColor">
      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256.6L47 0zm425.2 225.6l-58.9-34.5-65.7 64.5 65.7 64.5 58.9-34.5c24.3-14.3 24.3-40.8 0-55.1zM110.9 499.1c8.6 6.1 20.6 7.6 33.1 2.1l190.4-190.4-79.4-79.4L110.9 499.1z" />
    </svg>
    <div className="ml-2 text-left leading-none">
      <div className="text-[0.6rem] opacity-80">Get it on</div>
      <div className="text-sm font-semibold -mt-0.5">Google Play</div>
    </div>
  </a>
);

const paymentMethods = [
  { name: 'Visa', url: 'https://myredtravels.com/assets/visa-logo.png' },
  { name: 'Mastercard', url: 'https://myredtravels.com/assets/mastercard-logo.png' },
  { name: 'American Express', url: 'https://myredtravels.com/assets/amex-logo.png' },
  { name: 'Discover', url: 'https://myredtravels.com/assets/discover-logo.png' },
  { name: 'Wave', url: 'https://www.wave.com/img/nav-logo.png', label: 'Visacard' },
  { name: 'Orange Money', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEDm-vyo9R0kkeG9VqEEOcSyLrVIn8gEZurd7tTQV2JmU4817z69nadgs&s=10', label: 'Visacard' },
  { name: 'MTN Mobile Money', url: 'https://play-lh.googleusercontent.com/ChvlqPzMvDdm05_dXKHbCNF9dD_g52O8YV7K17iEImhGlVG3C8qlziUMns2cjeCNgZuiFtctZ5YUa__YAFFnsGg', label: 'Master' },
];

const PaymentMethods = ({ title }: { title: string }) => (
  <div className="mt-6">
    <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-white/50">{title}</h4>
    <div className="flex flex-wrap items-center gap-3">
      {paymentMethods.map((method) => (
        <div
          key={method.name}
          className="relative flex h-10 items-center justify-center overflow-hidden rounded-lg bg-white px-3 py-1.5 shadow-sm"
        >
          <img
            src={method.url}
            alt={method.name}
            className="h-6 w-auto max-w-[4rem] object-contain"
          />
          {method.label && (
            <span className="absolute inset-0 flex items-center justify-center bg-white/90 text-[10px] font-extrabold uppercase tracking-wide text-ink">
              {method.label}
            </span>
          )}
        </div>
      ))}
    </div>
  </div>
);

const ServiceCard = ({ icon: Icon, title, description }: { icon: typeof Plane; title: string; description: string }) => (
  <Card className="group h-full border border-mist bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-0.5">
    <CardContent className="p-6">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-coral-light text-coral">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-bold text-ink">{title}</h3>
      <p className="text-sm leading-relaxed text-steel">{description}</p>
    </CardContent>
  </Card>
);

const DestinationCard = ({ image, label, title, subtitle }: { image: string; label: string; title: string; subtitle: string }) => (
  <Card className="group overflow-hidden border-0 bg-white shadow-card">
    <div className="relative aspect-[4/3] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-coral shadow-sm">
        {label}
      </div>
    </div>
    <CardContent className="p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-steel">{subtitle}</p>
      <h3 className="mt-1 text-lg font-bold text-ink">{title}</h3>
    </CardContent>
  </Card>
);

const ExperienceCard = ({ icon: Icon, title, description }: { icon: typeof Plane; title: string; description: string }) => (
  <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-card transition-all duration-300 hover:shadow-hover">
    <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-coral text-white">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <h3 className="mb-1 text-base font-bold text-ink">{title}</h3>
      <p className="text-sm leading-relaxed text-steel">{description}</p>
    </div>
  </div>
);

const TestimonialCard = ({ name, role, quote: quoteText, rating }: { name: string; role: string; quote: string; rating: number }) => (
  <Card className="h-full border border-mist bg-white shadow-card">
    <CardContent className="flex h-full flex-col p-6">
      <Quote className="mb-4 h-8 w-8 text-coral/30" />
      <div className="mb-4 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? 'fill-amber-400 text-amber-400' : 'text-mist'}`}
          />
        ))}
      </div>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-ink">{quoteText}</p>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-coral-light font-bold text-coral">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">{name}</p>
          <p className="text-xs text-steel">{role}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const content = {
  header: {
    logoAlt: { fr: 'MyRed Travels', en: 'MyRed Travels' },
  },
  hero: {
    badge: { fr: 'Agence de Voyage en Ligne, 100% Digitale', en: 'Online Travel Agency, 100% Digital' },
    title: {
      fr: 'Vols, hôtels, transferts, séjours, visas, croisières et expériences sur mesure depuis l’Afrique vers le monde.',
      en: 'Flights, hotels, transfers, stays, visas, cruises, and tailored experiences from Africa to the world.',
    },
    description: {
      fr: 'Voyages sur mesure depuis l’Afrique vers le monde. Comparez les options, recevez des recommandations, préparez vos documents et voyagez avec une équipe qui comprend chaque parcours.',
      en: 'Tailored travel from Africa to the world. Compare options, receive recommendations, prepare your documents, and travel with a team that understands every journey.',
    },
    download: { fr: 'Télécharger l’application', en: 'Download the App' },
    explore: { fr: 'Explorer les destinations', en: 'Explore Destinations' },
    categories: [
      { number: '01', title: { fr: 'Vol', en: 'Flights' }, desc: { fr: 'Billetterie intelligente et choix d’itinéraires', en: 'Smart ticketing and route choices' } },
      { number: '02', title: { fr: 'Hôtel', en: 'Hotels' }, desc: { fr: 'Séjours vérifiés pour chaque voyage', en: 'Verified stays for every trip' } },
      { number: '03', title: { fr: 'Destinations', en: 'Destinations' }, desc: { fr: 'Escapades signature et city breaks', en: 'Signature escapes and city breaks' } },
      { number: '04', title: { fr: 'Expériences', en: 'Experiences' }, desc: { fr: 'Culture, loisirs, affaires, découverte', en: 'Culture, leisure, business, discovery' } },
      { number: '05', title: { fr: 'Transferts/Transports', en: 'Transfers' }, desc: { fr: 'Accueil aéroport et mobilité privée', en: 'Airport welcome and private mobility' } },
    ],
  },
  services: {
    eyebrow: { fr: 'Pensé pour les voyageurs modernes', en: 'Designed for Modern Travelers' },
    title: { fr: 'Une agence digitale avec une âme de conciergerie.', en: 'A digital agency with the soul of a concierge.' },
    description: {
      fr: 'MyRed Travels rassemble chaque étape de la planification dans une expérience fluide, fiable et réactive. Déplacements professionnels, vacances en famille, escapades romantiques, voyages de groupe et besoins de mobilité de dernière minute.',
      en: 'MyRed Travels brings every step of planning into one smooth, reliable, and responsive experience. For business trips, family vacations, romantic escapes, group travel, and last-minute mobility needs.',
    },
    sectionTitle: { fr: 'Nos Services', en: 'Our Services' },
    sectionSubtitle: { fr: 'Tout ce dont votre voyage a besoin, géré avec élégance.', en: 'Everything your trip needs, managed with elegance.' },
    items: [
      { icon: Plane, title: { fr: 'Réservation de Vols', en: 'Flight Booking' }, description: { fr: 'Réservation de vols nationaux, régionaux et internationaux avec des options tarifaires claires, des itinéraires flexibles et une assistance digitale réactive.', en: 'Domestic, regional, and international flight options with clear fares, flexible itineraries, and responsive digital support.' } },
      { icon: Hotel, title: { fr: 'Réservation d’Hôtels', en: 'Hotel Booking' }, description: { fr: 'Hôtels, appartements, resorts et séjours business sélectionnés selon votre destination, votre budget et votre niveau de confort.', en: 'Hotels, apartments, resorts, and business stays selected by destination, budget, and comfort level.' } },
      { icon: Compass, title: { fr: 'Réservation de Croisières', en: 'Cruise Booking' }, description: { fr: 'Options de croisières premium pour couples, familles et groupes, incluant choix de cabine, itinéraire et arrangements avant/après croisière.', en: 'Premium cruise options for couples, families, and groups, with cabin selection, itinerary, and pre/post cruise arrangements.' } },
      { icon: Car, title: { fr: 'Transferts Aéroport', en: 'Airport Transfers' }, description: { fr: 'Prises en charge et dépôts aéroport fiables avec voitures privées, chauffeurs professionnels et coordination des arrivées ou départs.', en: 'Reliable airport pickups and drop-offs with private cars, professional drivers, and arrival or departure coordination.' } },
      { icon: MapPin, title: { fr: 'Séjours & Packages', en: 'Stays & Packages' }, description: { fr: 'Packages complets combinant vols, hôtels, transferts, visites et activités pour des escapades fluides et maîtrisées.', en: 'Complete packages combining flights, hotels, transfers, tours, and activities for seamless, controlled getaways.' } },
      { icon: Briefcase, title: { fr: 'Assistance Visa', en: 'Visa Assistance' }, description: { fr: 'Accompagnement pratique sur les exigences visa, la préparation des documents, les rendez-vous et le suivi de dossier.', en: 'Practical guidance on visa requirements, document preparation, appointments, and application tracking.' } },
      { icon: Shield, title: { fr: 'Assurance Voyage', en: 'Travel Insurance' }, description: { fr: 'Solutions d’assurance voyage pour urgences médicales, retards, annulations, bagages et tranquillité d’esprit avant le départ.', en: 'Travel insurance solutions for medical emergencies, delays, cancellations, baggage, and peace of mind before departure.' } },
      { icon: Car, title: { fr: 'Location de Voitures', en: 'Car Rental' }, description: { fr: 'Location de voitures pour déplacements urbains, mobilité business, road trips et besoins avec chauffeur dans des destinations sélectionnées.', en: 'Car rentals for city drives, business mobility, road trips, and chauffeured needs in selected destinations.' } },
    ],
  },
  destinations: {
    eyebrow: { fr: 'Destinations', en: 'Destinations' },
    title: { fr: 'Depuis l’Afrique, le monde s’ouvre en rouge.', en: 'From Africa, the world opens in red.' },
    cards: [
      { image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&auto=format&fit=crop', label: { fr: 'Escapades villes de luxe', en: 'Luxury City Escapes' }, title: { fr: 'Monde entier', en: 'Worldwide' }, subtitle: { fr: 'Destinations mondiales', en: 'Global destinations' } },
      { image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop', label: { fr: 'Romance & Culture', en: 'Romance & Culture' }, title: { fr: 'Paris', en: 'Paris' }, subtitle: { fr: 'Ville lumière', en: 'City of light' } },
      { image: 'https://images.unsplash.com/photo-1544144433-d50aff500b91?w=800&auto=format&fit=crop', label: { fr: 'Retraite balnéaire', en: 'Beach Retreats' }, title: { fr: 'Séjours insulaires', en: 'Island Stays' }, subtitle: { fr: 'Escapades tropicales', en: 'Tropical escapes' } },
    ],
  },
  experiences: {
    eyebrow: { fr: 'Expériences', en: 'Experiences' },
    title: { fr: 'Des voyages conçus autour de votre raison de partir.', en: 'Trips designed around your reason to go.' },
    items: [
      { icon: Briefcase, title: { fr: 'Voyages d’Affaires', en: 'Business Travel' }, description: { fr: 'Vols efficaces, hôtels centraux, transferts et gestion d’itinéraires pour réunions et missions professionnelles.', en: 'Efficient flights, central hotels, transfers, and itinerary management for meetings and professional missions.' } },
      { icon: Users, title: { fr: 'Vacances en Famille', en: 'Family Vacations' }, description: { fr: 'Séjours confortables, trajets adaptés aux enfants, activités et organisation groupée pour simplifier le voyage.', en: 'Comfortable stays, child-friendly transport, activities, and group planning to simplify the trip.' } },
      { icon: Heart, title: { fr: 'Lunes de Miel & Célébrations', en: 'Honeymoons & Celebrations' }, description: { fr: 'Resorts romantiques, croisières, transferts privés et attentions mémorables pour les grands moments.', en: 'Romantic resorts, cruises, private transfers, and memorable touches for the big moments.' } },
      { icon: Compass, title: { fr: 'Escapades de Groupe', en: 'Group Getaways' }, description: { fr: 'Coordination des vols, chambres, transports et expériences pour amis, équipes, associations et événements.', en: 'Coordinated flights, rooms, transport, and experiences for friends, teams, associations, and events.' } },
    ],
  },
  testimonials: {
    eyebrow: { fr: 'Témoignages', en: 'Testimonials' },
    title: { fr: 'Apprécié par les voyageurs du monde entier.', en: 'Loved by travelers around the world.' },
    items: [
      { name: 'Aminata Diallo', role: { fr: 'Directrice Marketing', en: 'Marketing Director' }, quote: { fr: 'MyRed Travels a rendu notre voyage d’affaires à Paris irréprochable. Des vols aux transports terrestres, tout était coordonné en un seul lieu.', en: 'MyRed Travels made our Paris business trip flawless. From flights to ground transport, everything was coordinated in one place.' }, rating: 5 },
      { name: 'Koffi B', role: { fr: 'Voyageur en famille', en: 'Family Traveler' }, quote: { fr: 'Nous avons réservé des vacances en famille à la plage et l’équipe a géré chaque détail. Les enfants se sont bien amusés et nous avons enfin pu nous détendre.', en: 'We booked a family beach holiday and the team handled every detail. The kids had a great time and we finally relaxed.' }, rating: 5 },
      { name: 'Sarah L.', role: { fr: 'Voyageuse de lune de miel', en: 'Honeymoon Traveler' }, quote: { fr: 'Une belle escapade insulaire avec transferts privés et attentions romantiques. MyRed Travels a parfaitement compris ce que nous voulions.', en: 'A beautiful island escape with private transfers and romantic touches. MyRed Travels understood exactly what we wanted.' }, rating: 5 },
    ],
  },
  footer: {
    description: { fr: 'Vols, hôtels, transferts, séjours, visas, croisières et expériences sur mesure depuis l’Afrique vers le monde.', en: 'Flights, hotels, transfers, stays, visas, cruises, and experiences tailored from Africa to the world.' },
    services: { fr: 'Services', en: 'Services' },
    contact: { fr: 'Contact', en: 'Contact' },
    privacy: { fr: 'Politique de confidentialité', en: 'Privacy Policy' },
    terms: { fr: 'Conditions d’utilisation', en: 'Terms of Service' },
    rights: { fr: 'Tous droits réservés.', en: 'All rights reserved.' },
    phoneLocal: { fr: 'Téléphone local', en: 'Local phone' },
    phoneInternational: { fr: 'International', en: 'International' },
    whatsapp: { fr: 'WhatsApp', en: 'WhatsApp' },
    email: { fr: 'Email', en: 'Email' },
    paymentMethods: { fr: 'Moyens de paiement', en: 'Payment Methods' },
  },
};

const Hero = () => {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();
  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-coral via-coral to-[#F97316] text-white"
    >
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-28 md:px-12 md:pb-32 md:pt-36">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className={`transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <p className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              {t(content.hero.badge)}
            </p>
            <h1 className="mb-6 text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
              {t(content.hero.title)}
            </h1>
            <p className="mb-8 max-w-lg text-lg text-white/90">
              {t(content.hero.description)}
            </p>
            <div className="flex flex-col gap-3 md:hidden">
              <AppStoreBadge />
              <GooglePlayBadge />
            </div>
            <div className="hidden flex-col gap-3 sm:flex-row md:flex">
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-full bg-white px-8 text-coral hover:bg-white/90 text-base font-semibold">
                  {t(content.hero.download)}
                </Button>
              </a>
              <a href="#destinations">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-primary-foreground bg-transparent px-8 text-primary-foreground hover:bg-primary-foreground/10 text-base font-semibold"
                >
                  {t(content.hero.explore)}
                </Button>
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6">
              {content.hero.categories.map((item) => (
                <div key={item.number} className="flex items-start gap-3">
                  <span className="mt-1 text-xs font-bold opacity-60">{item.number}</span>
                  <div>
                    <p className="font-bold">{t(item.title)}</p>
                    <p className="text-sm text-white/80">{t(item.desc)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`flex justify-center transition-all duration-700 delay-200 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="relative w-64 md:w-72 lg:w-80">
              <div className="absolute -inset-4 rounded-[3rem] bg-white/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.5rem] border-8 border-white/20 bg-black shadow-2xl">
                <img
                  src="https://miaoda-conversation-file.s3cdn.medo.dev/user-d3irbo6242kg/app-dxkz3ebw9eyp/20260824/screen.jpeg"
                  alt="MyRed Travels app screenshot"
                  className="aspect-[9/19] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function LandingPage() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <header
        className="fixed left-0 right-0 top-0 z-50 bg-white/95 shadow-sm backdrop-blur-sm transition-all duration-300"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
          <a href="/" className="flex items-center gap-2">
            <img
              src={LOGO_URL}
              alt={t(content.header.logoAlt)}
              className="h-10 w-auto object-contain md:h-12"
            />
          </a>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-3 md:flex">
              <AppStoreBadge />
              <GooglePlayBadge />
            </div>
            <button
              onClick={toggleLanguage}
              className="flex items-center rounded-full border border-current px-3 py-1.5 text-sm font-semibold text-ink transition-colors hover:bg-black/5"
              aria-label={language === 'fr' ? 'Switch to English' : 'Passer en français'}
            >
              <span className={language === 'fr' ? 'text-coral' : 'text-ink'}>FR</span>
              <span className="mx-2 opacity-40">/</span>
              <span className={language === 'en' ? 'text-coral' : 'text-ink'}>EN</span>
            </button>
          </div>
        </div>
      </header>

      <Hero />

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
        <Section className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-coral">{t(content.services.eyebrow)}</p>
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight text-ink md:text-4xl">
            {t(content.services.title)}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-steel">
            {t(content.services.description)}
          </p>
        </Section>

        <Section>
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-coral">{t(content.services.sectionTitle)}</p>
            <h2 className="text-3xl font-extrabold text-ink md:text-4xl">{t(content.services.sectionSubtitle)}</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.services.items.map((service) => (
              <ServiceCard
                key={t(service.title)}
                icon={service.icon}
                title={t(service.title)}
                description={t(service.description)}
              />
            ))}
          </div>
        </Section>
      </section>

      <section id="destinations" className="bg-gradient-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <Section className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-coral">{t(content.destinations.eyebrow)}</p>
            <h2 className="text-3xl font-extrabold text-ink md:text-4xl">
              {t(content.destinations.title)}
            </h2>
          </Section>

          <Section>
            <div className="grid gap-6 md:grid-cols-3">
              {content.destinations.cards.map((destination) => (
                <DestinationCard
                  key={t(destination.title)}
                  image={destination.image}
                  label={t(destination.label)}
                  title={t(destination.title)}
                  subtitle={t(destination.subtitle)}
                />
              ))}
            </div>
          </Section>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
        <Section className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-coral">{t(content.experiences.eyebrow)}</p>
          <h2 className="text-3xl font-extrabold text-ink md:text-4xl">
            {t(content.experiences.title)}
          </h2>
        </Section>

        <Section>
          <div className="grid gap-5 md:grid-cols-2">
            {content.experiences.items.map((experience) => (
              <ExperienceCard
                key={t(experience.title)}
                icon={experience.icon}
                title={t(experience.title)}
                description={t(experience.description)}
              />
            ))}
          </div>
        </Section>
      </section>

      <section className="bg-gradient-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <Section className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-coral">{t(content.testimonials.eyebrow)}</p>
            <h2 className="text-3xl font-extrabold text-ink md:text-4xl">
              {t(content.testimonials.title)}
            </h2>
          </Section>

          <Section>
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {content.testimonials.items.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <TestimonialCard
                      name={testimonial.name}
                      role={t(testimonial.role)}
                      quote={t(testimonial.quote)}
                      rating={testimonial.rating}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4 md:-left-12 border-mist text-ink hover:bg-coral-light hover:text-coral" />
              <CarouselNext className="-right-4 md:-right-12 border-mist text-ink hover:bg-coral-light hover:text-coral" />
            </Carousel>
          </Section>
        </div>
      </section>

      <footer className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-12">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="mb-4 flex items-center gap-2">
                <img
                  src={LOGO_URL}
                  alt={t(content.header.logoAlt)}
                  className="h-12 w-auto rounded-lg bg-white object-contain p-1"
                />
              </div>
              <p className="mb-6 max-w-md text-sm leading-relaxed text-white/70">
                {t(content.footer.description)}
              </p>
              <div className="flex gap-3">
                <AppStoreBadge />
                <GooglePlayBadge />
              </div>
              <PaymentMethods title={t(content.footer.paymentMethods)} />
            </div>
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/50">{t(content.footer.services)}</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li>{t(content.services.items[0].title)}</li>
                <li>{t(content.services.items[1].title)}</li>
                <li>{t(content.services.items[2].title)}</li>
                <li>{t(content.services.items[3].title)}</li>
                <li>{t(content.services.items[5].title)}</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/50">{t(content.footer.contact)}</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li>
                  <span className="block text-xs text-white/50">{t(content.footer.phoneLocal)}</span>
                  <a href="tel:+2250103863939" className="hover:text-white">+225 01 03 86 39 39</a>
                </li>
                <li>
                  <span className="block text-xs text-white/50">{t(content.footer.phoneInternational)}</span>
                  <a href="tel:+33665970969" className="hover:text-white">+33 6 65 97 09 69</a>
                </li>
                <li>
                  <span className="block text-xs text-white/50">{t(content.footer.whatsapp)}</span>
                  <a href="https://wa.me/2250556162828" target="_blank" rel="noopener noreferrer" className="hover:text-white">+225 05 56 16 28 28</a>
                </li>
                <li>
                  <span className="block text-xs text-white/50">{t(content.footer.email)}</span>
                  <a href="mailto:contact@myredtravels.com" className="hover:text-white">contact@myredtravels.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
            <p className="text-xs text-white/50">© {new Date().getFullYear()} MyRed Travels. {t(content.footer.rights)}</p>
            <div className="flex gap-6 text-xs text-white/50">
              <a href="/privacy-policy" className="hover:text-white">{t(content.footer.privacy)}</a>
              <a href="/terms-conditions" className="hover:text-white">{t(content.footer.terms)}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
