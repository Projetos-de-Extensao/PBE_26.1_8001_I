"use client";

import { useState } from "react";
import { FilePlus, Download, FileX } from "lucide-react";
import { ApplicationTimeline } from "./ApplicationTimeline";
import { SubsequentUploads } from "./SubsequentUploads";
import { RequirementsCard } from "./RequirementsCard";
import { TceFormTabs } from "./TceFormTabs";

type View = "dashboard" | "new-application";

export function StudentDashboard() {
  const [hasActiveApplication, setHasActiveApplication] = useState(false);
  const [view, setView] = useState<View>("dashboard");

  if (view === "new-application") {
    return <TceFormTabs onBack={() => setView("dashboard")} />;
  }

  return (
    <div className="space-y-6">
      {/* Toggle de teste (sutil, no canto superior direito) */}
      <div className="flex justify-end">
        <label className="flex items-center gap-2 text-xs text-gray-500 cursor-pointer select-none">
          <span>Teste: Simular aplicação ativa</span>
          <button
            type="button"
            role="switch"
            aria-checked={hasActiveApplication}
            onClick={() => setHasActiveApplication(!hasActiveApplication)}
            className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
              hasActiveApplication ? "bg-[#041e3a]" : "bg-gray-300"
            }`}
          >
            <span
              className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
                hasActiveApplication ? "translate-x-5" : "translate-x-1"
              }`}
            />
          </button>
        </label>
      </div>

      {/* Grade principal: 2/3 | 1/3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Coluna esquerda — ocupa 2/3 */}
        <div className="md:col-span-2 space-y-6">
          {hasActiveApplication ? (
            <>
              {/* Estado Ativo: Timeline e Envios */}
              <ApplicationTimeline />
              <SubsequentUploads />
            </>
          ) : (
            /* Estado Vazio: Card centralizado de boas-vindas */
            <div className="bg-white rounded-xl border border-gray-200 p-8 md:p-12 shadow-sm flex flex-col items-center justify-center text-center min-h-[320px]">
              <div className="bg-gray-100 rounded-full p-4 mb-5">
                <FileX size={40} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-[#041e3a] mb-2">
                Nenhum estágio em andamento
              </h3>
              <p className="text-sm text-gray-500 max-w-md mb-6">
                Você ainda não iniciou nenhuma aplicação de estágio. Clique no botão abaixo para começar o processo de submissão do seu TCE.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setView("new-application")}
                  className="flex items-center justify-center gap-2 bg-[#041e3a] hover:bg-[#062d56] text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-sm text-sm"
                >
                  <FilePlus size={18} />
                  Iniciar Aplicação de Estágio
                </button>
                <button className="flex items-center justify-center gap-2 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors shadow-sm text-sm">
                  <Download size={18} />
                  Baixar Modelo de TCE (ZIP)
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Coluna direita — ocupa 1/3 (visível em ambos os estados) */}
        <div className="md:col-span-1">
          <RequirementsCard />
        </div>
      </div>
    </div>
  );
}
