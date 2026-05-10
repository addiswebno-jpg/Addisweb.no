import React, { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import { 
  ArrowRight, 
  CheckCircle2, 
  MonitorSmartphone, 
  Paintbrush, 
  Scissors, 
  Wrench,
  Mail,
  Star,
  Layout,
  TrendingUp,
  Award
} from "lucide-react";
import { Button } from "./components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";
import { DynamicIslandTOC } from "./components/ui/dynamic-island-toc";

const CAL_URL = "https://cal.com/natnael-seifo-uhknjq/netttside-utvikling-demo";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex-shrink-0 flex items-center cursor-pointer gap-3" onClick={() => window.scrollTo(0,0)}>
          <div className="bg-gray-900 text-white p-2 rounded-xl shadow-sm">
            <Layout className="w-5 h-5" />
          </div>
          <span className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">Addis Web</span>
        </div>
        <div>
          <Button 
            onClick={() => window.open(CAL_URL, "_blank")}
            className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-5 sm:px-6 shadow-sm"
          >
            <span className="hidden sm:inline">Book en samtale</span>
            <span className="sm:hidden">Book samtale</span>
          </Button>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-50/50 min-h-[90vh] flex items-center">
    <div data-toc data-toc-title="Hjem" data-toc-depth="1" id="hjem" className="absolute top-0"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-2xl"
        >
          <motion.div variants={fadeIn} className="inline-flex items-center space-x-2 bg-gray-100 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-gray-800 mb-6 border border-gray-200">
            <span className="flex h-2 w-2 rounded-full bg-green-500 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span></span>
            <span>Tar inn 3 nye prosjekter denne måneden</span>
          </motion.div>
          
          <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            Vi bygger din nye nettside <span className="text-gray-400">helt gratis.</span>
          </motion.h1>
          
          <motion.p variants={fadeIn} className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed font-medium">
            En 100 % risikofri løsning. Liker du ikke resultatet? Da betaler du ingenting. Liker du den? Betal en engangssum på <strong className="text-gray-900 font-bold">10 000 kr</strong> – og nettsiden er din.
          </motion.p>
          
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={() => window.open(CAL_URL, "_blank")}
              className="relative overflow-hidden bg-gray-900 hover:bg-gray-800 text-white rounded-full h-14 px-8 text-base shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 group w-full sm:w-auto border-2 border-gray-900"
            >
              <div className="absolute inset-0 w-full h-full bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10 flex items-center gap-2 font-semibold">
                Få din gratis skisse
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById("portefolje")?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full h-14 px-8 text-base border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 font-semibold w-full sm:w-auto justify-center transition-colors"
            >
              Se vårt arbeid
            </Button>
          </motion.div>
          
          <motion.div variants={fadeIn} className="mt-8 flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 font-semibold">
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-500" /> Ingen bindingstid</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-500" /> Ingen skjulte kostnader</div>
            </div>
            
            <div className="flex items-center gap-2 mt-2 p-3 bg-white rounded-xl shadow-sm border border-gray-100 inline-flex w-fit">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              <span className="text-sm font-bold text-gray-900">5.0 <span className="text-gray-500 font-normal">Kundetilfredshet</span></span>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:h-[600px] flex items-center justify-center mt-10 lg:mt-0"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-gray-50 rounded-3xl transform -rotate-3 border border-gray-200"></div>
          <img 
            src="https://images.unsplash.com/photo-1549399905-5d1bad747576?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2V8ZW58MHx8fHwxNzc4NDE0OTg0fDA&ixlib=rb-4.1.0&q=85" 
            alt="Moderne kontormiljø for webutvikling" 
            className="relative z-10 rounded-2xl shadow-2xl object-cover h-[400px] sm:h-[500px] w-full max-w-lg mx-auto transform hover:scale-[1.02] transition-transform duration-500"
            fetchPriority="high"
            loading="eager"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

const Process = () => (
  <section id="prosess" className="py-24 bg-white relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 data-toc data-toc-title="Prosess" data-toc-depth="1" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Veien til din nye nettside</h2>
        <p className="text-lg text-gray-600 px-4">En enkel, smertefri og risikofri prosess for å få nettsiden som skaffer deg flere kunder.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            step: "01",
            title: "Gratis Designutkast",
            desc: "Vi tar en kort prat om dine behov. Deretter begynner vi å designe nettsiden din – helt gratis og uten forpliktelser.",
            icon: <Paintbrush className="w-6 h-6 text-gray-900" />
          },
          {
            step: "02",
            title: "Gjennomgang",
            desc: "Innen 1-2 uker presenterer vi den ferdige nettsiden. Du får se nøyaktig hvordan den ser ut og fungerer i praksis.",
            icon: <MonitorSmartphone className="w-6 h-6 text-gray-900" />
          },
          {
            step: "03",
            title: "Betal kun hvis du elsker den",
            desc: "Er du 100 % fornøyd? Da betaler du 10 000 kr, og vi lanserer nettsiden for deg. Liker du den ikke, betaler du null.",
            icon: <CheckCircle2 className="w-6 h-6 text-gray-900" />
          }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="relative p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-5xl font-extrabold text-gray-200 mb-6">{item.step}</div>
            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 border border-gray-100">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="tjenester" className="py-24 bg-gray-900 text-white relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-white mb-6 border border-white/10">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span>Skapt for konvertering</span>
          </div>
          <h2 data-toc data-toc-title="Resultater" data-toc-depth="1" className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Få flere kunder med en nettside bygget for din bransje.</h2>
          <p className="text-lg md:text-xl text-gray-400 mb-8">Vi forstår at din bransje har unike behov. Derfor designer vi ikke bare "pene" nettsider – vi bygger salgsmaskiner som konverterer besøkende til betalende kunder.</p>
          
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Scissors className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Salonger & Velvære</h4>
                <p className="text-gray-400">Få en fullbooket kalender. Vi bygger en stilren nettside som fremhever arbeidet ditt og gjør booking silkemykt for kundene.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Rørleggere & Håndverkere</h4>
                <p className="text-gray-400">Skill deg ut fra konkurrentene. Vi bygger en tillitsvekkende nettside som gjør det enkelt for lokale kunder å velge akkurat deg.</p>
              </div>
            </li>
          </ul>
        </motion.div>
        
        <div className="grid grid-cols-2 gap-4">
          <img 
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxzYWxvbiUyMGludGVyaW9yfGVufDB8fHx8MTc3ODM5NTQzOHww&ixlib=rb-4.1.0&q=85" 
            alt="Moderne Salong for skjønnhet og velvære" 
            className="rounded-2xl h-48 md:h-64 w-full object-cover transform translate-y-8"
            loading="lazy"
          />
          <img 
            src="https://images.unsplash.com/photo-1659353588229-6870b3b25800?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjBwbHVtYmVyfGVufDB8fHx8MTc3ODQxNDk4NHww&ixlib=rb-4.1.0&q=85" 
            alt="Profesjonell Håndverker på jobb" 
            className="rounded-2xl h-48 md:h-64 w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

const Portfolio = () => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const projects = [
    { name: "Jakobsen Rør", owner: "Morten", url: "https://jakobsenror.no/", fallback: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80" },
    { name: "Loqui Events", owner: "Sandra", url: "https://www.loquievents.no/", fallback: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80" },
    { name: "Lume Wellness", owner: "Sara", url: "https://www.lumewellness.no/", fallback: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80" },
    { name: "Norsk Frøhandel", url: "https://norskfrohandel.vercel.app/", fallback: "https://images.unsplash.com/photo-1585320806297-9794b3e4ce88?auto=format&fit=crop&w=800&q=80" },
    { name: "Companion Agent", url: "https://www.companionagent.no/", fallback: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80" }
  ];

  return (
    <section id="portefolje" className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <div className="inline-flex items-center space-x-2 bg-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-gray-900 mb-4 border border-gray-200 shadow-sm">
              <Award className="w-4 h-4 text-gray-900" />
              <span>Stolt levert av oss</span>
            </div>
            <h2 data-toc data-toc-title="Portefølje" data-toc-depth="1" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Se hva vi har bygget</h2>
            <p className="text-lg text-gray-600 px-4">Et utvalg av nettsider som skaper resultater for fornøyde kunder.</p>
          </motion.div>
        </div>
        
        <div className="relative px-0 sm:px-6 md:px-12">
          <Carousel
            plugins={[plugin.current]}
            opts={{ align: "start", loop: true }}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-4">
              {projects.map((project, idx) => (
                <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="group block rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                  >
                    <div className="h-56 sm:h-64 overflow-hidden relative bg-gray-100 flex items-center justify-center border-b border-gray-50">
                      <img 
                        src={`https://s0.wp.com/mshots/v1/${encodeURIComponent(project.url)}?w=800`} 
                        alt={`Nettside preview for ${project.name}`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = project.fallback;
                        }}
                      />
                      <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/5 transition-colors duration-300" />
                    </div>
                    <div className="p-6 flex items-center justify-between flex-1">
                      <div className="max-w-[80%]">
                        <h3 className="font-bold text-gray-900 text-lg truncate group-hover:text-blue-600 transition-colors">{project.name}</h3>
                        {project.owner && <p className="text-xs font-semibold text-gray-500 mt-0.5 truncate uppercase tracking-wider">Eies av {project.owner}</p>}
                        <p className="text-sm text-gray-400 truncate mt-1">{project.url.replace("https://", "").replace("www.", "").replace("/", "")}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:bg-gray-900 group-hover:text-white transition-colors shadow-sm">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-6 shadow-md border-gray-200" aria-label="Forrige prosjekt" />
            <CarouselNext className="hidden md:flex -right-6 shadow-md border-gray-200" aria-label="Neste prosjekt" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Morten",
      role: "Eier, Jakobsen Rør",
      content: "Addis Web leverte langt over forventning. Nettsiden vår ser utrolig profesjonell ut, og det er nå kjempeenkelt for nye kunder å finne telefonnummeret vårt og ringe oss direkte. Anbefales på det sterkeste!",
      rating: 5
    },
    {
      name: "Sandra",
      role: "Eier, Loqui Events",
      content: "Vi hadde null peiling på nettsider, men fikk god veiledning hele veien. Resultatet ble et lekkert og moderne design som virkelig representerer merkevaren vår.",
      rating: 5
    },
    {
      name: "Sara",
      role: "Eier, Lume Wellness",
      content: "Jeg trengte en rask og stilren nettbutikk for kosttilskuddene våre. Natnael forstod nøyaktig hva jeg var ute etter, og kjøpsopplevelsen er nå fantastisk. Utrolig smidig prosess og null stress for meg.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 data-toc data-toc-title="Referanser" data-toc-depth="1" className="text-3xl md:text-4xl font-bold mb-4">Hva kundene våre sier</h2>
            <p className="text-lg text-gray-400 px-4">Vi er stolte av å bygge løsninger som skaper ekte verdi for våre kunder.</p>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6" aria-label={`Vurdering: ${t.rating} av 5 stjerner`}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500 drop-shadow-sm" />
                  ))}
                </div>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed font-medium">"{t.content}"</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center font-bold text-lg shadow-inner border border-gray-600">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-sm text-gray-400">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="om-meg" className="py-24 bg-white overflow-hidden border-t border-gray-100 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gray-100 rounded-3xl transform translate-x-4 translate-y-4"></div>
          <img 
            src="https://customer-assets.emergentagent.com/job_web-portfolio-no/artifacts/zzdngync_Natnael%20profilbilde.jpeg" 
            alt="Natnael Seifo - Grunnlegger av Addis Web" 
            className="relative z-10 rounded-3xl shadow-xl w-full object-cover max-h-[600px] hover:scale-[1.02] transition-transform duration-500"
            loading="lazy"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center space-x-2 bg-gray-50 px-3 py-1.5 rounded-full text-sm font-semibold text-gray-800 mb-6 border border-gray-200">
            <span>Personlig oppfølging</span>
          </div>
          <h2 data-toc data-toc-title="Om Meg" data-toc-depth="1" className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Hei, jeg er Natnael.
          </h2>
          <div className="space-y-6 text-lg text-gray-600">
            <p>
              Jeg er grunnleggeren av Addis Web. De siste to årene har jeg spesialisert meg på å bygge skreddersydde, moderne nettsider og nettbutikker for bedrifter som ønsker å skille seg ut på nett.
            </p>
            <p>
              Min tilnærming er enkel: <strong className="text-gray-900 font-bold">Moderne design, null teknisk rot, og fullt fokus på resultater.</strong> Jeg mener at en nettside ikke bare skal se fantastisk ut – den skal være et effektivt verktøy som tiltrekker kunder og skaper vekst for din bedrift.
            </p>
            <p>
              Som din dedikerte partner håndterer jeg hele prosessen fra første skisse til lansering. Målet mitt er å gjøre det så enkelt og smertefritt som mulig for deg å få en premium tilstedeværelse på nett.
            </p>
          </div>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
             <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold text-xl shadow-md">
                  N
                </div>
                <div>
                  <div className="font-bold text-gray-900">Natnael Seifo</div>
                  <div className="text-sm font-medium text-gray-500">Grunnlegger, Addis Web</div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const FaqSection = () => (
  <section id="faq" className="py-24 bg-gray-50 border-t border-gray-100 relative">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h2 data-toc data-toc-title="FAQ" data-toc-depth="1" className="text-3xl font-bold text-gray-900 mb-4">Ofte stilte spørsmål</h2>
          <p className="text-lg text-gray-600 px-4">Svar på det meste du lurer på rundt vår risikofrie modell.</p>
        </motion.div>
      </div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100"
      >
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-b border-gray-100 py-2">
            <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline hover:text-gray-600 transition-colors">
              Hva skjer hvis jeg ikke liker nettsiden?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-base leading-relaxed pt-2 font-medium">
              Da betaler du absolutt ingenting. Dette er hele poenget med vårt tilbud – du har ingen forpliktelser før du godkjenner resultatet. Vi bygger siden gratis for å bevise at vi kan levere kvalitet.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-b border-gray-100 py-2">
            <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline hover:text-gray-600 transition-colors">
              Er det noen skjulte kostnader?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-base leading-relaxed pt-2 font-medium">
              Nei. Prisen er 10 000 kr. Dette er en engangskostnad for selve designet og utviklingen. Du må kun dekke standardkostnader for ditt eget domene og webhotell (som oftest 100-200 kr i måneden), som du eier 100 % selv.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-b border-gray-100 py-2">
            <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline hover:text-gray-600 transition-colors">
              Hvor lang tid tar det?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-base leading-relaxed pt-2 font-medium">
              Normalt tar det 1-2 uker fra vi starter til vi har et ferdig utkast du kan vurdere. Tiden kan variere litt avhengig av hvor raskt vi får tekst og bilder fra deg.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border-b-0 py-2">
            <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline hover:text-gray-600 transition-colors">
              Får jeg en nettside som ser bra ut på mobil?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-base leading-relaxed pt-2 font-medium">
              Absolutt. Alle nettsider vi lager er 100 % responsive, noe som betyr at de tilpasser seg automatisk og ser perfekte ut på både mobiltelefoner, nettbrett og datamaskiner.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-950 text-white pt-20 pb-32 md:pb-24 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="flex flex-col items-center">
        <div className="flex gap-1 mb-8" aria-label="5 av 5 stjerner kundevurdering">
          {[1,2,3,4,5].map(i => <Star key={i} className="w-7 h-7 fill-yellow-400 text-yellow-400" />)}
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 px-4 leading-tight">Klar for å løfte bedriften din?</h2>
        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto px-4 leading-relaxed font-medium">
          Bli en av våre fornøyde kunder. Book en kort, uforpliktende prat i dag, og la oss begynne på din gratis skisse.
        </p>
        <Button 
          size="lg" 
          onClick={() => window.open(CAL_URL, "_blank")}
          className="relative overflow-hidden bg-white hover:bg-gray-100 text-gray-900 rounded-full h-14 px-10 text-lg font-bold shadow-xl mb-12 hover:scale-105 transition-transform group"
        >
          <span className="relative z-10">Book din gratis demo</span>
        </Button>
      </motion.div>
      
      <div className="border-t border-gray-800 pt-10 mt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-6 md:gap-0">
        <div className="font-bold text-xl text-white flex items-center gap-2 justify-center">
          <div className="bg-white/10 p-1.5 rounded-lg">
            <Layout className="w-4 h-4 text-white" />
          </div>
          Addis Web
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" aria-hidden="true" />
          <a href="mailto:natnael@addisweb.no" className="hover:text-white font-medium transition-colors" aria-label="Send e-post til natnael@addisweb.no">
            natnael@addisweb.no
          </a>
        </div>
        <div className="font-medium">
          &copy; {new Date().getFullYear()} Addis Web. Alle rettigheter reservert.
        </div>
      </div>
    </div>
  </footer>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-gray-900 selection:text-white font-sans overflow-x-hidden">
      <DynamicIslandTOC />
      <Navbar />
      <main>
        <Hero />
        <Process />
        <Services />
        <Portfolio />
        <Testimonials />
        <About />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
