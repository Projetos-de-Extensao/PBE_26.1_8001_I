import Link from 'next/link';
import { CheckCircle, Clock, AlertCircle, FileText } from 'lucide-react';

const statusItems = [
  {
    status: 'Aprovado',
    statusClass: 'bg-green-700 text-white',
    fileName: 'Contrato_Estagio_BTG.pdf',
    description: 'Todas as cláusulas em conformidade.',
    icon: CheckCircle,
  },
  {
    status: 'Em Análise',
    statusClass: 'bg-[#ffb600] text-[#041e3a]',
    fileName: 'Relatorio_QuestEdu.pdf',
    description: 'Aguardando processamento do backend.',
    icon: Clock,
  },
  {
    status: 'Pendente',
    statusClass: 'bg-orange-600 text-white',
    fileName: 'Plano_Estagio_2026.pdf',
    description: 'Aguardando assinatura da instituição.',
    icon: AlertCircle,
  },
  {
    status: 'Aprovado',
    statusClass: 'bg-green-700 text-white',
    fileName: 'Termo_Compromisso_2026.pdf',
    description: 'Documento validado e arquivado.',
    icon: CheckCircle,
  },
];

export default function MuralDeStatusPage() {
  return (
    <main className="min-h-screen bg-[#f4f5f6] px-4 py-8 text-slate-800">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="flex items-center justify-between gap-4 rounded-xl bg-white px-5 py-4 shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <img src="/logo-Ibmec.svg" alt="Ibmec" className="h-8 w-auto object-contain" />
            <h1 className="text-2xl font-bold text-[#041e3a]">Mural de Status</h1>
          </div>
          <Link href="/" className="text-sm font-semibold text-[#041e3a] hover:text-[#ffb600] transition-colors">
            Voltar
          </Link>
        </div>

        <section className="grid gap-4 md:grid-cols-2">
          {statusItems.map((item) => {
            const StatusIcon = item.icon;

            return (
              <article key={item.fileName} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className={`inline-flex rounded px-2 py-1 text-xs font-bold ${item.statusClass}`}>
                    {item.status}
                  </span>
                  <StatusIcon className="h-5 w-5 text-gray-400" />
                </div>
                <h2 className="mb-1 text-lg font-semibold text-slate-800">{item.fileName}</h2>
                <p className="text-sm text-gray-500">{item.description}</p>
              </article>
            );
          })}
        </section>

        <section className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-200 px-5 py-4">
            <h2 className="text-lg font-semibold text-[#041e3a]">Resumo</h2>
          </div>
          <div className="grid gap-4 p-5 sm:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-4">
              <p className="text-sm text-gray-500">Total de documentos</p>
              <p className="mt-1 text-2xl font-bold text-[#041e3a]">24</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4">
              <p className="text-sm text-gray-500">Aprovados</p>
              <p className="mt-1 text-2xl font-bold text-green-700">18</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4">
              <p className="text-sm text-gray-500">Em análise</p>
              <p className="mt-1 text-2xl font-bold text-yellow-600">6</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
