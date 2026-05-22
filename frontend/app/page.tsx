"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { postToken, resolveUserRole, saveAuth, getStoredAuth } from '@/lib/api';
import { StoredAuth } from '@/types/auth';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const stored = getStoredAuth();
    if (stored?.accessToken && stored.role) {
      const redirectUrl = getRedirectUrl(stored);
      router.replace(redirectUrl);
    }
  }, [router]);

  function getRedirectUrl(auth: StoredAuth) {
    if (auth.role === 'aluno') {
      return '/aluno/dashboard';
    }
    if (auth.role === 'coordenador') {
      return '/coordenador/painel';
    }
    if (auth.role === 'professor') {
      return '/professor/turmas';
    }
    return '/';
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const tokenPayload = await postToken(username, password);
      const profile = await resolveUserRole(tokenPayload.access);

      if (!profile.role || profile.profileId === null) {
        throw new Error('Usuário sem perfil válido no backend.');
      }

      const auth: StoredAuth = {
        accessToken: tokenPayload.access,
        refreshToken: tokenPayload.refresh,
        role: profile.role,
        userId: profile.userId,
        profileId: profile.profileId,
      };

      saveAuth(auth);
      router.replace(getRedirectUrl(auth));
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4f5f6] px-4 py-10 text-slate-900">
      <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
        <div className="mb-8 text-center">
          <img src="/logo-Ibmec.svg" alt="Ibmec" className="mx-auto mb-4 h-12 w-auto object-contain" />
          <h1 className="text-3xl font-semibold text-[#041e3a]">Acesso ao Sistema</h1>
          <p className="mt-2 text-sm text-gray-500">Faça login com as credenciais do seu usuário.</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="mb-2 block text-sm font-medium text-slate-700">
              Usuário
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="w-full rounded-3xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#041e3a]"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
              Senha
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-3xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#041e3a]"
              required
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-3xl bg-[#041e3a] px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </main>
  );
}
