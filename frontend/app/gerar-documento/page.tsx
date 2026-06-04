"use client";

import { useState, useEffect } from "react";

// Tipagens baseadas no seu novo backend
interface CampoDinamico {
  id: string;
  label: string;
  tipo: string;
}

interface ModeloDocumento {
  id: number;
  titulo: string;
  campos_dinamicos: CampoDinamico[];
}

export default function GerarDocumentoPage() {
  const [modelos, setModelos] = useState<ModeloDocumento[]>([]);
  const [modeloSelecionado, setModeloSelecionado] = useState<ModeloDocumento | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState("");

  // ID fixo de uma solicitação de teste (ajuste conforme seu banco de dados)
  const SOLICITACAO_TESTE_ID = 1; 

  // 1. Busca os modelos disponíveis ao carregar a página
  useEffect(() => {
    // Ajuste a URL para a porta correta da sua API Django (ex: 8000)
    fetch("http://10.183.96.57:8000/api/modelos-documento/")
      .then((res) => res.json())
      .then((data) => setModelos(data))
      .catch((err) => console.error("Erro ao buscar modelos:", err));
  }, []);

  // Atualiza o formulário sempre que o usuário digita algo
  const handleInputChange = (id: string, valor: string) => {
    setFormData((prev) => ({ ...prev, [id]: valor }));
  };

  // Função genérica para enviar os dados pro Django (Preview ou Confirmação)
  const enviarParaAPI = async (isPreview: boolean) => {
    if (!modeloSelecionado) return;
    setLoading(true);
    setMensagem("");

    try {
      const response = await fetch("http://localhost:8000/api/documentos/gerar/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Se estiver usando autenticação via token, adicione aqui:
          // "Authorization": `Bearer ${token}` 
        },
        body: JSON.stringify({
          modelo_id: modeloSelecionado.id,
          solicitacao_id: SOLICITACAO_TESTE_ID,
          dados: formData,
          preview: isPreview,
        }),
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.erro || "Erro na requisição");

      if (isPreview) {
        // FLUXO DE PREVIEW: Transforma o Base64 em arquivo e baixa para o aluno conferir
        const linkSource = `data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,${result.documento_base64}`;
        const downloadLink = document.createElement("a");
        downloadLink.href = linkSource;
        downloadLink.download = `preview_${modeloSelecionado.titulo.replace(/\s+/g, '_')}.docx`;
        downloadLink.click();
        setMensagem("Preview baixado! Verifique o arquivo e clique em 'Confirmar e Assinar' se estiver tudo certo.");
      } else {
        // FLUXO FINAL: Documento salvo no banco de dados
        setMensagem(`✅ Sucesso! Documento gerado e salvo com o ID: ${result.documento_id}`);
        setFormData({}); // Limpa o formulário
      }
    } catch (error: any) {
      setMensagem(`❌ Erro: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white text-slate-800 rounded shadow mt-10">
      <h1 className="text-2xl font-bold mb-6">Preenchimento de Documento</h1>

      {/* Seleção do Modelo */}
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-2">Selecione o Documento:</label>
        <select
          className="w-full p-2 border border-gray-300 rounded"
          onChange={(e) => {
            const modelo = modelos.find((m) => m.id === Number(e.target.value));
            setModeloSelecionado(modelo || null);
            setFormData({}); // Limpa o form ao trocar de modelo
            setMensagem("");
          }}
          defaultValue=""
        >
          <option value="" disabled>-- Selecione um modelo --</option>
          {modelos.map((m) => (
            <option key={m.id} value={m.id}>{m.titulo}</option>
          ))}
        </select>
      </div>

      {/* Renderização Dinâmica do Formulário */}
      {modeloSelecionado && (
        <div className="bg-slate-50 p-6 rounded border border-slate-200">
          <h2 className="text-lg font-semibold mb-4">Formulário: {modeloSelecionado.titulo}</h2>
          
          <div className="space-y-4">
            {modeloSelecionado.campos_dinamicos?.map((campo) => (
              <div key={campo.id}>
                <label className="block text-sm font-medium mb-1">{campo.label}</label>
                <input
                  type={campo.tipo || "text"}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                  value={formData[campo.id] || ""}
                  onChange={(e) => handleInputChange(campo.id, e.target.value)}
                  required
                />
              </div>
            ))}
          </div>

          {/* Botões de Ação */}
          <div className="mt-8 flex gap-4">
            <button
              onClick={() => enviarParaAPI(true)}
              disabled={loading}
              className="flex-1 bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
            >
              {loading ? "Processando..." : "1. Gerar Preview"}
            </button>
            <button
              onClick={() => enviarParaAPI(false)}
              disabled={loading}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
            >
              {loading ? "Processando..." : "2. Confirmar e Assinar"}
            </button>
          </div>
        </div>
      )}

      {/* Mensagem de Feedback */}
      {mensagem && (
        <div className={`mt-6 p-4 rounded font-medium ${mensagem.includes("❌") ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
          {mensagem}
        </div>
      )}
    </div>
  );
}