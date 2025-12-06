"use client";

import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiMail, FiMapPin } from "react-icons/fi";

const socialLinks = [
    { icon: FaLinkedin, href: "https://linkedin.com/in/esatdlkc", label: "LinkedIn" },
    { icon: FaInstagram, href: "https://instagram.com/esat.dalkilicc", label: "Instagram" }
];

const contactInfo = [
    {
        icon: FiMapPin,
        text: "Sakarya, Türkiye"
    },
    {
        icon: FiMail,
        text: "info@sentroyazilim.com"
    }
];

export default function Footer() {
    return (
        <footer className="bg-black border-t border-gray-800 mt-20 z-50">
            <div className="max-w-8xl mx-auto px-8">
                {/* Main Footer Content */}
                <div className="py-16">
                    <div className="max-w-4xl mx-auto">
                        {/* Company Info */}
                        <div className="text-center">
                            <div className="flex items-center justify-center mb-6">
                                <span className="text-2xl font-bold text-white">Sentro</span>
                                <span className="text-2xl font-bold text-primary">Yazılım</span>
                            </div>

                            <p className="text-gray-400 mb-6 leading-relaxed max-w-2xl mx-auto">
                                Modern yazılım çözümleri ile işletmenizi dijital dönüşümde bir adım öne taşıyoruz.
                                Web, mobil ve kurumsal yazılım projelerinde uzman ekibimizle yanınızdayız.
                            </p>

                            {/* Contact Info */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
                                {contactInfo.map((item, index) => {
                                    const IconComponent = item.icon;
                                    return (
                                        <div key={index} className="flex items-center gap-3 text-gray-400">
                                            <IconComponent className="text-primary text-sm flex-shrink-0" />
                                            <span className="text-sm">{item.text}</span>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Social Links */}
                            <div className="flex items-center justify-center gap-4">
                                {socialLinks.map((social, index) => {
                                    const IconComponent = social.icon;
                                    return (
                                        <Link
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.label}
                                            className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 group"
                                        >
                                            <IconComponent className="text-gray-400 group-hover:text-primary transition-colors" />
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>


                <div className="py-6 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="text-gray-400 text-sm">
                            © 2025 Sentro Yazılım. Tüm hakları saklıdır.
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}