import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import { useTranslation } from '../../hooks/useTranslation';

export default function AdminDashboard() {
  const t = useTranslation();
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{t.adminDashboardTitle ?? "Admin Paneli"}</title>
      </Head>
      <Header />
      <main className="max-w-2xl mx-auto p-6">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">{t.adminUsersTitle ?? "Kullanıcılar"}</h2>
          <ul className="bg-white p-4 rounded shadow">
            <li>{t.businessLabel ?? "İşletme"}: Kuaför Demo - demo@kuafor.com</li>
            <li>{t.businessLabel ?? "İşletme"}: Güzellik Merkezi - info@guzellik.com</li>
          </ul>
          <button className="btn-secondary mt-2">{t.editUserButton ?? "Kullanıcı Ekle/Düzenle"}</button>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">{t.systemAuditTitle ?? "Sistem Denetimi"}</h2>
          <div className="bg-white p-4 rounded shadow">
            <div>{t.totalAppointmentsLabel ?? "Toplam Randevu"}: 42</div>
            <div>{t.totalBusinessesLabel ?? "Toplam İşletme"}: 7</div>
          </div>
        </section>
      </main>
    </div>
  );
}
