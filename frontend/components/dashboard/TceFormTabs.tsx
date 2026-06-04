"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Send,
  UploadCloud,
  AlertTriangle,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface TceFormTabsProps {
  onBack: () => void;
}

// Reutilizável: input com label
function Field({
  label,
  type = "text",
  placeholder,
  className = "",
}: {
  label: string;
  type?: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-xs font-medium text-gray-500">{label}</label>
      <input
        type={type}
        placeholder={placeholder ?? label}
        className="h-10 w-full rounded-md border border-gray-200 bg-white px-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#041e3a]/30 focus:border-[#041e3a] transition"
      />
    </div>
  );
}

// Reutilizável: card de seção
function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
      <div className="px-6 py-4 border-b border-gray-100">
        <h3 className="text-sm font-semibold text-[#041e3a]">{title}</h3>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}

const DAYS_OF_WEEK = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
  "Domingo",
];

export function TceFormTabs({ onBack }: TceFormTabsProps) {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  function handleDrag(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave" || e.type === "drop") setDragActive(false);
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type === "application/pdf") setSelectedFile(file);
  }

  return (
    <div className="space-y-6">
      {/* Header da view */}
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#041e3a] transition-colors"
        >
          <ArrowLeft size={18} />
          Voltar
        </button>
        <div className="h-5 w-px bg-gray-200" />
        <h2 className="text-lg font-semibold text-[#041e3a]">
          Nova Aplicação de Estágio (TCE)
        </h2>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="digital">
        <TabsList>
          <TabsTrigger value="digital">Preencher Online</TabsTrigger>
          <TabsTrigger value="upload">Enviar PDF Assinado</TabsTrigger>
        </TabsList>

        {/* ── Tab 1: Preencher Online ── */}
        <TabsContent value="digital">
          <div className="space-y-5">

            {/* Card 1: Dados da Empresa */}
            <SectionCard title="Dados da Empresa Concedente">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Razão Social" className="md:col-span-2" />
                <Field label="CNPJ ou CPF" />
                <Field label="CEP" />
                <Field label="Endereço Completo" className="md:col-span-2" />
                <Field label="E-mail da Empresa" type="email" />
                <Field label="Telefone" type="tel" />
                <Field label="Nome do Representante Legal" />
                <Field label="Cargo do Representante" />
                <Field label="Local do Estágio (setor)" className="md:col-span-2" />
              </div>
            </SectionCard>

            {/* Card 2: Dados do Estagiário */}
            <SectionCard title="Dados do(a) Estagiário(a)">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Nome Completo" className="md:col-span-2" />
                <Field label="Matrícula" />
                <Field label="CPF" />
                <Field label="Curso" />
                <Field label="Telefone" type="tel" />
                <Field label="E-mail" type="email" className="md:col-span-2" />
              </div>
            </SectionCard>

            {/* Card 3: Condições e Seguro */}
            <SectionCard title="Condições do Estágio & Seguro">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Data de Início" type="date" />
                <Field label="Data de Término" type="date" />
                <Field label="Duração em Meses" type="number" placeholder="Ex: 6" />
                <Field label="Valor da Bolsa (R$)" type="number" placeholder="Ex: 1200,00" />
                <Field label="Auxílio Transporte (R$)" type="number" placeholder="Ex: 200,00" />
                <Field label="Nome da Seguradora" />
                <Field label="Número da Apólice de Seguro" className="md:col-span-2" />
              </div>
            </SectionCard>

            {/* Card 4: Carga Horária */}
            <SectionCard title="Carga Horária">
              {/* Alerta */}
              <div className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 mb-5">
                <AlertTriangle size={16} className="text-amber-600 mt-0.5 shrink-0" />
                <p className="text-xs text-amber-700 leading-relaxed">
                  <span className="font-semibold">Atenção:</span> Carga horária máxima permitida de 6h/dia ou 30h/semanais (Lei 11.788).
                </p>
              </div>

              {/* Inputs por dia da semana */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {DAYS_OF_WEEK.map((day) => (
                  <div key={day} className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-gray-500 truncate">{day}</label>
                    <div className="relative">
                      <input
                        type="number"
                        min={0}
                        max={6}
                        placeholder="0"
                        className="h-10 w-full rounded-md border border-gray-200 bg-white px-3 pr-8 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#041e3a]/30 focus:border-[#041e3a] transition"
                      />
                      <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none">
                        h
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>

            {/* Card 5: Supervisão e Plano de Atividades */}
            <SectionCard title="Supervisão e Plano de Atividades">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Nome do Supervisor" />
                <Field label="Formação Acadêmica" />
                <Field label="Cargo" />
                <Field label="Telefone do Supervisor" type="tel" />
                <div className="md:col-span-2 flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gray-500">
                    Plano de Atividades do Estágio
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Descreva detalhadamente as atividades que serão desenvolvidas durante o estágio..."
                    className="w-full rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#041e3a]/30 focus:border-[#041e3a] transition resize-none leading-relaxed"
                  />
                </div>
              </div>
            </SectionCard>

            {/* Footer de ação */}
            <div className="flex flex-col sm:flex-row justify-end gap-3 pt-2">
              <button
                onClick={onBack}
                className="order-2 sm:order-1 flex items-center justify-center gap-2 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-2.5 px-6 rounded-lg transition-colors text-sm"
              >
                Cancelar
              </button>
              <button className="order-1 sm:order-2 flex items-center justify-center gap-2 bg-[#041e3a] hover:bg-[#062d56] text-white font-semibold py-2.5 px-6 rounded-lg transition-colors text-sm shadow-sm">
                <Send size={16} />
                Gerar TCE e Enviar
              </button>
            </div>
          </div>
        </TabsContent>

        {/* ── Tab 2: Enviar PDF Assinado ── */}
        <TabsContent value="upload">
          <div className="space-y-5">
            {/* Alerta */}
            <div className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3">
              <AlertTriangle size={16} className="text-amber-600 mt-0.5 shrink-0" />
              <p className="text-xs text-amber-700 leading-relaxed">
                <span className="font-semibold">Atenção:</span> O documento enviado já deve conter todas as informações preenchidas e as assinaturas da empresa e do aluno.
              </p>
            </div>

            {/* Zona de upload */}
            <div
              className={`relative flex min-h-[250px] flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed p-8 text-center transition-colors ${
                dragActive
                  ? "border-[#041e3a] bg-blue-50"
                  : "border-gray-300 bg-gray-50 hover:border-gray-400 hover:bg-gray-100"
              }`}
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDragLeave={handleDrag}
              onDrop={handleDrop}
            >
              <input
                id="tce-pdf-upload"
                type="file"
                accept="application/pdf"
                className="hidden"
                onChange={(e) => setSelectedFile(e.target.files?.[0] ?? null)}
              />
              <label htmlFor="tce-pdf-upload" className="flex flex-col items-center gap-3 cursor-pointer w-full">
                <div className={`rounded-full p-4 transition-colors ${dragActive ? "bg-[#041e3a]/10" : "bg-gray-200"}`}>
                  <UploadCloud
                    size={36}
                    className={dragActive ? "text-[#041e3a]" : "text-gray-400"}
                  />
                </div>
                {selectedFile ? (
                  <>
                    <p className="text-sm font-semibold text-[#041e3a]">{selectedFile.name}</p>
                    <p className="text-xs text-gray-500">{(selectedFile.size / 1024).toFixed(1)} KB • PDF</p>
                  </>
                ) : (
                  <>
                    <p className="text-sm font-medium text-gray-700">
                      Arraste seu arquivo PDF aqui ou clique para selecionar
                    </p>
                    <p className="text-xs text-gray-400">Somente arquivos PDF • Máx. 10MB</p>
                  </>
                )}
              </label>
            </div>

            {/* Botão de envio */}
            <div className="flex justify-end">
              <button className="flex items-center justify-center gap-2 bg-[#041e3a] hover:bg-[#062d56] text-white font-semibold py-2.5 px-6 rounded-lg transition-colors text-sm shadow-sm disabled:opacity-50">
                <Send size={16} />
                Enviar Documento
              </button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
