"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CalendarDays, Gift, X } from "lucide-react"

export default function ScrollSnackbar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100

      if (scrollPercentage > 40 && !isDismissed) {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDismissed])

  const handleDismiss = () => {
    setIsDismissed(true)
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100, y: 100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 100, y: 100 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-6 right-4 left-4 md:left-auto md:right-6 z-50 md:max-w-sm"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 md:p-6 relative">
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-4 w-4 text-gray-500" />
            </button>

            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 md:w-10 md:h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Gift className="h-6 w-6 md:h-5 md:w-5 text-amber-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base md:text-sm mb-2 md:mb-1">
                  İlk Görüşme %100 Ücretsiz
                </h3>
                <p className="text-sm md:text-xs text-gray-600">Sadece tanışmak için - hiçbir ödeme yok</p>
              </div>
            </div>

            <Button size="default" className="w-full gold-accent text-white rounded-xl py-3 md:py-2" asChild>
              <a href="https://wa.me/905337939582" target="_blank" rel="noopener noreferrer">
                <CalendarDays className="mr-2 h-5 w-5 md:h-4 md:w-4" />
                Ücretsiz Tanışma Randevusu
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
