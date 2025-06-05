"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react"

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <footer ref={ref} className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-12 mb-12"
        >
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-emerald-400">İletişim</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <span>+90 533 793 95 82</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span>info@oykueryucel.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400" />
                <span>İzmir / Türkiye</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-emerald-400">Sosyal Medya</h3>
            <div className="space-y-4">
              <a
                href="https://instagram.com/dyt.oykueryucel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-emerald-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span>@dyt.oykueryucel</span>
              </a>
              <a
                href="https://wa.me/905337939582"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-emerald-400">Hızlı Linkler</h3>
            <div className="space-y-4">
              <a href="#about" className="block hover:text-emerald-400 transition-colors">
                Hakkında
              </a>
              <a href="#services" className="block hover:text-emerald-400 transition-colors">
                Hizmetler
              </a>
              <a href="#faq" className="block hover:text-emerald-400 transition-colors">
                SSS
              </a>
              <a
                href="https://wa.me/905337939582"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-emerald-400 transition-colors"
              >
                Randevu Al
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border-t border-gray-700 pt-8 text-center text-gray-400"
        >
          <p className="mb-2">&copy; 2025 Öykü Eryücel – Tüm Hakları Saklıdır.</p>
          <p className="text-sm">
            Website tasarımı ve geliştirmesi:{" "}
            <a
              href="https://marchdigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              March Digital
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
