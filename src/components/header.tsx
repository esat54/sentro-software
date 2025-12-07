"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Hizmetlerimiz bölümü için özel scroll fonksiyonu
const scrollToServices = () => {
  // Ana sayfada değilse, ana sayfaya yönlendir (ama hash ekleme)
  if (window.location.pathname !== '/') {
    window.location.href = '/';
    return;
  }

  const element = document.getElementById('services');
  if (element) {
    // Responsive offset - Hizmetlerimiz için
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    
    let headerHeight, stickyOffset, extraOffset;
    
    if (isMobile) {
      headerHeight = 60;
      stickyOffset = 20;
      extraOffset = 150; // Mobilde offset
    } else if (isTablet) {
      headerHeight = 70;
      stickyOffset = 20;
      extraOffset = -90; // Tablet'te offset
    } else {
      headerHeight = 80;
      stickyOffset = 20;
      extraOffset = -120; // Desktop'ta offset
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

// SSS (FAQ) bölümü için özel scroll fonksiyonu
const scrollToFAQ = () => {
  // Ana sayfada değilse, ana sayfaya yönlendir (ama hash ekleme)
  if (window.location.pathname !== '/') {
    window.location.href = '/';
    return;
  }

  const element = document.getElementById('faq');
  if (element) {
    // Responsive offset - SSS için
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    
    let headerHeight, stickyOffset, extraOffset;
    
    if (isMobile) {
      headerHeight = 60;
      stickyOffset = 20;
      extraOffset = 170; // Mobilde offset
    } else if (isTablet) {
      headerHeight = 70;
      stickyOffset = 20;
      extraOffset = -90; // Tablet'te offset
    } else {
      headerHeight = 80;
      stickyOffset = 20;
      extraOffset = -100; // Desktop'ta offset
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

// İletişim bölümü için özel scroll fonksiyonu
const scrollToContact = () => {
  // Ana sayfada değilse, ana sayfaya yönlendir (ama hash ekleme)
  if (window.location.pathname !== '/') {
    window.location.href = '/';
    return;
  }

  const element = document.getElementById('contact');
  if (element) {
    // Responsive offset - İletişim için
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

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Ana sayfada mıyız kontrol et
  const isHomePage = router.pathname === '/';

  const handleServicesClick = () => {
    if (isHomePage) {
      scrollToServices();
    } else {
      router.push('/').then(() => {
        // Sayfa yüklendikten sonra scroll yap
        setTimeout(() => {
          scrollToServices();
        }, 100);
      });
    }
    setIsMenuOpen(false);
  };

  const handleFAQClick = () => {
    if (isHomePage) {
      scrollToFAQ();
    } else {
      router.push('/').then(() => {
        // Sayfa yüklendikten sonra scroll yap
        setTimeout(() => {
          scrollToFAQ();
        }, 100);
      });
    }
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    if (isHomePage) {
      scrollToContact();
    } else {
      router.push('/').then(() => {
        // Sayfa yüklendikten sonra scroll yap
        setTimeout(() => {
          scrollToContact();
        }, 100);
      });
    }
    setIsMenuOpen(false);
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isHomePage) {
      scrollToTop();
    } else {
      router.push('/');
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-5 z-50 bg-black/50 backdrop-blur-xl mx-auto border border-gray-800 shadow-xl py-[6px] px-2 rounded-xl transition-all duration-300">
      <div className="mx-auto max-w-8xl">

        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-medium bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300">
                Sentro
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block ml-4">
            <nav>

              <ul className="flex items-center">

                <li>
                  <button
                    onClick={handleHomeClick}
                    className="px-3 text-sm font-medium text-gray-300 rounded-md hover:text-white transition-colors cursor-pointer"
                  >
                    Ana Sayfa
                  </button>
                </li>

                <li>
                  <button
                    onClick={handleServicesClick}
                    className="px-3 text-sm font-medium text-gray-300 rounded-md hover:text-white transition-colors cursor-pointer"
                  >
                    Hizmetlerimiz
                  </button>
                </li>

                <li>
                  <button
                    onClick={handleFAQClick}
                    className="px-3 text-sm font-medium text-gray-300 rounded-md hover:text-white transition-colors cursor-pointer"
                  >
                    Sıkça Sorulan Sorular
                  </button>
                </li>

                <li>
                <button
                    onClick={handleContactClick}
                    className="px-3 text-sm font-medium text-gray-300 rounded-md hover:text-white transition-colors cursor-pointer"
                  >
                    İletişim
                  </button>
                </li>

              </ul>
            </nav>
          </div>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleContactClick}
              className="inline-flex items-center justify-center px-4 py-1 text-sm font-medium text-black transition-colors duration-200 rounded-md bg-primary-dark hover:bg-primary focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black cursor-pointer"
            >
              Şimdi Dene
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center justify-center ">
            <button onClick={toggleMenu} className="text-white ">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 bg-black/90 rounded-lg p-4 space-y-2">
            <button
              onClick={handleHomeClick}
              className="block text-gray-300 hover:text-white transition-colors w-full text-left"
            >
              Ana Sayfa
            </button>
            <button
              onClick={handleServicesClick}
              className="block text-gray-300 hover:text-white transition-colors w-full text-left"
            >
              Hizmetlerimiz
            </button>
            <button
              onClick={handleFAQClick}
              className="block text-gray-300 hover:text-white transition-colors w-full text-left"
            >
              Sıkça Sorulan Sorular
            </button>
            <button
              onClick={handleContactClick}
              className="block text-gray-300 hover:text-white transition-colors w-full text-left"
            >
              İletişim
            </button>
            <button
              onClick={handleContactClick}
              className="w-full mt-2 text-black bg-primary-dark hover:bg-primary rounded-md py-2 px-4 font-medium transition-colors"
            >
              Şimdi Dene
            </button>
          </div>
        )}
      </div>
    </header>
  );
}