"use client";

import React, { useState } from "react";
import { UploadCloud, FileText } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SubsequentUploads() {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave" || e.type === "drop") {
      setDragActive(false);
      if (e.type === "drop") {
        const file = e.dataTransfer.files?.[0];
        if (file && file.type === "application/pdf") {
          setSelectedFile(file);
        }
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setSelectedFile(file);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
      <h3 className="text-base font-semibold text-[#041e3a] mb-4">
        Envios de Acompanhamento
      </h3>

      <div className="space-y-4">
        {/* Select de tipo de documento */}
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1.5">
            Tipo de Documento
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecione o tipo..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relatorio">Relatório de Atividades</SelectItem>
              <SelectItem value="aditivo">Termo Aditivo</SelectItem>
              <SelectItem value="rescisao">Termo de Rescisão</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Zona de drag-and-drop */}
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1.5">
            Arquivo (somente PDF)
          </label>
          <div
            className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center transition-colors cursor-pointer ${
              dragActive
                ? "border-[#041e3a] bg-blue-50"
                : "border-gray-300 bg-gray-50 hover:border-gray-400"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrag}
          >
            {selectedFile ? (
              <>
                <FileText size={28} className="text-[#041e3a] mb-2" />
                <p className="text-sm font-medium text-gray-700 truncate max-w-full px-2">
                  {selectedFile.name}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {(selectedFile.size / 1024).toFixed(1)} KB
                </p>
              </>
            ) : (
              <>
                <UploadCloud size={28} className="text-gray-400 mb-2" />
                <p className="text-sm text-gray-600 font-medium">
                  Arraste o PDF aqui
                </p>
                <p className="text-xs text-gray-400 mt-1">ou clique para selecionar</p>
              </>
            )}
            <input
              type="file"
              accept=".pdf"
              className="hidden"
              id="subsequent-file"
              onChange={handleFileChange}
            />
          </div>
          <label
            htmlFor="subsequent-file"
            className="block text-center text-xs text-[#041e3a] underline mt-1.5 cursor-pointer hover:text-[#062d56]"
          >
            Selecionar arquivo
          </label>
        </div>

        {/* Botão de envio */}
        <button className="w-full bg-[#041e3a] hover:bg-[#062d56] text-white font-semibold py-2.5 px-4 rounded-lg transition-colors text-sm shadow-sm">
          Enviar Documento
        </button>
      </div>
    </div>
  );
}
