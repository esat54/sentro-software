import Contact from "@/components/contact";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroArea from "@/components/hero";
import Services from "@/components/services";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Sentro Yazılım</title>
        <meta name="title" content="Sentro Yazılım - Web, Mobil ve Kurumsal Yazılım Çözümleri" />
        <meta
          name="description"
          content="Modern yazılım çözümleri ile işletmenizi dijital dönüşümde bir adım öne taşıyoruz. Web, mobil ve kurumsal yazılım projelerinde uzman ekibimizle yanınızdayız."
        />
        <meta
          name="keywords"
          content="yazılım geliştirme, web tasarım, mobil uygulama, kurumsal yazılım, yazılım çözümleri, dijital dönüşüm, yazılım danışmanlığı"
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Turkish" />
        <meta name="author" content="Sentro Yazılım" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sentroyazilim.com/" />
        <meta property="og:title" content="Sentro Yazılım - Web, Mobil ve Kurumsal Yazılım Çözümleri" />
        <meta
          property="og:description"
          content="Modern yazılım çözümleri ile işletmenizi dijital dönüşümde bir adım öne taşıyoruz."
        />
        <meta property="og:image" content="https://sentroyazilim.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Sentro Yazılım - Modern Yazılım Çözümleri" />
        <meta property="og:site_name" content="Sentro Yazılım" />
        <meta property="og:locale" content="tr_TR" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://sentroyazilim.com/" />
        <meta property="twitter:title" content="Sentro Yazılım - Web, Mobil ve Kurumsal Yazılım Çözümleri" />
        <meta
          property="twitter:description"
          content="Modern yazılım çözümleri ile işletmenizi dijital dönüşümde bir adım öne taşıyoruz."
        />
        <meta property="twitter:image" content="https://sentroyazilim.com/og-image.jpg" />
        <meta property="twitter:image:alt" content="Sentro Yazılım - Modern Yazılım Çözümleri" />
        <meta property="twitter:creator" content="@sentroyazilim" />

        {/* Additional SEO Tags */}
        <link rel="canonical" href="https://sentroyazilim.com/" />
        <meta name="theme-color" content="#6366F1" />
        <meta name="msapplication-TileColor" content="#6366F1" />

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Business Info for Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Sentro Yazılım",
              "url": "https://sentroyazilim.com",
              "logo": "https://sentroyazilim.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "areaServed": "TR",
                "availableLanguage": "Turkish"
              },
              "sameAs": [
                "https://linkedin.com/in/esatdlkc",
                "https://instagram.com/esat.dalkilicc"
              ],
              "description": "Modern yazılım çözümleri ile işletmenizi dijital dönüşümde bir adım öne taşıyoruz"
            }),
          }}
        />
      </Head>

      <div className="min-h-screen bg-black relative">
        
        {/* Background image only at top */}
        <div
          className="absolute top-0 left-0 w-full h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        ></div>

        {/* Gradient overlay to fade out the image */}
        <div
          className="absolute top-0 left-0 w-full h-screen"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.7) 80%, black 100%)'
          }}
        ></div>

        <section className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <Header />
          <main>
            {/* Hero Section */}
            <section aria-label="Sentro Yazılım Ana Tanıtım">
              <HeroArea />
            </section>

            {/* Services Section */}
            <section aria-label="Hizmetlerimiz">
              <Services />
            </section>

            {/* FAQ Section */}
            <section aria-label="Sık Sorulan Sorular">
              <FAQ />
            </section>

            {/* Contact Section */}
            <section aria-label="İletişim">
              <Contact />
            </section>
            
          </main>
          <Footer />
        </section>

      </div>
    </>
  )
}