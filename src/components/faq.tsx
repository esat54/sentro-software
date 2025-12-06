"use client";

import { motion } from "framer-motion";
import { FaRocket, FaRProject, FaCalculator, FaChartLine } from "react-icons/fa";
import { FiHelpCircle, FiUsers, FiZap, FiDollarSign, FiTrendingUp } from "react-icons/fi";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion";

const brands = [
  { icon: FaRProject, name: "Web Geliştirme" },
  { icon: FiUsers, name: "10+ Proje" },
  { icon: FaCalculator, name: "Otomatik Sistemler" },
  { icon: FaChartLine, name: "Performans Analizi" },
  { icon: FiZap, name: "Hızlı Çözümler" },
  { icon: FiDollarSign, name: "Uygun Fiyatlar" },
  { icon: FiTrendingUp, name: "Büyüme Odaklı" },
];

const faqCategories = [
    {
        title: "Sık Sorulan Sorular",
        icon: FaRocket,
        questions: [
            {
                question: "Proje süreçleri nasıl işliyor?",
                answer: "Proje sürecimiz analiz, tasarım, geliştirme ve test aşamalarından oluşur. İlk görüşmede ihtiyaçlarınızı belirliyoruz, ardından detaylı bir proje planı hazırlıyoruz. Her aşamada sizinle iletişim halinde olup, onayınızı alarak ilerliyoruz. Proje tamamlandıktan sonra eğitim ve destek sağlıyoruz."
            },
            {
                question: "Web projelerinizde hangi teknolojileri kullanıyorsunuz?",
                answer: "Modern ve güncel teknolojiler kullanıyoruz. React, Next.js, TypeScript, Tailwind CSS gibi framework'ler ile performanslı ve SEO uyumlu web siteleri geliştiriyoruz. Projenizin ihtiyacına göre en uygun teknoloji stack'ini belirliyoruz."
            },
            {
                question: "Mobil uygulama geliştirme süresi ne kadar?",
                answer: "Proje kapsamına göre değişmekle birlikte, basit bir mobil uygulama 1-2 ay, karmaşık bir uygulama ise 3-4 ay sürebilir. İlk görüşmede projenizin detaylarını değerlendirip size net bir süre tahmini sunuyoruz."
            },
            {
                question: "Yazılım projelerinizde bakım ve destek hizmeti var mı?",
                answer: "Evet, tüm projelerimizde geliştirme sonrası bakım ve destek paketleri sunuyoruz. Güvenlik güncellemeleri, hata düzeltmeleri, performans optimizasyonları ve teknik destek hizmetlerimiz mevcuttur. İhtiyacınıza göre aylık veya yıllık destek paketleri oluşturabiliriz."
            },
            {
                question: "Proje maliyetleri nasıl belirleniyor?",
                answer: "Proje maliyetleri, projenin kapsamı, karmaşıklığı, kullanılacak teknolojiler ve süreye göre belirlenir. İlk görüşmede detaylı bir analiz yapıp, size şeffaf bir fiyat teklifi sunuyoruz. Proje boyunca ek maliyetler olmadan, belirlenen bütçe dahilinde çalışıyoruz."
            },
            {
                question: "Mevcut sistemlerinizle entegrasyon yapabiliyor musunuz?",
                answer: "Evet, mevcut sistemlerinizle entegrasyon yapabiliyoruz. API entegrasyonları, veritabanı bağlantıları ve üçüncü parti servis entegrasyonları konusunda deneyimliyiz. Entegrasyon sürecini sorunsuz ve güvenli bir şekilde gerçekleştiriyoruz."
            },
            {
                question: "Projelerinizde güvenlik nasıl sağlanıyor?",
                answer: "Güvenlik bizim için önceliktir. Tüm projelerimizde SSL şifreleme, güvenli veritabanı yapılandırmaları, düzenli güvenlik güncellemeleri ve penetrasyon testleri uyguluyoruz. KVKK ve GDPR uyumluluğuna dikkat ediyoruz."
            },
            {
                question: "Proje tesliminden sonra eğitim veriyor musunuz?",
                answer: "Evet, proje tesliminden sonra kapsamlı eğitim ve dokümantasyon sağlıyoruz. Sistemin nasıl kullanılacağı, yönetim paneli eğitimi ve teknik dokümantasyon ile projenizi sorunsuz kullanmaya başlayabilirsiniz."
            },
        ]
    },
];




