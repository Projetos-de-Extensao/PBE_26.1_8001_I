"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchWithAuth, getStoredAuth, logout } from "@/lib/api";
import { SolicitacaoEstagio } from "@/types/estagios";
import { StoredAuth } from "@/types/auth";

export default function CoordenadorPainelPage() {
  const router = useRouter();
  const [auth, setAuth] = useState<StoredAuth | null>(null);
  const [solicitacoes, setSolicitacoes] = useState<SolicitacaoEstagio[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const stored = getStoredAuth();
    if (!stored?.accessToken || stored.role !== "coordenador") {
      router.replace("/");
      return;
    }

    setAuth(stored);
    loadSolicitacoes(stored);
  }, [router]);

  async function loadSolicitacoes(stored: StoredAuth) {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchWithAuth<SolicitacaoEstagio[]>(
        "/solicitacoes-estagio/",
        stored.accessToken,
      );
      const pending = data.filter(
        (item) =>
          item.status === "PENDENTE" ||
          item.status === "RETIFICACAO_SOLICITADA",
      );
      setSolicitacoes(pending);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  async function handleDecision(id: number, status: "APROVADO" | "REJEITADO") {
    if (!auth) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await fetchWithAuth(`/solicitacoes-estagio/${id}/`, auth.accessToken, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status, avaliador: auth.profileId }),
      });
      loadSolicitacoes(auth);
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
              Painel do Coordenador
            </h1>
            <p className="text-sm text-gray-500">
              Gerencie solicitações de estágio pendentes e aprove ou rejeite.
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
                Fila de análises
              </h2>
              <p className="text-sm text-gray-500">
                Solicitações aguardando decisão.
              </p>
            </div>
            <button
              className="rounded-2xl bg-[#041e3a] px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-900"
              onClick={() => auth && loadSolicitacoes(auth)}
            >
              Atualizar
            </button>
          </div>

          {loading && (
            <p className="text-sm text-gray-500">Carregando solicitações...</p>
          )}
          {error && <p className="text-sm text-red-600">{error}</p>}
          {!loading && solicitacoes.length === 0 && (
            <p className="text-sm text-gray-500">
              Nenhuma solicitação pendente no momento.
            </p>
          )}

          {solicitacoes.length > 0 && (
            <div className="grid gap-4">
              {solicitacoes.map((item) => (
                <article
                  key={item.id}
                  className="rounded-3xl border border-gray-100 bg-gray-50 p-5"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        Solicitação #{item.id}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Status atual: {item.status}
                      </p>
                      <p className="text-sm text-gray-500">
                        Aluno: {item.aluno}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 sm:flex-row">
                      <button
                        className="rounded-2xl bg-green-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-800"
                        onClick={() => handleDecision(item.id, "APROVADO")}
                        disabled={loading}
                      >
                        Aprovar
                      </button>
                      <button
                        className="rounded-2xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
                        onClick={() => handleDecision(item.id, "REJEITADO")}
                        disabled={loading}
                      >
                        Rejeitar
                      </button>
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
