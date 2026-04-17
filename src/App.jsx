import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  Layout, 
  Terminal, 
  Send, 
  Cpu, 
  Gamepad2, 
  Zap,
  Globe,
  Film
} from 'lucide-react';

export default function App() {
  const [formStatus, setFormStatus] = useState('');

  // Listado completo de proyectos (7 proyectos incluyendo Mis Sabores)
  const misProyectos = [
    {
      titulo: "Vixell",
      tipo: "Ingeniería & Simulación",
      descripcion: "Simulador de alto rendimiento para el cálculo de propiedades en aleaciones metálicas. Integra lógica compleja con una interfaz técnica avanzada.",
      tecnologias: ["Unreal Engine", "Visual Studio", "C++", "React 19"],
      demoLink: "#", 
      repoLink: "https://github.com/AgusAdTello/Vixell",
      emoji: "🔬",
      imagen: "/vixell.png" 
    },
    {
      titulo: "EPYKA",
      tipo: "Web Scraping & UI",
      descripcion: "Plataforma dinámica que utiliza herramientas de extracción de datos para gestionar información en tiempo real con una interfaz fluida.",
      tecnologias: ["React 19", "Tailwind 4", "Cheerio", "Axios"],
      demoLink: "https://epyka.vercel.app/",
      repoLink: "https://github.com/AgusAdTello/EPYKA",
      emoji: "⚡",
      imagen: "/epyka-hero.png"
    },
    {
      titulo: "Zenvy Shop",
      tipo: "E-commerce Full Stack",
      descripcion: "Tienda online optimizada para Dropshipping Internacional. Implementa gestión de estado global y tipado estricto para escalabilidad.",
      tecnologias: ["Next.js 15", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
      demoLink: "https://zenvy-shop.vercel.app", 
      repoLink: "https://github.com/AgusAdTello/zenvy-shop",
      emoji: "🛒",
      imagen: "/zenvy.png"
    },
    {
      titulo: "Merxio",
      tipo: "Software de Gestión",
      descripcion: "Aplicación de escritorio para control de inventarios y punto de venta (POS) diseñada para comercios minoristas.",
      tecnologias: ["Python", "SQLite", "CustomTkinter"],
      demoLink: "#",
      repoLink: "https://github.com/AgusAdTello/Merxio",
      emoji: "📦",
      imagen: "/merxio.png"
    },
    {
      titulo: "Mis Sabores",
      tipo: "Promotional Website",
      descripcion: "Sitio web promocional para un negocio de mermeladas y conservas artesanales. Enfocado en la estética visual y la presentación de productos tradicionales.",
      tecnologias: ["React", "Tailwind CSS", "Framer Motion"],
      demoLink: "https://mis-sabores.vercel.app/",
      repoLink: "https://github.com/AgusAdTello/mis-sabores",
      emoji: "🍯",
      imagen: "/missabores.png"
    },
    {
      titulo: "Statrix",
      tipo: "Dashboard Administrativo",
      descripcion: "Sistema de gestión empresarial con gráficos interactivos para el análisis de ventas y administración de stock en tiempo real.",
      tecnologias: ["React.js", "Recharts", "Tailwind CSS", "LocalStorage"],
      demoLink: "https://statrixad.vercel.app",
      repoLink: "https://github.com/AgusAdTello/Statrix",
      emoji: "📊",
      imagen: "/Statrix.png"
    },
    {
      titulo: "AgusCine",
      tipo: "Media & API Integration",
      descripcion: "Explorador de películas moderno que consume la API de TMDB. Incluye búsqueda avanzada, filtros y diseño responsive con modo oscuro.",
      tecnologias: ["React + Vite", "Tailwind CSS", "TMDB API"],
      demoLink: "https://aguscine.vercel.app",
      repoLink: "https://github.com/AgusAdTello/AgusCine",
      emoji: "🎬",
      imagen: "/aguscine.png"
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const response = await fetch("https://formspree.io/f/mdkqlawn", {
      method: "POST",
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      setFormStatus('¡Gracias! Tu mensaje ha sido enviado.');
      form.reset();
    } else {
      setFormStatus('Hubo un error. Por favor intenta nuevamente.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30">
      
      {/* Navegación */}
      <nav className="fixed w-full backdrop-blur-md bg-slate-950/80 border-b border-slate-800 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer">
            <img src="/Logo.png" alt="Logo AAT" className="w-10 h-10 rounded-full border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]" />
            <span className="font-bold text-lg tracking-tight hover:text-cyan-400 transition-colors">Agustín Tello</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#inicio" className="hover:text-cyan-400 transition-colors">Inicio</a>
            <a href="#proyectos" className="hover:text-cyan-400 transition-colors">Proyectos</a>
            <a href="#habilidades" className="hover:text-cyan-400 transition-colors">Habilidades</a>
            <a href="#contacto" className="px-5 py-2.5 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/50 hover:bg-cyan-500 hover:text-slate-950 transition-all">
              Contáctame
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-40 pb-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <span className="text-cyan-400 font-mono text-sm mb-2 block animate-pulse">Hola, mi nombre es</span>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4 tracking-tight">Agustín Tello.</h1>
            
            <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
              <span className="bg-blue-600/20 border border-blue-500/50 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold">
                🇬🇧 English: Proficient (IELTS)
              </span>
              <span className="bg-purple-600/20 border border-purple-500/50 text-purple-400 px-3 py-1 rounded-full text-xs font-semibold">
                🎓 PTE Academic Certified
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6">Software Engineer Student.</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
              Estudiante de Ingeniería en Sistemas (UTN). Especializado en <span className="text-cyan-400 font-bold">React</span>, <span className="text-cyan-400 font-bold">.NET</span> y desarrollo técnico con <span className="text-cyan-400 font-bold">Unreal Engine</span>.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#proyectos" className="px-8 py-3 bg-cyan-500 text-slate-950 font-bold rounded hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all">Ver Proyectos</a>
              <a href="https://github.com/AgusAdTello" target="_blank" rel="noreferrer" className="px-8 py-3 border border-cyan-500/30 text-cyan-400 rounded hover:bg-cyan-500/10 transition-colors flex items-center gap-2">
                <Github size={20} /> GitHub
              </a>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            <img src="/perfil.jpg" alt="Agustin Tello" className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-2 border-slate-800 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-2xl font-bold text-slate-100">01. Portafolio de Proyectos</h3>
            <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
          </div>
          <div className="flex flex-col gap-16">
            {misProyectos.map((proy, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative bg-slate-950 border border-slate-800 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2 w-full">
                    <div className="aspect-video bg-slate-900 rounded-lg overflow-hidden border border-slate-800 group-hover:border-cyan-500/30 transition-all relative flex items-center justify-center">
                      {proy.imagen ? (
                        <img src={proy.imagen} alt={proy.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      ) : (
                        <span className="text-5xl">{proy.emoji}</span>
                      )}
                    </div>
                  </div>
                  <div className="md:w-1/2 w-full">
                    <h4 className="text-cyan-400 font-mono text-sm mb-2">{proy.tipo}</h4>
                    <h3 className="text-3xl font-bold text-white mb-4">{proy.titulo}</h3>
                    <p className="text-slate-400 mb-6 leading-relaxed">{proy.descripcion}</p>
                    <div className="flex flex-wrap gap-3 text-xs font-mono text-cyan-200 mb-8">
                      {proy.tecnologias.map((tech, i) => (
                        <span key={i} className="bg-cyan-900/30 px-3 py-1 rounded-full">{tech}</span>
                      ))}
                    </div>
                    <div className="flex gap-6">
                      <a href={proy.demoLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors font-medium"><ExternalLink size={20} /> Demo</a>
                      <a href={proy.repoLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"><Github size={20} /> Código</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section id="habilidades" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-2xl font-bold text-slate-100">02. Stack Tecnológico</h3>
            <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Unreal Engine", icon: Gamepad2, color: "text-white" },
              { name: "Visual Studio", icon: Terminal, color: "text-purple-500" },
              { name: "C++", icon: Cpu, color: "text-blue-600" },
              { name: "ASP .NET Core", icon: Terminal, color: "text-purple-400" },
              { name: "React 19", icon: Code2, color: "text-cyan-400" },
              { name: "Next.js 15", icon: Zap, color: "text-slate-200" },
              { name: "TypeScript", icon: Code2, color: "text-blue-500" },
              { name: "SQL Server", icon: Database, color: "text-blue-400" },
              { name: "Python", icon: Database, color: "text-yellow-500" },
              { name: "Tailwind CSS 4", icon: Layout, color: "text-cyan-300" },
              { name: "Framer Motion", icon: Zap, color: "text-pink-400" },
              { name: "Git & GitHub", icon: Github, color: "text-orange-400" },
            ].map((skill, index) => (
              <div key={index} className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/30 hover:-translate-y-1 transition-all group">
                <skill.icon className={`w-8 h-8 ${skill.color} mb-4 group-hover:scale-110 transition-transform`} />
                <h4 className="text-slate-200 font-semibold">{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 px-6 text-center bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-2xl mx-auto">
          <span className="text-cyan-400 font-mono text-sm mb-4 block">¿Hablamos?</span>
          <h2 className="text-4xl font-bold text-slate-100 mb-6">Contáctame</h2>
          <form onSubmit={handleSubmit} className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 text-left mb-12">
            <div className="mb-6">
               <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
               <input type="email" name="email" required className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-cyan-500 outline-none" placeholder="tu@email.com" />
            </div>
            <div className="mb-6">
               <label className="block text-sm font-medium text-slate-400 mb-2">Mensaje</label>
               <textarea name="message" required rows="4" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-cyan-500 outline-none" placeholder="Hola Agustín..."></textarea>
            </div>
            <button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2">
              <Send size={20} /> Enviar Mensaje
            </button>
            {formStatus && <p className={`mt-4 text-center ${formStatus.includes('error') ? 'text-red-400' : 'text-green-400'}`}>{formStatus}</p>}
          </form>
          <div className="flex justify-center gap-8">
             <a href="mailto:agus.tello5@hotmail.com" className="hover:text-cyan-400 transition-colors"><Mail size={24} /></a>
             <a href="https://linkedin.com/in/agustin-tello-683389b3/" target="_blank" className="hover:text-cyan-400 transition-colors"><Linkedin size={24} /></a>
             <a href="https://github.com/AgusAdTello" target="_blank" className="hover:text-cyan-400 transition-colors"><Github size={24} /></a>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-slate-600 text-sm font-mono border-t border-slate-900">
        <p>Agustín Tello © 2025 - Desarrollado con React 19</p>
      </footer>
    </div>
  );
}