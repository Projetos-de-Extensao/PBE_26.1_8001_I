import { CheckCircle } from "lucide-react";

const requirements = [
  "Matrícula acadêmica regular",
  "Dados do aluno e empresa preenchidos",
  "Assinaturas do aluno e empresa",
  "Seguro contra acidentes (Apólice)",
  "Carga horária máxima de 30h semanais",
];

export function RequirementsCard() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm h-full">
      <h3 className="text-base font-semibold text-[#041e3a] mb-4">
        Requisitos do TCE
      </h3>
      <p className="text-xs text-gray-500 mb-4 leading-relaxed">
        Para que sua aplicação seja aceita, todos os itens abaixo devem estar presentes no documento enviado.
      </p>
      <ul className="space-y-3">
        {requirements.map((req) => (
          <li key={req} className="flex items-start gap-3">
            <CheckCircle
              size={16}
              className="text-green-600 mt-0.5 shrink-0"
            />
            <span className="text-sm text-gray-700 leading-relaxed">{req}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
