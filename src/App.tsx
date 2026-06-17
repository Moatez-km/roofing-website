import {
  Award,
  CalendarDays,
  Clock,
  Phone,
  Play,
  ShieldCheck,
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen font-sans text-white bg-[#1a1a1a] flex flex-col relative">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1613541444699-39429d990353?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d131a] via-[#0d131a]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-4 bg-black/40 backdrop-blur-sm border-b border-white/5">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* Custom SVG Logo resembling the one in the image */}
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
            <path d="M20 5L2 20H8V35H16V25H24V35H32V20H38L20 5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
            <path d="M20 5L2 20" stroke="#f97316" strokeWidth="3" strokeLinecap="round" />
            <path d="M26 10L26 5H30V13.5" stroke="#f97316" strokeWidth="2" />
          </svg>
          <div className="flex flex-col">
            <span className="text-2xl font-bold leading-tight tracking-wider">
              PEAK <span className="text-orange-500">ROOFING</span>
            </span>
            <span className="text-[0.6rem] tracking-[0.2em] text-gray-300 font-medium">
              HÖCHSTE QUALITÄT
            </span>
          </div>
        </div>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            LEISTUNGEN
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            ABLAUF
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            REFERENZEN
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            KONTAKT
          </a>
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 font-bold text-lg">
            <Phone className="w-5 h-5 text-orange-500" />
            <span>(555) 123-4567</span>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 font-bold text-sm tracking-wide transition-colors">
            KOSTENLOSES ANGEBOT
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <main className="relative z-10 flex-1 flex flex-col justify-center px-8 lg:px-24 py-16">
        <div className="max-w-2xl">
          <h1 className="text-6xl md:text-7xl lg:text-[5rem] font-black leading-[1.05] tracking-tight mb-6">
            <span className="block text-white">STARKE DÄCHER.</span>
            <span className="block text-orange-500">SICHERE HÄUSER.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-xl font-medium">
            Hochwertige Dachlösungen, gebaut um das zu schützen, was am wichtigsten ist.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 mb-12">
            <div className="flex items-center gap-4">
              <ShieldCheck className="w-10 h-10 text-orange-500" strokeWidth={1.5} />
              <div className="text-sm font-bold leading-snug">
                Lizenziert<br />& Versichert
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Award className="w-10 h-10 text-orange-500" strokeWidth={1.5} />
              <div className="text-sm font-bold leading-snug">
                Hochwertige<br />Materialien
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="w-10 h-10 text-orange-500" strokeWidth={1.5} />
              <div className="text-sm font-bold leading-snug">
                Pünktlich<br />& Zuverlässig
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <button className="flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-bold text-sm tracking-wide transition-colors rounded-sm">
              <CalendarDays className="w-5 h-5" />
              KOSTENLOSES ANGEBOT
            </button>
            <button className="flex items-center justify-center gap-3 bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 font-bold text-sm tracking-wide transition-colors rounded-sm">
              <Play className="w-5 h-5 fill-current" />
              VIDEO ANSEHEN
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
