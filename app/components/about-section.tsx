"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { CalendarDays } from "lucide-react"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Hakkımda</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Sol taraf - Fotoğraf alanı */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&h=800&fit=crop"
                  alt="Öykü Eryücel - Diyetisyen"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Dekoratif elementler */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-300 rounded-full opacity-40"></div>
            </div>
          </motion.div>

          {/* Sağ taraf - İçerik */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Merhaba, Ben Öykü!</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ege Üniversitesi Beslenme ve Diyetetik bölümü mezunuyum. Sürdürülebilir beslenme planları oluşturarak
                sağlıklı yaşam hedeflerine ulaşmanıza yardımcı oluyorum.
              </p>
            </div>

            {/* Özellikler */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-emerald-50 p-4 rounded-2xl">
                <div className="text-2xl font-bold text-emerald-700 mb-1">500+</div>
                <div className="text-sm text-gray-600">Mutlu Danışan</div>
              </div>
              <div className="bg-amber-50 p-4 rounded-2xl">
                <div className="text-2xl font-bold text-amber-700 mb-1">5 Yıl</div>
                <div className="text-sm text-gray-600">Deneyim</div>
              </div>
              <div className="bg-rose-50 p-4 rounded-2xl">
                <div className="text-2xl font-bold text-rose-700 mb-1">İzmir</div>
                <div className="text-sm text-gray-600">& Online</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-2xl">
                <div className="text-2xl font-bold text-purple-700 mb-1">%100</div>
                <div className="text-sm text-gray-600">Ücretsiz İlk Görüşme</div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8"
            >
              <Button
                size="lg"
                className="gold-accent text-white px-6 py-3 text-base rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
                asChild
              >
                <a href="https://wa.me/905337939582" target="_blank" rel="noopener noreferrer">
                  <CalendarDays className="mr-2 h-5 w-5" />
                  Ücretsiz Danışmanlık Randevusu Al
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
