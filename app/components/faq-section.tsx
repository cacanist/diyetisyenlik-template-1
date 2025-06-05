"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const faqs = [
    {
      question: "Gerçekten ücretsiz mi?",
      answer:
        "Evet, ilk görüşme tamamen ücretsizdir. Hiçbir ödeme talep edilmez, kart bilgisi istenmez. Sadece tanışmak ve ihtiyaçlarınızı anlamak için bir fırsat.",
    },
    {
      question: "Online görüşmeler etkili mi?",
      answer:
        "Kesinlikle! Online danışmanlık, yüz yüze görüşmeler kadar etkilidir. Video görüşme, WhatsApp takibi ve kişiselleştirilmiş planlarla tam destek sağlıyorum.",
    },
    {
      question: "Yüz yüze randevular nerede?",
      answer:
        "İzmir merkezde bulunan kliniğimde yüz yüze görüşmeler yapıyorum. Adres bilgilerini WhatsApp'tan paylaşabilirim.",
    },
    {
      question: "Gizliliğim nasıl korunuyor?",
      answer:
        "Tüm kişisel bilgileriniz ve sağlık verileriniz tamamen gizli tutulur. Mesleki etik kuralları gereği hiçbir bilginiz üçüncü kişilerle paylaşılmaz.",
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Sıkça Sorulan Sorular</h2>
          <p className="text-lg text-gray-600">Merak ettiklerinizin cevapları burada</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-2xl px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
