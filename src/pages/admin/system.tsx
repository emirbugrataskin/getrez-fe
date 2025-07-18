import Head from 'next/head';
import Header from '../../components/Header';
import { useTranslation } from '../../hooks/useTranslation';

export default function AdminSystem() {
  const t = useTranslation();
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{t.systemAuditTitle ?? "Admin - Sistem Denetimi"}</title>
      </Head>
      <Header />
      <main className="max-w-xl mx-auto p-6">
        <h2 className="text-xl font-bold mb-4">{t.systemAuditTitle ?? "Sistem Denetimi"}</h2>
        <div className="bg-white p-4 rounded shadow mb-4">
          <div>{t.totalAppointmentsLabel ?? "Toplam Randevu"}: 42</div>
          <div>{t.totalBusinessesLabel ?? "Toplam İşletme"}: 7</div>
        </div>
        <button className="btn-secondary">{t.updateSystemButton ?? "Sistemi Güncelle"}</button>
      </main>
    </div>
  );
}
