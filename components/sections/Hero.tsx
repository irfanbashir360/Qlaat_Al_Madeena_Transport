'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight, TruckIcon, Shield, Clock, Award, Zap, Globe } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-accent">
      {/* Advanced Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Mesh Gradient Base */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/20 via-primary to-primary-dark"></div>

        {/* Animated Gradient Waves */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/30 to-transparent animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/10 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        {/* Sophisticated Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px',
          }}
        ></div>

        {/* Dynamic Floating Elements */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-secondary/30 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-gradient-to-tl from-secondary/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>

        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }}></div>
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-20 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            {/* Premium Badge */}
            <div className={`inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl px-8 py-4 rounded-full mb-10 border border-white/30 shadow-md transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              <div className="w-8 h-8 bg-secondary/30 rounded-full flex items-center justify-center">
                <Award className="text-secondary" size={18} />
              </div>
              <span className="text-white font-semibold text-sm md:text-base tracking-wide">
                Licensed by Dubai Economic Development
              </span>
              <div className="hidden sm:block w-px h-6 bg-white/30"></div>
              <span className="hidden sm:inline text-white/80 text-sm">License: 1572603</span>
            </div>

            {/* Hero Headline */}
            <h1 className={`font-heading font-extrabold text-white mb-8 leading-[1.1] transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="block text-4xl md:text-6xl lg:text-7xl xl:text-8xl mb-4">
                Your Trusted
              </span>
              <span className="block text-5xl md:text-7xl lg:text-8xl xl:text-9xl">
                <span className="bg-gradient-to-r from-white via-secondary to-gold bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Transport Partner
                </span>
              </span>
              <span className="block text-3xl md:text-5xl lg:text-6xl xl:text-7xl mt-4 text-white/90">
                in Dubai, UAE
              </span>
            </h1>

            {/* Enhanced Subtitle */}
            <div className={`space-y-4 mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/95 font-light leading-relaxed max-w-4xl mx-auto">
                Professional Cargo Transport Services Across the UAE
              </p>
              <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                From raw materials to heavy machinery – We deliver excellence, reliability, and safety with every shipment
              </p>
            </div>

            {/* Premium Trust Indicators */}
            <div className={`grid grid-cols-1 sm:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="group">
                <div className="flex flex-col items-center gap-5 bg-white/15 backdrop-blur-md px-6 py-8 rounded-xl border border-white/30 hover:border-white/50 hover:bg-white/20 transition-all duration-300 shadow-md">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary-dark rounded-xl flex items-center justify-center">
                    <Shield className="text-white" size={28} />
                  </div>
                  <div className="text-center">
                    <div className="text-white font-bold text-lg mb-1.5 tracking-tight">Licensed</div>
                    <div className="text-white/80 text-xs font-medium uppercase tracking-wider">DED Authorized</div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex flex-col items-center gap-5 bg-white/15 backdrop-blur-md px-6 py-8 rounded-xl border border-white/30 hover:border-white/50 hover:bg-white/20 transition-all duration-300 shadow-md">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary-dark rounded-xl flex items-center justify-center">
                    <Clock className="text-white" size={28} />
                  </div>
                  <div className="text-center">
                    <div className="text-white font-bold text-lg mb-1.5 tracking-tight">24/7</div>
                    <div className="text-white/80 text-xs font-medium uppercase tracking-wider">Always Ready</div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex flex-col items-center gap-5 bg-white/15 backdrop-blur-md px-6 py-8 rounded-xl border border-white/30 hover:border-white/50 hover:bg-white/20 transition-all duration-300 shadow-md">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary-dark rounded-xl flex items-center justify-center">
                    <TruckIcon className="text-white" size={28} />
                  </div>
                  <div className="text-center">
                    <div className="text-white font-bold text-lg mb-1.5 tracking-tight">50+ Fleet</div>
                    <div className="text-white/80 text-xs font-medium uppercase tracking-wider">Modern Vehicles</div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex flex-col items-center gap-5 bg-white/15 backdrop-blur-md px-6 py-8 rounded-xl border border-white/30 hover:border-white/50 hover:bg-white/20 transition-all duration-300 shadow-md">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary-dark rounded-xl flex items-center justify-center">
                    <Globe className="text-white" size={28} />
                  </div>
                  <div className="text-center">
                    <div className="text-white font-bold text-lg mb-1.5 tracking-tight">UAE Wide</div>
                    <div className="text-white/80 text-xs font-medium uppercase tracking-wider">Full Coverage</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Stats Banner */}
            <div className={`flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-12 py-6 px-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 max-w-4xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-white font-semibold text-sm md:text-base">10+ Years Experience</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-white/20"></div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span className="text-white font-semibold text-sm md:text-base">5000+ Deliveries</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-white/20"></div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span className="text-white font-semibold text-sm md:text-base">98% On-Time Rate</span>
              </div>
            </div>

            {/* Premium CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary-light to-secondary rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-75"></div>
                <Button
                  href="/quote"
                  variant="secondary"
                  size="lg"
                  className="relative shadow-md transform hover:scale-105 transition-all duration-300 text-lg px-10 py-5 font-bold"
                >
                  <span className="flex items-center gap-3">
                    <Zap size={22} />
                    Get Instant Quote
                    <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>

              <Button
                href="/services"
                variant="ghost"
                size="lg"
                className="bg-white/10 backdrop-blur-xl border-2 border-white/40 text-white hover:bg-white hover:text-primary shadow-md transform hover:scale-105 transition-all duration-300 text-lg px-10 py-5 font-semibold"
              >
                <span className="flex items-center gap-3">
                  Explore Services
                  <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
            <div className="flex flex-col items-center gap-2">
              <div className="w-7 h-11 border-2 border-white/40 rounded-full flex justify-center p-2 backdrop-blur-sm bg-white/5">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
              </div>
              <span className="text-white/60 text-xs font-medium">Scroll</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sophisticated Layered Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        {/* Wave Layer 1 - Front */}
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto relative z-20"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0L48 10C96 20 192 40 288 46.7C384 53 480 47 576 43.3C672 40 768 40 864 46.7C960 53 1056 67 1152 73.3C1248 80 1344 80 1392 80L1440 80V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z"
            fill="white"
            className="drop-shadow-md"
          />
        </svg>

        {/* Wave Layer 2 - Back (slightly offset) */}
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto absolute bottom-0 left-0 z-10"
          preserveAspectRatio="none"
          style={{ marginBottom: '-2px' }}
        >
          <path
            d="M0 20L48 26.7C96 33 192 47 288 53.3C384 60 480 60 576 53.3C672 47 768 33 864 33.3C960 33 1056 47 1152 53.3C1248 60 1344 60 1392 60L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V20Z"
            fill="white"
            fillOpacity="0.5"
          />
        </svg>
      </div>
    </section>
  );
}
