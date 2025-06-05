"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CalendarDays, Gift } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="min-h-[60vh] md:min-h-screen flex items-center justify-center px-4 py-8 md:py-16 bg-gradient-to-br from-stone-50 via-white to-stone-100 relative overflow-hidden">
      {/* Dekoratif elementler */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-100 rounded-full opacity-60 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-amber-100 rounded-full opacity-40 blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-emerald-200 rounded-full opacity-30 blur-lg"></div>
      <div className="absolute bottom-1/3 right-1/3 w-36 h-36 bg-stone-200 rounded-full opacity-50 blur-xl"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23059669&quot; fillOpacity=&quot;0.03&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;1&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-3 md:mb-6 leading-tight">
            Merhaba, Ben <br className="block md:hidden" />
            <span className="text-emerald-700">Öykü Eryücel</span>
            <div className="text-lg md:text-3xl font-normal text-gray-600 mt-1 md:mt-2">
              Beslenme ve Diyetetik Uzmanı
            </div>
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 mb-5 md:mb-8 leading-relaxed max-w-4xl mx-auto">
            İzmir'de ve online olarak, bireylere özel sürdürülebilir beslenme danışmanlığı ve yaşam tarzı koçluğu
            hizmeti veriyorum
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-5 md:mb-6"
          >
            <Button
              size="lg"
              className="gold-accent text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
              asChild
            >
              <a href="https://wa.me/905337939582" target="_blank" rel="noopener noreferrer">
                <CalendarDays className="mr-2 h-5 w-5" />
                Ücretsiz Danışmanlık Randevusu Al
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center text-emerald-700 font-medium bg-emerald-50 px-4 md:px-6 py-2 md:py-3 rounded-full inline-flex text-sm md:text-base"
          >
            <Gift className="mr-2 h-4 md:h-5 w-4 md:w-5" />
            <span>İlk danışmanlık görüşmesi tamamen ücretsiz</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
