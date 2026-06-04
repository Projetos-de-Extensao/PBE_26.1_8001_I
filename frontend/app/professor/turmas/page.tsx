"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchWithAuth, getStoredAuth, logout } from "@/lib/api";
import { Relatorio } from "@/types/estagios";
import { StoredAuth } from "@/types/auth";

export default function ProfessorTurmasPage() {
  const router = useRouter();
  const [auth, setAuth] = useState<StoredAuth | null>(null);
  const [relatorios, setRelatorios] = useState<Relatorio[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const stored = getStoredAuth();
    if (!stored?.accessToken || stored.role !== "professor") {
      router.replace("/");
      return;
    }

    setAuth(stored);
    loadRelatorios(stored);
  }, [router]);

  async function loadRelatorios(stored: StoredAuth) {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchWithAuth<Relatorio[]>(
        "/relatorios/",
        stored.accessToken,
      );
      const awaiting = data.filter(
        (item) => item.status === "EM_REVISAO" || item.status === "ENVIADO",
      );
      setRelatorios(awaiting);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  function handleLogout() {
    logout();
    router.replace("/");
  }

  return (
    <main className="min-h-screen bg-[#f4f5f6] px-4 py-8 text-slate-900">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="flex flex-col gap-4 rounded-3xl border border-gray-200 bg-white px-6 py-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-[#041e3a]">
              Turmas do Professor
            </h1>
            <p className="text-sm text-gray-500">
              Lista de relatórios aguardando sua avaliação.
            </p>
          </div>
          <button
            className="inline-flex items-center justify-center rounded-full bg-[#ffb600] px-5 py-2 text-sm font-semibold text-[#041e3a] transition hover:bg-[#e5a400]"
            onClick={handleLogout}
          >
            Sair
          </button>
        </div>

        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-[#041e3a]">
                Relatórios para avaliação
              </h2>
              <p className="text-sm text-gray-500">
                Acompanhe os documentos que precisam de revisão.
              </p>
            </div>
            <button
              className="rounded-2xl bg-[#041e3a] px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-900"
              onClick={() => auth && loadRelatorios(auth)}
            >
              Atualizar
            </button>
          </div>

          {loading && (
            <p className="text-sm text-gray-500">Carregando relatórios...</p>
          )}
          {error && <p className="text-sm text-red-600">{error}</p>}
          {!loading && relatorios.length === 0 && (
            <p className="text-sm text-gray-500">
              Nenhum relatório aguardando avaliação.
            </p>
          )}

          {relatorios.length > 0 && (
            <div className="space-y-4">
              {relatorios.map((item) => (
                <article
                  key={item.id}
                  className="rounded-3xl border border-gray-100 bg-gray-50 p-5"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        Relatório #{item.id}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Solicitação #{item.solicitacao}
                      </p>
                      <p className="text-sm text-gray-500">
                        Enviado em{" "}
                        {new Date(item.dataEnvio).toLocaleDateString("pt-BR")}
                      </p>
                    </div>
                    <div className="space-y-1 text-right">
                      <span className="inline-flex rounded-full bg-[#e2f1ff] px-3 py-1 text-xs font-semibold text-[#0f4e8c]">
                        {item.status}
                      </span>
                      {item.conceitoFinal && (
                        <p className="text-sm text-gray-500">
                          Conceito final: {item.conceitoFinal}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