export default function FAQ() {
    const tripleItems = [...brands, ...brands, ...brands];
    const itemWidth = 180;
    const totalWidth = itemWidth * brands.length;

    return (
        <div className="bg-black min-h-screen rounded-xl relative overflow-hidden" id="faq">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-mint/5 opacity-40"></div>
            
            <div className="relative z-10">
                <div className="text-center pt-12 md:pt-20 pb-12 md:pb-16 px-4">
                    <motion.div 
                        className="mb-4 md:mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="relative border-[0.3px] border-primary/40 rounded-xl text-white items-center gap-2 
                        px-3 md:px-4 py-1.5 md:py-2 inline-flex bg-primary/10 backdrop-blur-xl shadow-lg text-sm md:text-base">
                            <FiHelpCircle className="text-primary text-sm" />
                            <span className="font-medium">SSS</span>
                        </p>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <h2 className="text-white text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                            <span className="text-primary">Sık Sorulan</span> <br className="hidden md:block" />
                            Sorular
                        </h2>
                        <p className="text-gray-400 text-base md:text-lg max-w-2xl md:max-w-3xl mx-auto">
                            Yazılım projeleriniz hakkında merak ettiğiniz soruların cevaplarını burada bulabilirsiniz. Başka sorularınız için bizimle iletişime geçebilirsiniz.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative mt-8 md:mt-12 py-4 overflow-hidden"
                    >
                        {/* Sol gradient overlay */}
                        <div className="absolute left-0 top-0 w-16 sm:w-32 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
                        {/* Sağ gradient overlay */}
                        <div className="absolute right-0 top-0 w-16 sm:w-32 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

                        <motion.div
                            className="flex flex-nowrap will-change-transform"
                            animate={{
                                x: [`0px`, `-${totalWidth}px`]
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 30,
                                    ease: "linear"
                                }
                            }}
                        >
                            {tripleItems.map((item, index) => {
                                const IconComponent = item.icon;
                                return (
                                    <div key={`brand-${index}`} className="flex-shrink-0 px-4 py-2">
                                        <div className="flex items-center gap-2 whitespace-nowrap">
                                            <IconComponent className="text-gray-500/50 text-sm sm:text-lg flex-shrink-0" />
                                            <h3 className="text-gray-400 text-sm sm:text-lg font-semibold">
                                                {item.name}
                                            </h3>
                                        </div>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                </div>

                <div className="max-w-5xl mx-auto px-4 md:px-8 mb-12 md:mb-16">
                    {faqCategories.map((category, categoryIndex) => {
                        return (
                            <motion.div
                                key={categoryIndex}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: categoryIndex * 0.1, duration: 0.8 }}
                            >
                                <Accordion type="single" collapsible className="w-full space-y-3 md:space-y-4">
                                    {category.questions.map((item, questionIndex) => (
                                        <AccordionItem 
                                            key={questionIndex} 
                                            value={`${categoryIndex}-${questionIndex}`}
                                            className="border border-gray-700/40 rounded-xl bg-black/50 backdrop-blur-xl hover:border-primary/50 transition-all duration-300 overflow-hidden shadow-lg"
                                        >
                                            <AccordionTrigger className="text-white hover:text-primary-light px-5 md:px-6 py-4 md:py-5 text-left font-semibold hover:no-underline group">
                                                <div className="flex items-center gap-4 w-full">
                                                    <div className="w-10 h-10 rounded-xl bg-primary/20 group-hover:bg-primary/30 flex items-center justify-center flex-shrink-0 transition-colors">
                                                        <FaRocket className="text-primary text-base group-hover:scale-110 transition-transform" />
                                                    </div>
                                                    <span className="text-base md:text-lg flex-1 text-left">{item.question}</span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="text-gray-300 leading-relaxed px-5 md:px-6 pb-5 md:pb-6">
                                                <div className="p-4 md:p-5 bg-gradient-to-r from-gray-800/40 to-gray-900/40 rounded-lg border-l-4 border-primary/50 shadow-inner">
                                                    <p className="text-sm md:text-base leading-relaxed">{item.answer}</p>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
