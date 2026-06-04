import { CheckCircle } from "lucide-react";

const steps = [
  { label: "Pendente", status: "done" },
  { label: "Em Análise", status: "active" },
  { label: "Assinado pelo Ibmec", status: "pending" },
];

export function ApplicationTimeline() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
      <h3 className="text-base font-semibold text-[#041e3a] mb-5">
        Status da Aplicação (TCE)
      </h3>

      <div className="relative flex items-start gap-0">
        {steps.map((step, i) => (
          <div key={step.label} className="flex-1 flex flex-col items-center relative">
            {/* Linha conectora esquerda */}
            {i > 0 && (
              <div
                className={`absolute top-4 right-1/2 left-0 h-0.5 -translate-y-1/2 ${
                  step.status === "pending" ? "bg-gray-200" : "bg-[#041e3a]"
                }`}
              />
            )}

            {/* Círculo do passo */}
            <div
              className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full border-2 transition-colors ${
                step.status === "done"
                  ? "bg-[#041e3a] border-[#041e3a]"
                  : step.status === "active"
                  ? "bg-amber-400 border-amber-400"
                  : "bg-white border-gray-300"
              }`}
            >
              {step.status === "done" ? (
                <CheckCircle size={16} className="text-white" />
              ) : step.status === "active" ? (
                <span className="w-2.5 h-2.5 rounded-full bg-white" />
              ) : (
                <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
              )}
            </div>

            {/* Label e badge */}
            <div className="mt-2 text-center px-1">
              <p
                className={`text-xs font-medium leading-tight ${
                  step.status === "done"
                    ? "text-[#041e3a]"
                    : step.status === "active"
                    ? "text-amber-600"
                    : "text-gray-400"
                }`}
              >
                {step.label}
              </p>
              {step.status === "active" && (
                <span className="inline-block mt-1 text-[10px] font-semibold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
                  Atual
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
