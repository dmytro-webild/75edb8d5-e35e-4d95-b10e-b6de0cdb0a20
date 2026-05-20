"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="mediumLargeSizeLargeTitles"
        background="noise"
        cardStyle="inset"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Serviço",
          id: "servicos",
        },
        {
          name: "Procedimentos",
          id: "procedimentos",
        },
        {
          name: "Contatos",
          id: "contatos",
        },
      ]}
      brandName="+SORRISO"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-animated",
      }}
      title="Sorria com confiança no +SORRISO"
      description="Transformamos sorrisos com tecnologia de ponta e um atendimento humanizado dedicado à sua saúde bucal."
      buttons={[
        {
          text: "Agendar Consulta",
          href: "#contatos",
        },
      ]}
      carouselItems={[
        {
          id: "1",
          imageSrc: "http://img.b2bpic.net/free-photo/patients-asking-informations-filling-dental-document-preparing-teeth-exemination-senior-woman-sitting-chair-waiting-area-crowded-orthodontist-office-while-doctor-working-background_482257-3583.jpg",
          imageAlt: "Care",
        },
        {
          id: "2",
          imageSrc: "http://img.b2bpic.net/free-photo/female-patient-opening-her-mouth-doctor-look-her-throat-otolaryngologist-examines-sore-throat-patient_657921-185.jpg",
          imageAlt: "Clinic",
        },
        {
          id: "3",
          imageSrc: "http://img.b2bpic.net/free-photo/orthodontist-putting-surgical-gloves-office_23-2148338098.jpg",
          imageAlt: "Expertise",
        },
        {
          id: "4",
          imageSrc: "http://img.b2bpic.net/free-photo/full-equiped-medical-cabinet_1303-23915.jpg",
          imageAlt: "Smile",
        },
        {
          id: "5",
          imageSrc: "http://img.b2bpic.net/free-photo/crowded-stomatology-waiting-area-with-people-filling-form-dental-consultation_482257-4858.jpg",
          imageAlt: "Patient",
        },
        {
          id: "6",
          imageSrc: "http://img.b2bpic.net/free-photo/positive-carefree-female-teenager-makes-peace-gesture-eyes-smiles-toothily-feels-glad-forgets-about-troubles-dressed-casual-green-t-shirt-isolated-white-background-body-language_273609-61748.jpg",
          imageAlt: "Health",
        },
      ]}
    />
  </div>

  <div id="servicos" data-section="servicos">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      features={[
        {
          title: "Clareamento",
          description: "Recupere o brilho dos seus dentes com nossas técnicas seguras e eficazes.",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-portrait-young-beautiful-smiling-woman-looking-trendy-girl-casual-summer-hoodie-skirt-clothes_158538-1429.jpg",
          imageAlt: "Clareamento",
        },
        {
          title: "Canal",
          description: "Tratamento de canal moderno para salvar seu dente com o máximo de conforto.",
          imageSrc: "http://img.b2bpic.net/free-photo/dentist-doing-dental-treatment-female-patient_23-2147862072.jpg",
          imageAlt: "Canal",
        },
        {
          title: "Obturação",
          description: "Restauração duradoura para dentes cariados, devolvendo funcionalidade ao seu sorriso.",
          imageSrc: "http://img.b2bpic.net/free-photo/brave-small-child-gets-dental-treatment-by-expirienced-doctor-dental-clinic_613910-21732.jpg",
          imageAlt: "Obturação",
        },
      ]}
      title="Nossos Serviços"
      description="Procedimentos especializados para garantir a saúde e estética do seu sorriso."
    />
  </div>

  <div id="procedimentos" data-section="procedimentos">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="Procedimentos"
      title="Por que escolher nossa técnica?"
      description="Utilizamos materiais de alta biocompatibilidade e protocolos rigorosos para garantir resultados duradouros e sem dor."
      subdescription="Cada detalhe do seu tratamento é planejado para maximizar a durabilidade e o conforto pós-procedimento."
      icon={Sparkles}
      imageSrc="http://img.b2bpic.net/free-photo/office-with-face-mask-disinfectant_23-2148727695.jpg"
      mediaAnimation="slide-up"
      imageAlt="dentist tools dental care"
    />
  </div>

  <div id="depoimentos" data-section="depoimentos">
      <TestimonialCardThirteen
      animationType="scale-rotate"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Ana Silva",
          handle: "@anasilva",
          testimonial: "O clareamento ficou perfeito, muito natural!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-medic-examining-male-patient-office-routine-checkup-discussing-about-treatment-plan_482257-135628.jpg",
        },
        {
          id: "2",
          name: "Bruno Souza",
          handle: "@brunosouza",
          testimonial: "O tratamento de canal foi super tranquilo.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/patients-sitting-chairs-waiting-room-stomatological-clinic-filling-stomatological-forms-while-doctor-working-background-concept-crowded-professional-orthodontist-reception-office_482257-3587.jpg",
        },
        {
          id: "3",
          name: "Carla Lima",
          handle: "@carlalima",
          testimonial: "Clínica excelente, profissionais muito atenciosos.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/teen-girl-selfie-with-big-smile-sky-youth-casual-vibe_169016-69144.jpg",
        },
        {
          id: "4",
          name: "Daniel Porto",
          handle: "@danielp",
          testimonial: "Minha obturação ficou imperceptível. Recomendo!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/natural-beauty-young-woman_329181-1207.jpg",
        },
        {
          id: "5",
          name: "Elisa Marques",
          handle: "@elisam",
          testimonial: "Melhor atendimento odontológico que já recebi.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-career-guidance-items-dentists_23-2149443532.jpg",
        },
      ]}
      showRating={true}
      title="O que nossos pacientes dizem"
      description="Confira relatos reais de quem transformou o sorriso conosco."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "Quanto tempo dura o clareamento?",
          content: "Geralmente mantém-se por até 2 anos dependendo dos seus hábitos alimentares.",
        },
        {
          id: "q2",
          title: "O canal dói muito?",
          content: "Hoje utilizamos anestésicos potentes que eliminam qualquer desconforto durante o processo.",
        },
        {
          id: "q3",
          title: "A obturação é permanente?",
          content: "Elas são extremamente duradouras, mas exigem check-ups regulares.",
        },
      ]}
      title="Dúvidas Frequentes"
      description="Saiba mais sobre os cuidados essenciais com seu sorriso."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contatos" data-section="contatos">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      tag="Contato"
      title="Agende sua consulta hoje"
      description="Estamos prontos para atender você com o carinho que seu sorriso merece."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="+SORRISO"
      columns={[
        {
          title: "Links",
          items: [
            {
              label: "Início",
              href: "#",
            },
            {
              label: "Serviços",
              href: "#servicos",
            },
          ],
        },
        {
          title: "Clínica",
          items: [
            {
              label: "Procedimentos",
              href: "#procedimentos",
            },
            {
              label: "Contato",
              href: "#contatos",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
