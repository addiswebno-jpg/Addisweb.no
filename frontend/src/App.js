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
  Star
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
        <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <span className="text-2xl font-bold text-gray-900 tracking-tight">Addis Web</span>
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#prosess" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Prosess</a>
          <a href="#tjenester" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Hvem vi hjelper</a>
          <a href="#portefolje" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Portefølje</a>
          <a href="#om-meg" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Om Meg</a>
          <a href="#faq" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">FAQ</a>
        </div>
        <div>
          <Button 
            onClick={() => window.open(CAL_URL, "_blank")}
            className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-6 shadow-sm"
          >
            Book en samtale
          </Button>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-50/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-2xl"
        >
          <motion.div variants={fadeIn} className="inline-flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-800 mb-6 border border-gray-200">
            <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
            <span>Tar inn 3 nye prosjekter denne måneden</span>
          </motion.div>
          
          <motion.h1 variants={fadeIn} className="text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            Vi bygger din nye nettside <span className="text-gray-400">helt gratis.</span>
          </motion.h1>
          
          <motion.p variants={fadeIn} className="text-xl text-gray-600 mb-8 leading-relaxed">
            En 100 % risikofri løsning. Liker du ikke resultatet? Da betaler du ingenting. Liker du den? Betal en engangssum på <strong className="text-gray-900 font-semibold">10 000 kr</strong> – og nettsiden er din.
          </motion.p>
          
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={() => window.open(CAL_URL, "_blank")}
              className="bg-gray-900 hover:bg-gray-800 text-white rounded-full h-14 px-8 text-base shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group"
            >
              Få din gratis skisse
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById("portefolje")?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full h-14 px-8 text-base border-gray-300 hover:bg-gray-50"
            >
              Se vårt arbeid
            </Button>
          </motion.div>
          
          <motion.div variants={fadeIn} className="mt-8 flex items-center gap-4 text-sm text-gray-500 font-medium">
            <div className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500" /> Ingen bindingstid</div>
            <div className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500" /> Ingen skjulte kostnader</div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-gray-50 rounded-3xl transform -rotate-3 border border-gray-200"></div>
          <img 
            src="https://images.unsplash.com/photo-1549399905-5d1bad747576?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2V8ZW58MHx8fHwxNzc4NDE0OTg0fDA&ixlib=rb-4.1.0&q=85" 
            alt="Modern Web Design Workspace" 
            className="relative z-10 rounded-2xl shadow-2xl object-cover h-[500px] w-full max-w-lg mx-auto transform hover:scale-[1.02] transition-transform duration-500"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

