import Link from 'next/link';
import { CheckCircle, Clock, FileText } from 'lucide-react';

const historyRows = [
  {
    fileName: 'Contrato_Estagio_BTG.pdf',
    date: '22 Mai 2026',
    type: 'Termo de Compromisso',
    status: 'Válido',
    statusClass: 'text-green-700',
    icon: CheckCircle,
  },
  {
    fileName: 'Relatorio_QuestEdu.pdf',
    date: '20 Mai 2026',
    type: 'Relatório de Atividades',
    status: 'Processando',
    statusClass: 'text-yellow-600',
    icon: Clock,
  },
  {
    fileName: 'Plano_Estagio_2026.pdf',
    date: '18 Mai 2026',
    type: 'Plano de Atividades',
    status: 'Válido',
    statusClass: 'text-green-700',
    icon: CheckCircle,
  },
  {
    fileName: 'Termo_Compromisso_2026.pdf',
    date: '12 Mai 2026',
    type: 'Termo de Compromisso',
    status: 'Válido',
    statusClass: 'text-green-700',
    icon: CheckCircle,
  },
];

export default function HistoricoDeValidacoesPage() {
  return (
    <main className="min-h-screen bg-[#f4f5f6] px-4 py-8 text-slate-800">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="flex items-center justify-between gap-4 rounded-xl bg-white px-5 py-4 shadow-sm border border-gray-200">
          <div className="flex items-center gap-3">
            <img src="/logo-Ibmec.svg" alt="Ibmec" className="h-8 w-auto object-contain" />
            <h1 className="text-2xl font-bold text-[#041e3a]">Histórico de Validações</h1>
          </div>
          <Link href="/" className="text-sm font-semibold text-[#041e3a] hover:text-[#ffb600] transition-colors">
            Voltar
          </Link>
        </div>

        <section className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-left">
              <thead>
                <tr className="bg-gray-50 text-sm text-gray-500">
                  <th className="px-5 py-4 font-medium">Nome do Arquivo</th>
                  <th className="px-5 py-4 font-medium">Data de Envio</th>
                  <th className="px-5 py-4 font-medium">Tipo</th>
                  <th className="px-5 py-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {historyRows.map((row) => {
                  const RowIcon = row.icon;

                  return (
                    <tr key={row.fileName} className="border-t border-gray-100 hover:bg-gray-50">
                      <td className="px-5 py-4 font-medium text-gray-700">
                        <span className="flex items-center gap-3">
                          <FileText size={18} className="shrink-0 text-gray-400" />
                          {row.fileName}
                        </span>
                      </td>
                      <td className="px-5 py-4 whitespace-nowrap text-gray-500">{row.date}</td>
                      <td className="px-5 py-4 whitespace-nowrap text-gray-500">{row.type}</td>
                      <td className={`px-5 py-4 whitespace-nowrap font-medium ${row.statusClass}`}>
                        <span className="inline-flex items-center gap-1">
                          <RowIcon size={16} /> {row.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
