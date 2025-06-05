import HeroSection from "./components/hero-section"
import AboutSection from "./components/about-section"
import ServicesSection from "./components/services-section"
import BenefitsSection from "./components/benefits-section"
import TestimonialsSection from "./components/testimonials-section"
import ScrollSnackbar from "./components/scroll-snackbar"
import CTABanner from "./components/cta-banner"
import FAQSection from "./components/faq-section"
import Footer from "./components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CTABanner />
      <FAQSection />
      <Footer />
      <ScrollSnackbar />
    </main>
  )
}
