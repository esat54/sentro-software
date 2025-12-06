"use client";

import { motion } from "framer-motion";
import { FiGlobe, FiCode, FiSmartphone, FiCheck, FiZap, FiTrendingUp, FiArrowRight } from "react-icons/fi";
import { Button } from "./ui/button";

// İletişim bölümü için scroll fonksiyonu
const scrollToContact = () => {
  if (window.location.pathname !== '/') {
    window.location.href = '/';
    return;
  }

  const element = document.getElementById('contact');
  if (element) {
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    
    let headerHeight, stickyOffset, extraOffset;
    
    if (isMobile) {
      headerHeight = 60;
      stickyOffset = 20;
      extraOffset = 180; // Mobilde offset
    } else if (isTablet) {
      headerHeight = 70;
      stickyOffset = 20;
      extraOffset = -20; // Tablet'te offset
    } else {
      headerHeight = 80;
      stickyOffset = 20;
      extraOffset = -20; // Desktop'ta offset
    }
    
    const totalOffset = headerHeight + stickyOffset + extraOffset;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - totalOffset;

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: "smooth",
    });
  }
};

const services = [
  {
    icon: FiGlobe,
    title: "Web Projeleri",
    description: "Modern, responsive ve performans odaklı web uygulamaları geliştiriyoruz. Kullanıcı deneyimini ön planda tutan, SEO uyumlu ve tüm cihazlarda mükemmel çalışan web çözümleri sunuyoruz.",
    features: [
      "Responsive ve mobil uyumlu tasarım",
      "SEO optimizasyonu ve hızlı yükleme",
      "Modern framework'ler (React, Next.js, Vue)",
      "E-ticaret ve kurumsal web siteleri",
      "Progressive Web App (PWA) desteği",
      "Güvenlik ve performans optimizasyonu"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    benefits: [
      "Artırılmış online görünürlük",
      "Yüksek dönüşüm oranları",
      "7/24 erişilebilirlik",
      "Ölçeklenebilir altyapı"
    ],
    gradient: "from-indigo-500/15 via-blue-500/15 to-cyan-500/15",
    accentColor: "text-indigo-400"
  },
  {
    icon: FiCode,
    title: "Yazılım Çözümleri ve Projeleri",
    description: "İşletmenizin ihtiyaçlarına özel, ölçeklenebilir ve güvenli yazılım çözümleri geliştiriyoruz. Backend sistemler, API entegrasyonları ve kurumsal yazılım projeleri ile iş süreçlerinizi dijitalleştiriyoruz.",
    features: [
      "Özel yazılım geliştirme",
      "Backend ve API geliştirme",
      "Mikroservis mimarisi",
      "Veritabanı tasarımı ve optimizasyonu",
      "Cloud ve DevOps çözümleri",
      "Sistem entegrasyonları"
    ],
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Docker", "AWS"],
    benefits: [
      "İş süreçlerinde otomasyon",
      "Veri güvenliği ve yedekleme",
      "Maliyet optimizasyonu",
      "Raporlama ve analitik"
    ],
    gradient: "from-blue-500/15 via-indigo-500/15 to-cyan-500/15",
    accentColor: "text-blue-400"
  },
  {
    icon: FiSmartphone,
    title: "Mobil Uygulama",
    description: "iOS ve Android platformları için native ve cross-platform mobil uygulamalar geliştiriyoruz. Kullanıcı deneyimini ön planda tutan, performanslı ve modern mobil çözümler ile müşterilerinize her zaman ulaşın.",
    features: [
      "Native iOS ve Android uygulamaları",
      "Cross-platform (React Native, Flutter)",
      "App Store ve Play Store yayınlama",
      "Push notification entegrasyonu",
      "Offline çalışma desteği",
      "Kullanıcı analitiği ve geri bildirim"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    benefits: [
      "Müşteri erişilebilirliği",
      "Marka görünürlüğü",
      "Gelir artışı potansiyeli",
      "Kullanıcı sadakati"
    ],
    gradient: "from-indigo-500/15 via-blue-500/15 to-teal-500/15",
    accentColor: "text-indigo-400"
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 xl:py-28 relative overflow-hidden">
      {/* Arka plan efekti */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent pointer-events-none" />
      
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-0 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <FiZap className="text-primary text-sm" />
            <span className="text-primary text-sm font-medium">Hizmetlerimiz</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
            Dijital Dönüşümde <span className="text-primary">Yanınızdayız</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Modern teknolojiler ve uzman ekibimizle işletmenizin ihtiyaçlarına özel çözümler geliştiriyoruz. 
            Her projede kalite, performans ve kullanıcı deneyimini ön planda tutuyoruz.
          </p>
        </motion.div>

        {/* Hizmet Kartları */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="group relative"
              >
                {/* Ana Kart */}
                <div className={`relative h-full flex flex-col bg-gradient-to-br ${service.gradient} backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-gray-700/30 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.005] overflow-hidden`}>
                  {/* Arka plan gradient animasyonu */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* İçerik */}
                  <div className="relative z-10">

                    {/* İkonlar Bölümü */}
                    <div className="flex items-center mb-6">
                      <div className="relative">
                        <div className={`absolute inset-0 rounded-2xl blur-md group-hover:blur-lg transition-all duration-500 ${
                          service.accentColor === 'text-indigo-400' 
                            ? 'bg-indigo-500/8' 
                            : service.accentColor === 'text-blue-400'
                            ? 'bg-blue-500/8'
                            : 'bg-indigo-500/8'
                        }`} />
                        <div className={`relative p-4 rounded-2xl bg-black/40 backdrop-blur-sm border ${
                          service.accentColor === 'text-indigo-400' 
                            ? 'border-indigo-500/25' 
                            : service.accentColor === 'text-blue-400'
                            ? 'border-blue-500/25'
                            : 'border-indigo-500/25'
                        }`}>
                          <IconComponent className={`${service.accentColor} text-3xl lg:text-4xl`} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Başlık */}
                    <h3 className="text-white text-2xl lg:text-3xl font-bold mb-3 transition-colors group-hover:text-primary-light">
                      {service.title}
                    </h3>
                    
                    {/* Açıklama */}
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 min-h-[60px]">
                      {service.description}
                    </p>
                    
                    {/* Özellikler Listesi */}
                    <div className="space-y-3 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className={`mt-0.5 flex-shrink-0 ${service.accentColor}`}>
                            <FiCheck className="text-lg" />
                          </div>
                          <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Teknolojiler */}
                    <div className="mb-6 pb-6 border-b border-gray-700/50">
                      <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-3">Kullandığımız Teknolojiler</p>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full bg-black/40 border border-gray-700/50 text-gray-400 text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Avantajlar*/}
                    <div className="space-y-2 mb-6 flex-grow min-h-[100px]">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <FiTrendingUp className={`${service.accentColor} text-base`} />
                          <span className="text-gray-400">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    
                    <div className="mt-auto pt-4">
                      <Button 
                        onClick={scrollToContact}
                        className="w-full group/btn border-2 bg-gray-800/30 border-gray-600/50 text-gray-200 hover:bg-gray-700/50 hover:border-gray-400/80 hover:text-white transition-all duration-300"
                        variant="outline"
                      >
                        Hemen İletişime Geç
                        <FiArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}