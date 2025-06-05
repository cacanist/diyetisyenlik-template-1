"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const topRowTestimonials = [
    {
      name: "Zeynep Kaya",
      text: "Kendimi ilk defa aç kalmadan formda hissettim. Öykü Hanım'ın yaklaşımı gerçekten farklı.",
      service: "Kilo Verme",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Ayşe Demir",
      text: "Online takip sistemi çok pratik. İş yoğunluğuma rağmen beslenme düzenimi koruyabiliyorum.",
      service: "Online Takip",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Elif Özkan",
      text: "Sadece kilo vermek değil, yaşam tarzımı değiştirmek istiyordum. Tam istediğim desteği buldum.",
      service: "Yaşam Tarzı Değişimi",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Merve Yılmaz",
      text: "Hamilelik dönemimde çok destek oldu. Hem bebeğim hem ben sağlıklı kaldık.",
      service: "Hamilelik Beslenmesi",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Selin Acar",
      text: "Yeme bozukluğumla mücadelede yanımda oldu. Artık yemekle barışığım.",
      service: "Yeme Bozukluğu",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Ahmet Yılmaz",
      text: "Spor yaparken doğru beslenmeyi öğrendim. Performansım çok arttı.",
      service: "Sporcu Beslenmesi",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Mehmet Şahin",
      text: "Kilo almakta zorlanıyordum. Sağlıklı şekilde ideal kilomu yakaladım.",
      service: "Kilo Alma",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Gizem Arslan",
      text: "Çocuğumun beslenme alışkanlıklarını düzeltmek için başvurdum. Harika sonuçlar aldık.",
      service: "Çocuk Beslenmesi",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Pınar Koç",
      text: "Metabolizmam çok yavaştı. Artık enerji doluyum ve sağlıklı hissediyorum.",
      service: "Metabolizma Hızlandırma",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Ceren Güler",
      text: "Diyabet tanısı aldıktan sonra beslenme düzenimi tamamen değiştirdim. Şekerim kontrol altında.",
      service: "Diyabet Beslenmesi",
      image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=150&h=150&fit=crop&crop=face",
    },
  ]

  const bottomRowTestimonials = [
    {
      name: "Neslihan Kara",
      text: "Menopoz döneminde kilo kontrolü çok zordu. Öykü Hanım sayesinde formumu korudum.",
      service: "Menopoz Beslenmesi",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Özge Tunç",
      text: "Vejetaryen beslenmeye geçerken eksiklik yaşamamak için danıştım. Mükemmel rehberlik.",
      service: "Vejetaryen Beslenme",
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Mustafa Öztürk",
      text: "İş stresi yüzünden düzensiz besleniyordum. Artık pratik ve sağlıklı çözümlerim var.",
      service: "İş Hayatı Beslenmesi",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Tuğba Yıldız",
      text: "Tiroid problemim vardı. Beslenme planı sayesinde hem kilo verdim hem kendimi iyi hissediyorum.",
      service: "Tiroid Beslenmesi",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Esra Doğan",
      text: "Emzirme döneminde doğru beslenmeyi öğrendim. Hem sütüm arttı hem enerjim yerine geldi.",
      service: "Emzirme Beslenmesi",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Ali Erdoğan",
      text: "Kolesterol problemim vardı. Beslenme değişikliği ile ilaç kullanmadan düzelttim.",
      service: "Kolesterol Yönetimi",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Hande Çakır",
      text: "Sindirim problemlerim vardı. Doğru besinlerle artık rahatım.",
      service: "Sindirim Sağlığı",
      image: "https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Emre Polat",
      text: "Üniversite hayatında beslenme düzenimi korumak zor geliyordu. Artık çok kolay.",
      service: "Öğrenci Beslenmesi",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Yasemin Kaya",
      text: "Alerji testlerim sonrası beslenme planımı yeniden düzenledik. Artık hiç problem yaşamıyorum.",
      service: "Alerji Beslenmesi",
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Fatma Özdemir",
      text: "Yaşlılık döneminde kemik sağlığımı korumak için başvurdum. Çok faydalı öneriler aldım.",
      service: "Kemik Sağlığı",
      image: "https://images.unsplash.com/photo-1559941707-71e7bb5744f2?w=150&h=150&fit=crop&crop=face",
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4 bg-stone-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Danışan Yorumları</h2>
          <p className="text-lg text-gray-600">Birlikte çalıştığımız danışanlarımızın deneyimleri</p>
        </motion.div>

        {/* Üst satır - sola doğru hareket */}
        <div className="mb-8">
          <motion.div
            animate={{ x: [0, -2000] }}
            transition={{
              duration: 40,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="flex space-x-6"
            style={{ width: "fit-content" }}
          >
            {[...topRowTestimonials, ...topRowTestimonials].map((testimonial, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-80 rounded-2xl shadow-lg border-0 bg-white hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4 leading-relaxed italic text-sm">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                      <p className="text-xs text-emerald-600 font-medium">{testimonial.service}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>

        {/* Alt satır - sağa doğru hareket */}
        <div>
          <motion.div
            animate={{ x: [-2000, 0] }}
            transition={{
              duration: 40,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="flex space-x-6"
            style={{ width: "fit-content" }}
          >
            {[...bottomRowTestimonials, ...bottomRowTestimonials].map((testimonial, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-80 rounded-2xl shadow-lg border-0 bg-white hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4 leading-relaxed italic text-sm">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                      <p className="text-xs text-emerald-600 font-medium">{testimonial.service}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
