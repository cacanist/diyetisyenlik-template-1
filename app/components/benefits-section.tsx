"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Check } from "lucide-react"

export default function BenefitsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    "%100 ücretsiz ilk görüşme - hiçbir ödeme talep edilmez",
    "Online & yüz yüze esneklik - size uygun şekilde",
    "Kişiye özel planlar - tek tip diyet yok",
    "Psikolojik destekli yaklaşım - sadece beslenme değil",
    "Haftalık takip ve analiz - sürekli destek",
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Neden Benimle Çalışmalısınız?</h2>
          <p className="text-lg text-gray-600">Sağlıklı yaşam yolculuğunuzda yanınızda olacağım</p>
        </motion.div>

        <div className="space-y-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex items-center space-x-4 p-6 bg-emerald-50 rounded-2xl"
            >
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="h-5 w-5 text-white" />
              </div>
              <p className="text-lg text-gray-800 font-medium">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