const Process = () => (
  <section id="prosess" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Slik fungerer det</h2>
        <p className="text-lg text-gray-600">En enkel, smertefri og risikofri prosess for å få din drømmenettside.</p>
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
  <section id="tjenester" className="py-24 bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Nettsider skreddersydd for din bransje.</h2>
          <p className="text-xl text-gray-400 mb-8">Vi forstår at en frisørsalong har andre behov enn et rørleggerfirma. Derfor designer vi alltid med din spesifikke målgruppe i tankene.</p>
          
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Scissors className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Salonger & Velvære</h4>
                <p className="text-gray-400">Vis frem porteføljen din og gjør det superenkelt for kunder å finne booking-lenken din.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Rørleggere & Håndverkere</h4>
                <p className="text-gray-400">Bygg tillit lokalt med en profesjonell nettside som fremhever dine tjenester og referanser.</p>
              </div>
            </li>
          </ul>
        </motion.div>
        
        <div className="grid grid-cols-2 gap-4">
          <img 
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxzYWxvbiUyMGludGVyaW9yfGVufDB8fHx8MTc3ODM5NTQzOHww&ixlib=rb-4.1.0&q=85" 
            alt="Moderne Salong" 
            className="rounded-2xl h-64 w-full object-cover transform translate-y-8"
          />
          <img 
            src="https://images.unsplash.com/photo-1659353588229-6870b3b25800?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjBwbHVtYmVyfGVufDB8fHx8MTc3ODQxNDk4NHww&ixlib=rb-4.1.0&q=85" 
            alt="Profesjonell Håndverker" 
            className="rounded-2xl h-64 w-full object-cover"
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
    { name: "Jakobsen Rør", url: "https://jakobsenror.no/" },
    { name: "Loqui Events", url: "https://www.loquievents.no/" },
    { name: "Lume Wellness", url: "https://www.lumewellness.no/" },
    { name: "Norsk Frøhandel", url: "https://norskfrohandel.vercel.app/" },
    { name: "Companion Agent", url: "https://www.companionagent.no/" }
  ];

  return (
    <section id="portefolje" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Se hva vi har bygget</h2>
            <p className="text-lg text-gray-600">Her er et utvalg av nettsider vi har levert til fornøyde kunder.</p>
          </motion.div>
        </div>
        
        <div className="relative px-6 md:px-12">
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
                    className="group block rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 h-full"
                  >
                    <div className="h-64 overflow-hidden relative bg-gray-100 flex items-center justify-center">
                      <img 
                        src={`https://s0.wp.com/mshots/v1/${encodeURIComponent(project.url)}?w=800`} 
                        alt={project.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                        }}
                      />
                      <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/10 transition-colors duration-300" />
                    </div>
                    <div className="p-6 flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">{project.name}</h3>
                        <p className="text-sm text-gray-500 truncate mt-1">{project.url.replace("https://", "").replace("www.", "").replace("/", "")}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-6" />
            <CarouselNext className="hidden md:flex -right-6" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jørgen Jakobsen",
      role: "Daglig leder, Jakobsen Rør",
      content: "Addis Web leverte langt over forventning. Nettsiden vår ser utrolig profesjonell ut, og vi har allerede fått flere henvendelser via kontaktskjemaet. Anbefales på det sterkeste!",
      rating: 5
    },
    {
      name: "Sara L.",
      role: "Eier, Lume Wellness",
      content: "Jeg trengte en stilren nettside for salongen min som også gjorde booking enkelt. Natnael forstod nøyaktig hva jeg var ute etter. Utrolig smidig prosess og null stress for meg.",
      rating: 5
    },
    {
      name: "Emilie R.",
      role: "Loqui Events",
      content: "Vi hadde null peiling på nettsider, men fikk god veiledning hele veien. Resultatet ble et lekkert og moderne design som virkelig representerer merkevaren vår. Veldig fornøyd med risk-free modellen!",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hva kundene våre sier</h2>
            <p className="text-lg text-gray-400">Vi er stolte av å bygge løsninger som skaper ekte verdi for våre kunder.</p>
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
              className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300 mb-8 text-lg italic leading-relaxed">"{t.content}"</p>
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
  <section id="om-meg" className="py-24 bg-white overflow-hidden border-t border-gray-100">
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
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center space-x-2 bg-gray-50 px-3 py-1 rounded-full text-sm font-medium text-gray-600 mb-6 border border-gray-200">
            <span>Personlig oppfølging</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Hei, jeg er Natnael.
          </h2>
          <div className="space-y-6 text-lg text-gray-600">
            <p>
              Jeg er grunnleggeren av Addis Web. De siste to årene har jeg spesialisert meg på å bygge skreddersydde, moderne nettsider og nettbutikker for bedrifter som ønsker å skille seg ut på nett.
            </p>
            <p>
              Min tilnærming er enkel: <strong className="text-gray-900">Moderne design, null teknisk rot, og fullt fokus på resultater.</strong> Jeg mener at en nettside ikke bare skal se fantastisk ut – den skal være et effektivt verktøy som tiltrekker kunder og skaper vekst for din bedrift.
            </p>
            <p>
              Som din dedikerte partner håndterer jeg hele prosessen fra første skisse til lansering. Målet mitt er å gjøre det så enkelt og smertefritt som mulig for deg å få en premium tilstedeværelse på nett.
            </p>
          </div>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
             <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold text-xl shadow-md">
                  N
                </div>
                <div>
                  <div className="font-bold text-gray-900">Natnael Seifo</div>
                  <div className="text-sm text-gray-500">Grunnlegger, Addis Web</div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const FaqSection = () => (
  <section id="faq" className="py-24 bg-gray-50 border-t border-gray-100">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ofte stilte spørsmål</h2>
          <p className="text-lg text-gray-600">Svar på det meste du lurer på rundt vår risikofrie modell.</p>
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
            <AccordionContent className="text-gray-600 text-base leading-relaxed pt-2">
              Da betaler du absolutt ingenting. Dette er hele poenget med vårt tilbud – du har ingen forpliktelser før du godkjenner resultatet. Vi bygger siden gratis for å bevise at vi kan levere kvalitet.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-b border-gray-100 py-2">
            <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline hover:text-gray-600 transition-colors">
              Er det noen skjulte kostnader?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-base leading-relaxed pt-2">
              Nei. Prisen er 10 000 kr. Dette er en engangskostnad for selve designet og utviklingen. Du må kun dekke standardkostnader for ditt eget domene og webhotell (som oftest 100-200 kr i måneden), som du eier 100 % selv.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-b border-gray-100 py-2">
            <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline hover:text-gray-600 transition-colors">
              Hvor lang tid tar det?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-base leading-relaxed pt-2">
              Normalt tar det 1-2 uker fra vi starter til vi har et ferdig utkast du kan vurdere. Tiden kan variere litt avhengig av hvor raskt vi får tekst og bilder fra deg.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border-b-0 py-2">
            <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline hover:text-gray-600 transition-colors">
              Får jeg en nettside som ser bra ut på mobil?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-base leading-relaxed pt-2">
              Absolutt. Alle nettsider vi lager er 100 % responsive, noe som betyr at de tilpasser seg automatisk og ser perfekte ut på både mobiltelefoner, nettbrett og datamaskiner.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-950 text-white py-20 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Klar for en ny, profesjonell nettside?</h2>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Book en kort, uforpliktende prat i dag, og la oss begynne på din gratis skisse.
        </p>
        <Button 
          size="lg" 
          onClick={() => window.open(CAL_URL, "_blank")}
          className="bg-white hover:bg-gray-100 text-gray-900 rounded-full h-14 px-10 text-lg font-semibold shadow-xl mb-12 hover:scale-105 transition-transform"
        >
          Book din gratis demo
        </Button>
      </motion.div>
      
      <div className="border-t border-gray-800 pt-10 mt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <div className="font-bold text-xl text-white mb-4 md:mb-0">Addis Web</div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <a href="mailto:natnael@addisweb.no" className="hover:text-white transition-colors">
            natnael@addisweb.no
          </a>
        </div>
        <div className="mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} Addis Web. Alle rettigheter reservert.
        </div>
      </div>
    </div>
  </footer>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-gray-900 selection:text-white font-sans">
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
