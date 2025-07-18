import Head from 'next/head';
import Header from '../../components/Header';
import { useTranslation } from '../../hooks/useTranslation';

export default function AdminUsers() {
  const t = useTranslation();
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{t.adminUsersTitle ?? "Admin - Kullanıcılar"}</title>
      </Head>
      <Header />
      <main className="max-w-xl mx-auto p-6">
        <h2 className="text-xl font-bold mb-4">{t.adminUsersTitle ?? "Kullanıcılar"}</h2>
        <ul className="bg-white p-4 rounded shadow mb-4">
          <li>{t.businessNameLabel ?? "İşletme Adı"}: Kuaför Demo - demo@kuafor.com</li>
          <li>{t.businessNameLabel ?? "İşletme Adı"}: Güzellik Merkezi - info@guzellik.com</li>
        </ul>
        <form className="flex gap-2 mb-4">
          <input type="text" placeholder={t.businessNameLabel ?? "İşletme Adı"} className="input" />
          <input type="email" placeholder={t.emailPlaceholder ?? "E-posta"} className="input" />
          <button type="submit" className="btn-secondary">{t.addUserButton ?? "Ekle"}</button>
        </form>
        <button className="btn-primary">{t.saveUsersButton ?? "Kullanıcıları Kaydet"}</button>
      </main>
    </div>
  );
}
