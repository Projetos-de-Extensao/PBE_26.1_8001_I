export interface Aluno {
  id: number;
  user: number;
  matricula: string;
  nome: string;
  email: string;
}

export interface Professor {
  id: number;
  user: number;
  nome: string;
  email: string;
}

export interface Coordenador {
  id: number;
  user: number;
  nome: string;
  email: string;
}

export interface SolicitacaoEstagio {
  id: number;
  aluno: number;
  data: string;
  status: string;
  motivo_retificacao: string | null;
  avaliador: number | null;
}

export interface Relatorio {
  id: number;
  solicitacao: number;
  dataEnvio: string;
  scoreConformidade: number;
  status: string;
  conceitoFinal: string | null;
}

export interface Contrato {
  id: number;
  solicitacao: number;
  dataEnvio: string;
  scoreConformidade: number;
  status: string;
}

export interface Apolice {
  id: number;
  solicitacao: number;
  dataEnvio: string;
  scoreConformidade: number;
  status: string;
}
