"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchWithAuth, getStoredAuth, logout, postFormData } from "@/lib/api";
import { SolicitacaoEstagio } from "@/types/estagios";
import { StoredAuth } from "@/types/auth";

const documentRoutes = {
  contrato: "/contratos/",
  relatorio: "/relatorios/",
  apolice: "/apolices/",
};

type DocumentType = keyof typeof documentRoutes;

export default function AlunoDashboardPage() {
  const router = useRouter();
  const [auth, setAuth] = useState<StoredAuth | null>(null);
  const [solicitacoes, setSolicitacoes] = useState<SolicitacaoEstagio[]>([]);
  const [selectedSolicitacao, setSelectedSolicitacao] = useState<number | null>(
    null,
  );
  const [documentType, setDocumentType] = useState<DocumentType>("relatorio");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    const stored = getStoredAuth();
    if (!stored?.accessToken || stored.role !== "aluno") {
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
      const filtered = data.filter((item) => item.aluno === stored.profileId);
      setSolicitacoes(filtered);
      if (filtered.length > 0) {
        setSelectedSolicitacao(filtered[0].id);
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  async function handleUpload(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccessMessage(null);

    if (!auth || !selectedSolicitacao || !file) {
      setError("Escolha uma solicitação e selecione um arquivo.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("solicitacao", String(selectedSolicitacao));
      formData.append("arquivo", file);

      await postFormData(
        documentRoutes[documentType],
        formData,
        auth.accessToken,
      );
      setSuccessMessage(
        "Documento enviado com sucesso. Atualize a lista se necessário.",
      );
      setFile(null);
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
              Painel do Aluno
            </h1>
            <p className="text-sm text-gray-500">
              Envie documentos e consulte seu histórico de solicitações.
            </p>
          </div>
          <button
            className="inline-flex items-center justify-center rounded-full bg-[#ffb600] px-5 py-2 text-sm font-semibold text-[#041e3a] transition hover:bg-[#e5a400]"
            onClick={handleLogout}
          >
            Sair
          </button>
        </div>

        <section className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-[#041e3a]">
              Enviar documento
            </h2>
            <form onSubmit={handleUpload} className="space-y-5">
              <label className="block text-sm font-medium text-slate-800">
                Tipo de documento
              </label>
              <select
                value={documentType}
                onChange={(e) =>
                  setDocumentType(e.target.value as DocumentType)
                }
                className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm shadow-sm outline-none transition focus:border-[#041e3a]"
              >
                <option value="relatorio">Relatório</option>
                <option value="contrato">Contrato</option>
                <option value="apolice">Apólice</option>
              </select>

              <label className="block text-sm font-medium text-slate-800">
                Solicitação
              </label>
              <select
                value={selectedSolicitacao ?? ""}
                onChange={(e) => setSelectedSolicitacao(Number(e.target.value))}
                className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm shadow-sm outline-none transition focus:border-[#041e3a]"
              >
                {solicitacoes.length === 0 ? (
                  <option value="">Nenhuma solicitação disponível</option>
                ) : (
                  solicitacoes.map((item) => (
                    <option key={item.id} value={item.id}>
                      Solicitação #{item.id} • {item.status}
                    </option>
                  ))
                )}
              </select>

              <label className="block text-sm font-medium text-slate-800">
                Arquivo (PDF, DOCX)
              </label>
              <input
                type="file"
                accept=".pdf,.docx"
                onChange={(event) => setFile(event.target.files?.[0] ?? null)}
                className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm shadow-sm outline-none"
              />

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-[#041e3a] px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-60"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Enviar documento"}
              </button>

              {error && <p className="text-sm text-red-600">{error}</p>}
              {successMessage && (
                <p className="text-sm text-green-700">{successMessage}</p>
              )}
            </form>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="text-xl font-semibold text-[#041e3a]">
                Histórico de solicitações
              </h2>
            </div>

            {loading && <p className="text-sm text-gray-500">Carregando...</p>}
            {!loading && solicitacoes.length === 0 && (
              <p className="text-sm text-gray-500">
                Nenhuma solicitação encontrada para o seu perfil.
              </p>
            )}

            {solicitacoes.length > 0 && (
              <div className="space-y-4">
                {solicitacoes.map((item) => (
                  <article
                    key={item.id}
                    className="rounded-3xl border border-gray-100 bg-gray-50 p-4"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          Solicitação #{item.id}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Enviado em{" "}
                          {new Date(item.data).toLocaleDateString("pt-BR")}
                        </p>
                      </div>
                      <span className="rounded-full bg-[#e2f1ff] px-3 py-1 text-xs font-semibold text-[#0f4e8c]">
                        {item.status}
                      </span>
                    </div>
                    {item.motivo_retificacao && (
                      <p className="mt-3 text-sm text-orange-700">
                        Motivo de retificação: {item.motivo_retificacao}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
