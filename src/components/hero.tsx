"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiBarChart, FiDollarSign, FiTrendingUp } from "react-icons/fi";

const cardItems = [
  {
    icon: FiBarChart,
    title: "Gelişmiş Analiz ve Raporlama",
    text: "Detaylı performans metrikleri ve gerçek zamanlı analizlerle işletmenizin verilerini anlamlandırın. Kapsamlı raporlama araçları sayesinde karar alma süreçlerinizi hızlandırın ve stratejik planlamalarınızı veri odaklı yapın.",
  },
  {
    icon: FiDollarSign,
    title: "Maliyet Etkin Çözümler",
    text: "Yüksek performanslı yazılım çözümlerimizle operasyonel maliyetlerinizi optimize edin. Ölçeklenebilir mimariler sayesinde ihtiyacınıza göre ölçeklenen, gereksiz kaynak kullanımını önleyen akıllı sistemler geliştiriyoruz.",
  },
  {
    icon: FiTrendingUp,
    title: "Sürekli Büyüme ve Ölçeklenebilirlik",
    text: "İşletmenizin büyümesine paralel olarak ölçeklenen, yüksek trafik altında dahi kararlı çalışan sistemler. Geleceğe dönük tasarımlarımız sayesinde büyüme hızınıza uyum sağlayan, sürekli değer üreten altyapılar oluşturuyoruz.",
  },
];

export default function HeroArea() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  // Yazı tipi yükleme durumunu kontrol et
  useEffect(() => {
    if (document.fonts) {
      document.fonts.ready.then(() => {
        setIsFontLoaded(true);
      });
    } else {
      // Fallback: Yazı tipi API'si desteklenmiyorsa
      setTimeout(() => setIsFontLoaded(true), 300);
    }
  }, []);

  return (
    <div className="grid gap-8 pt-16 sm:pt-20 px-4 md:px-0">
      {/* Sol ve Sağ Kolonlar - Desktop'ta yan yana, mobilde alt alta */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:min-h-[80vh]">

        {/* Sol Taraf - İçerik */}
        <div className="text-center lg:text-left space-y-6 lg:space-y-7 xl:space-y-8 lg:py-6 xl:py-8">
          {/* Etiket */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <p className="relative border border-primary/40 rounded-xl text-white items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 inline-flex bg-primary/10 backdrop-blur-xl shadow-lg text-sm sm:text-base">
              <span className="font-medium">Sentro Yazılım</span>
            </p>
          </motion.div>

          {/* Başlık */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            style={{ visibility: isFontLoaded ? 'visible' : 'hidden' }}
          >
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight">
              Modern, <span className="text-primary">ölçeklenebilir</span><br />
              <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl">ve yüksek performanslı yazılım çözümleri</span>
            </h1>
          </motion.div>

          {/* Açıklama */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            style={{ visibility: isFontLoaded ? 'visible' : 'hidden' }}
          >
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-xl lg:max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Güvenilir mimariler üzerine kurulu esnek sistemler geliştiriyoruz.
              <br className="hidden sm:block" />
              Yüksek trafik altında dahi kararlı çalışan yapılar oluşturarak işletmelerin teknik yükünü azaltıyoruz. Her bileşeni ileriye dönük tasarlanan bu altyapılar, büyüme hızınıza uyum sağlayarak sürekli değer üretir.            </p>
          </motion.div>


          {/* Güven Göstergeleri */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 sm:gap-8 lg:gap-10 text-xs sm:text-sm lg:text-base text-gray-400 mt-4 lg:mt-5"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2"
            >
              <div className="w-2 h-2 bg-success rounded-full" />
              <span>Güvenilir Altyapı</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Uzman Teknik Destek</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-2"
            >
              <div className="w-2 h-2 bg-mint rounded-full" />
              <span>Yüksek Müşteri Memnuniyeti</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Sağ Taraf - Hero Görseli */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="relative lg:mt-7 mt-10 lg:py-6 xl:py-8"
        >
          <div className="relative p-1 lg:p-1.5 rounded-lg overflow-hidden lg:scale-95 xl:scale-[0.98]">
            <motion.div
              className="absolute inset-0 rounded-lg"
              style={{
                background: `
                conic-gradient(
                  from 0deg at 50% 50%,
                  transparent 0deg,
                  hsl(220, 80%, 50%) 40deg, 
                  hsl(220, 80%, 50%) 120deg, 
                  transparent 121deg,
                  transparent 239deg,
                  hsl(240, 70%, 45%) 240deg, 
                  hsl(240, 70%, 45%) 300deg, 
                  transparent 301deg,
                  transparent 360deg
                )
              `,
                filter: "blur(20px) drop-shadow(0 0 2px hsl(220, 80%, 50%))",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative bg-gradient-to-br from-gray-900/50 via-black to-gray-900/50 rounded-lg overflow-hidden">
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/hero-image.jpg"
                  alt="Sentro Yazılım - Modern Yazılım Çözümleri"
                  fill
                  className="object-cover rounded-lg select-none"
                  priority
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-lg" />
            </div>
          </div>
        </motion.div>

      </div>

      {/* Kartlar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-start mt-8 xl:mt-12 2xl:mt-16">
        {cardItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.9, delay: index * 0.20 }}
              className="group relative bg-black/40 backdrop-blur-xl rounded-xl p-6 border border-gray-700/30 hover:border-primary/40 transition-all duration-500"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative p-3 rounded-xl bg-primary/10 border border-primary/20">
                    <IconComponent className="text-primary text-xl" />
                  </div>
                </div>
                <h3 className="text-white text-lg sm:text-xl font-bold mb-3 group-hover:text-primary-light transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

    </div>
  );
}