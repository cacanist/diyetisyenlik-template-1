"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      title: "Bireysel Beslenme",
      description: "Size özel hazırlanmış beslenme planları ve yaşam tarzı danışmanlığı",
      features: ["Kişiye özel plan", "Haftalık takip", "WhatsApp desteği"],
      gradient: "from-emerald-400 to-emerald-600",
      bgColor: "bg-emerald-50",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop",
    },
    {
      title: "Kilo Yönetimi",
      description: "Sağlıklı ve sürdürülebilir kilo verme veya alma programları",
      features: ["Metabolizma analizi", "Egzersiz önerileri", "Motivasyon desteği"],
      gradient: "from-amber-400 to-amber-600",
      bgColor: "bg-amber-50",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
    },
    {
      title: "Online Takip",
      description: "Uzaktan beslenme danışmanlığı ve düzenli takip sistemi",
      features: ["Video görüşmeler", "Anlık mesajlaşma", "Dijital takip"],
      gradient: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
    },
    {
      title: "Özel Diyet Programları",
      description: "Hastalık durumlarına özel beslenme planları ve tedavi desteği",
      features: ["Tıbbi beslenme", "Doktor koordinasyonu", "Özel protokoller"],
      gradient: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Hizmetlerim</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Size en uygun beslenme çözümünü birlikte bulalım</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Card className="h-full rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-0 bg-white overflow-hidden group">
                <CardContent className="p-0">
                  {/* Resim bölümü */}
                  <div className="relative h-32 md:h-48 overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-80`}></div>
                    <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4">
                      <h3 className="text-sm md:text-xl font-bold text-white mb-1 md:mb-2">{service.title}</h3>
                    </div>
                  </div>

                  {/* İçerik bölümü */}
                  <div className="p-3 md:p-6">
                    <p className="text-gray-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                      {service.description}
                    </p>

                    {/* Özellikler */}
                    <div className="space-y-1 md:space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs md:text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 md:mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
