export type UserRole = "aluno" | "professor" | "coordenador" | null;

export interface TokenResponse {
  access: string;
  refresh: string;
}

export interface JwtPayload {
  user_id: number;
  exp: number;
  token_type: string;
  jti?: string;
}

export interface StoredAuth {
  accessToken: string;
  refreshToken: string;
  role: UserRole;
  userId: number | null;
  profileId: number | null;
}
