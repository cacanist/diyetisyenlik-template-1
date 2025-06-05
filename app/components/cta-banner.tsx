"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { CalendarDays, Gift, Clock, Shield } from "lucide-react"

export default function CTABanner() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="py-12 md:py-20 px-4 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 relative overflow-hidden"
    >
      {/* Dekoratif elementler */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white bg-opacity-10 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white bg-opacity-5 rounded-full translate-x-48 translate-y-48"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-amber-400 bg-opacity-20 rounded-full"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {/* Ana başlık */}
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Gift className="h-10 w-10 text-white" />
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Haydi <span className="text-amber-300">Tanışalım!</span>
            </h2>
            <p className="text-lg md:text-xl text-emerald-100 mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto">
              Sağlıklı yaşam yolculuğunuza bugün başlayın. İlk görüşmemiz tamamen ücretsiz ve hiçbir yükümlülük
              gerektirmiyor.
            </p>
          </div>

          {/* Özellikler */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10"
          >
            <div className="flex items-center justify-center space-x-3 text-white">
              <Gift className="h-6 w-6 text-amber-300" />
              <span className="font-medium">%100 Ücretsiz</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white">
              <Clock className="h-6 w-6 text-amber-300" />
              <span className="font-medium">15 Dakika Görüşme</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white">
              <Shield className="h-6 w-6 text-amber-300" />
              <span className="font-medium">Gizlilik Garantisi</span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-white text-emerald-700 hover:bg-gray-50 px-6 md:px-10 py-4 md:py-6 text-base md:text-xl rounded-2xl shadow-2xl font-bold transform transition-all duration-300 w-full md:w-auto"
              asChild
            >
              <a href="https://wa.me/905555555555" target="_blank" rel="noopener noreferrer">
                <CalendarDays className="mr-2 md:mr-3 h-5 md:h-6 w-5 md:w-6" />
                <span className="text-center">WhatsApp'tan Ücretsiz Görüşme Başlat</span>
              </a>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-emerald-200 text-sm mt-4"
          >
            Kart bilgisi gerekmez • Hiçbir ödeme talep edilmez • Sadece tanışmak için
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
