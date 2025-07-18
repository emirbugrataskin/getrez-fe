
import Head from 'next/head';
import Header from '../../components/Header';
import { useTranslation } from '../../hooks/useTranslation';

export default function BusinessLogin() {
  const t = useTranslation();
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Head>
        <title>{t.btnBusinessLogin} | {t.appName}</title>
      </Head>
      <Header />
      <main className="flex-1 w-full max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md flex flex-col justify-center">
        <h2 className="text-xl font-bold mb-4">{t.btnBusinessLogin}</h2>
        <form className="flex flex-col gap-4">
          <input type="email" placeholder={t.emailPlaceholder ?? "E-posta"} className="input" />
          <input type="password" placeholder={t.passwordPlaceholder ?? "Şifre"} className="input" />
          <button type="submit" className="btn-primary">{t.loginButton ?? "Giriş Yap"}</button>
        </form>
      </main>
    </div>
  );
}
