"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaCheck, FaRocket } from "react-icons/fa";
import { FiMail, FiSend, FiUser, FiMessageSquare } from "react-icons/fi";
import { Button } from "./ui/button";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) return;

        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitted(true);
            setIsLoading(false);
            setFormData({ name: "", email: "", message: "" });
        }, 2000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="bg-black rounded-xl relative overflow-hidden" id="contact">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-mint/10 opacity-50"></div>
            <div className="absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-mint/5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
                {/* Main Section */}
                <div className="max-w-6xl mx-auto pt-8 lg:pt-16 px-4 md:px-8 pb-12 md:pb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        {/* Left - Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="mb-4 md:mb-6">
                                <p className="border border-primary/40 rounded-xl text-white items-center gap-2 px-3 py-1.5 inline-flex bg-primary/10 backdrop-blur-xl">
                                    <FaRocket className="text-primary text-sm" />
                                    <span className="text-sm font-medium">İletişim</span>
                                </p>
                            </div>
                            <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                                Projeniz İçin
                                <span className="text-primary block">Bizimle İletişime Geçin</span>
                            </h2>
                            <p className="text-gray-300 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                                Yazılım projeleriniz hakkında sorularınız mı var? Size özel çözümler için 
                                bizimle iletişime geçin. Uzman ekibimiz en kısa sürede size dönüş yapacaktır.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mt-1">
                                        <FiMail className="text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">E-posta</h4>
                                        <p className="text-gray-400 text-sm">info@sentroyazilim.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mt-1">
                                        <FiMessageSquare className="text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Hızlı Yanıt</h4>
                                        <p className="text-gray-400 text-sm">24 saat içinde geri dönüş garantisi</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right - Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="lg:pl-8"
                        >
                            <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-primary/20">
                                {!isSubmitted ? (
                                    <>
                                        <div className="text-center mb-6">
                                            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                                                <FiMessageSquare className="text-primary text-2xl" />
                                            </div>
                                            <h3 className="text-white text-2xl font-bold mb-2">
                                                Bilgi Formu
                                            </h3>
                                            <p className="text-gray-400">
                                                Projeniz hakkında bilgi almak için formu doldurun
                                            </p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="relative">
                                                <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Adınız Soyadınız"
                                                    className="w-full pl-12 pr-4 py-4 bg-black/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                                    required
                                                />
                                            </div>

                                            <div className="relative">
                                                <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="E-posta adresiniz"
                                                    className="w-full pl-12 pr-4 py-4 bg-black/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                                    required
                                                />
                                            </div>

                                            <div className="relative">
                                                <FiMessageSquare className="absolute left-4 top-4 text-gray-400" />
                                                <textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    placeholder="Mesajınız"
                                                    rows={5}
                                                    className="w-full pl-12 pr-4 py-4 bg-black/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                                                    required
                                                />
                                            </div>

                                            <Button
                                                type="submit"
                                                disabled={isLoading}
                                                className="w-full bg-primary text-black py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:transform-none"
                                            >
                                                {isLoading ? (
                                                    <>
                                                        <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                                                        Gönderiliyor...
                                                    </>
                                                ) : (
                                                    <>
                                                        <FiSend className="text-lg" />
                                                        Gönder
                                                    </>
                                                )}
                                            </Button>
                                        </form>
                                    </>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-8"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
                                            <FaCheck className="text-success text-2xl" />
                                        </div>
                                        <h3 className="text-white text-2xl font-bold mb-2">
                                            Mesajınız Gönderildi! 🎉
                                        </h3>
                                        <p className="text-gray-300 mb-4">
                                            En kısa sürede size geri dönüş yapacağız.
                                        </p>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}