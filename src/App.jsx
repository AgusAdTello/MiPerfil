import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Layout, Terminal, Send } from 'lucide-react';

export default function App() {
  const [formStatus, setFormStatus] = useState('');

  // 1. Definición centralizada de tus proyectos con imágenes incluidas
  const misProyectos = [
    {
      titulo: "CineExplorer App",
      tipo: "Proyecto Principal",
      descripcion: "Una aplicación moderna que consume la API de TMDB para explorar películas. Implementé búsqueda en tiempo real, filtros dinámicos y un diseño totalmente responsive con modo oscuro.",
      tecnologias: ["React + Vite", "Tailwind CSS", "API Integration"],
      demoLink: "https://aguscine.vercel.app",
      repoLink: "https://github.com/AgusAdTello/AgusCine",
      emoji: "🎬",
      imagen: "/aguscine.jpg" // Ruta de la imagen en public/
    },
    {
      titulo: "Statrix",
      tipo: "Sistema de Gestión Empresarial",
      descripcion: "Dashboard administrativo (SPA) diseñado para la administración eficiente de negocios. Incluye gestión de inventario (CRUD), punto de venta (POS) con lógica de stock y gráficos interactivos.",
      tecnologias: ["React.js", "Tailwind CSS", "Recharts", "LocalStorage API"],
      demoLink: "https://statrixad.vercel.app",
      repoLink: "https://github.com/AgusAdTello/Statrix",
      emoji: "📊",
      imagen: "/Statrix.jpg" // Ruta de la imagen en public/
    },
    {
      titulo: "Zenvy Shop",
      tipo: "E-commerce de Alto Rendimiento",
      descripcion: "Plataforma de e-commerce diseñada para Dropshipping Internacional. Utiliza renderizado híbrido, gestión de estado global para el carrito y tipado estricto para mayor seguridad.",
      tecnologias: ["Next.js 15", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
      demoLink: "https://zenvy-shop.vercel.app", 
      repoLink: "https://github.com/AgusAdTello/zenvy-shop",
      emoji: "🛒",
      imagen: "/zenvy.jpg" // Ruta de la imagen en public/
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
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#inicio" className="hover:text-cyan-400 transition-colors">Inicio</a>
            <a href="#proyectos" className="hover:text-cyan-400 transition-colors">Proyectos</a>
            <a href="#habilidades" className="hover:text-cyan-400 transition-colors">Habilidades</a>
            <a href="#contacto" className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/50 hover:bg-cyan-500 hover:text-slate-950 transition-all">Contáctame</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-40 pb-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <span className="text-cyan-400 font-mono text-sm mb-4 block animate-pulse">Hola, mi nombre es</span>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 tracking-tight">Agustín Tello.</h1>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6">Desarrollador Web Junior.</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
              Transformo ideas en código limpio y funcional. Especializado en crear experiencias web modernas con 
              <span className="text-cyan-400 font-bold"> React</span> y lógica sólida con 
              <span className="text-cyan-400 font-bold"> .NET</span>.
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

      {/* Sección de Proyectos */}
      <section id="proyectos" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-2xl font-bold text-slate-100">01. Proyectos Destacados</h3>
            <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
          </div>

          <div className="flex flex-col gap-16">
            {misProyectos.map((proy, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative bg-slate-950 border border-slate-800 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2 w-full">
                    <div className="aspect-video bg-slate-900 rounded-lg overflow-hidden border border-slate-800 group-hover:border-cyan-500/30 transition-all relative">
                      {proy.imagen ? (
                        <img 
                          src={proy.imagen} 
                          alt={proy.titulo} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                          <span className="text-5xl">{proy.emoji}</span>
                        </div>
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
                      <a href={proy.demoLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors font-medium">
                        <ExternalLink size={20} /> Demo
                      </a>
                      <a href={proy.repoLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                        <Github size={20} /> Código
                      </a>
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
              { name: "ASP .NET Core", icon: Terminal, color: "text-purple-400" },
              { name: "React.js", icon: Code2, color: "text-cyan-400" },
              { name: "JavaScript", icon: Code2, color: "text-yellow-400" },
              { name: "SQL Server", icon: Database, color: "text-blue-400" },
              { name: "Tailwind CSS", icon: Layout, color: "text-cyan-300" },
              { name: "TypeScript", icon: Code2, color: "text-blue-500" },
              { name: "Next.js", icon: Terminal, color: "text-white" },
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
          <p className="text-slate-400 text-lg mb-10">Estoy buscando activamente oportunidades como Desarrollador Web Jr.</p>
          <form onSubmit={handleSubmit} className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 text-left mb-12">
            <div className="mb-6">
               <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Tu Email</label>
               <input type="email" name="email" id="email" required className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="ejemplo@correo.com" />
            </div>
            <div className="mb-6">
               <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Mensaje</label>
               <textarea name="message" id="message" required rows="4" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Hola Agustín..."></textarea>
            </div>
            <button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2">
              <Send size={20} /> Enviar Mensaje
            </button>
            {formStatus && <p className={`mt-4 text-center font-medium ${formStatus.includes('error') ? 'text-red-400' : 'text-green-400'}`}>{formStatus}</p>}
          </form>
          <div className="flex justify-center gap-8">
             <a href="mailto:agus.tello5@hotmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors"><Mail size={24} /></a>
             <a href="https://www.linkedin.com/in/agustin-tello-683389b3/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors"><Linkedin size={24} /></a>
             <a href="https://github.com/AgusAdTello" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors"><Github size={24} /></a>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-slate-600 text-sm font-mono border-t border-slate-900">
        <p>Diseñado y construido por Agustín Tello © 2025</p>
      </footer>
    </div>
  );
}