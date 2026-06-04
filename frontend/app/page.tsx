"use client";

import React, { useState } from 'react';
import { 
  Home, 
  FileText, 
  LogOut,
  BookOpen,
  Menu
} from 'lucide-react';
import { StudentDashboard } from '@/components/dashboard/StudentDashboard';



export default function ValidadorEstagio() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#f4f5f6] font-sans text-slate-800 overflow-hidden">
      
      {/* Overlay escuro para mobile quando o menu está aberto */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 md:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Lateral (Responsiva) */}
      <aside className={`
        fixed md:relative z-50 h-full w-20 bg-white border-r border-gray-200 flex flex-col items-center py-6 gap-8 shrink-0
        transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
      `}>
        <img
          src="/ibmec_icon.svg"
          alt="Ibmec"
          className="mb-4 h-10 w-10 object-contain"
        />
        <nav className="flex flex-col gap-6 w-full">
          <button className="flex justify-center p-3 mx-2 bg-blue-50 text-blue-900 rounded-lg">
            <Home size={24} />
          </button>
          <button className="flex justify-center p-3 mx-2 text-gray-400 hover:text-[#041e3a] transition-colors">
            <BookOpen size={24} />
          </button>
          <button className="flex justify-center p-3 mx-2 text-gray-400 hover:text-[#041e3a] transition-colors">
            <FileText size={24} />
          </button>
        </nav>
        <button className="mt-auto flex justify-center p-3 text-gray-400 hover:text-red-600 transition-colors">
          <LogOut size={24} />
        </button>
      </aside>

      {/* Conteúdo Principal */}
      <main className="flex-1 overflow-y-auto w-full relative">
        
        {/* Header Superior */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-3 md:gap-4">
            {/* Ícone Menu Hambúrguer (Mobile) */}
            <button 
              className="md:hidden p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            
            <img
              src="/logo-Ibmec.svg"
              alt="Ibmec"
              className="h-6 md:h-8 w-auto object-contain"
            />
            <span className="hidden sm:inline text-gray-300">|</span>
            <span className="hidden sm:inline text-xs md:text-sm font-medium text-gray-600">
              Sistema de Validação de Estágios
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center text-sm font-bold shrink-0">
              MF
            </div>
            <span className="hidden sm:inline text-sm font-medium">Mauricio Filho</span>
          </div>
        </header>

        {/* Container Principal */}
        <div className="p-4 md:p-8 max-w-6xl mx-auto">
          
          {/* Banner Principal */}
          <section className="bg-[#041e3a] rounded-xl p-6 md:p-8 text-white flex flex-col md:flex-row justify-between items-start md:items-center shadow-lg mb-6">
            <div className="space-y-2">
              <p className="text-xs md:text-sm text-blue-200 font-medium tracking-wide uppercase">
                Área do Aluno • Lei nº 11.788/2008
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold">Gerenciamento do TCE</h2>
              <p className="text-sm md:text-base text-blue-100 max-w-xl">
                Gerencie sua aplicação de estágio, acompanhe o status do seu TCE e envie documentos de acompanhamento.
              </p>
            </div>
          </section>

          <StudentDashboard />

        </div>
      </main>
    </div>
  );
}
