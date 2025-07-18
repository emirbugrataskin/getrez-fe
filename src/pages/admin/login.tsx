
import Head from 'next/head';
import Header from '../../components/Header';
import { useTranslation } from '../../hooks/useTranslation';

export default function AdminLogin() {
  const t = useTranslation();
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Head>
        <title>Admin Login | {t.appName}</title>
      </Head>
      <Header />
      <main className="flex-1 w-full max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md flex flex-col justify-center">
        <h2 className="text-xl font-bold mb-4">{t.adminLoginTitle ?? "Admin Login"}</h2>
        <form className="flex flex-col gap-4">
          <input type="email" placeholder={t.emailPlaceholder ?? "E-mail"} className="input" />
          <input type="password" placeholder={t.passwordPlaceholder ?? "Password"} className="input" />
          <button type="submit" className="btn-secondary">{t.loginButton ?? "Login"}</button>
        </form>
      </main>
    </div>
  );
}
