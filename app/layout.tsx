import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Öykü Eryücel - Diyetisyen | İzmir Online Beslenme Danışmanlığı",
  description:
    "İzmir'de profesyonel diyetisyen Öykü Eryücel ile online ve yüz yüze beslenme danışmanlığı. İlk görüşme tamamen ücretsiz. Kişiye özel diyet programları.",
  keywords: "diyetisyen, beslenme danışmanı, İzmir, online diyet, kilo verme, sağlıklı beslenme",
  openGraph: {
    title: "Öykü Eryücel - Diyetisyen | İzmir Online Beslenme Danışmanlığı",
    description:
      "İzmir'de profesyonel diyetisyen Öykü Eryücel ile online ve yüz yüze beslenme danışmanlığı. İlk görüşme tamamen ücretsiz.",
    type: "website",
    locale: "tr_TR",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
