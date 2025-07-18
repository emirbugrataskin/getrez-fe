import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import { useTranslation } from '../../hooks/useTranslation';

export default function BusinessDashboard() {
  const t = useTranslation();
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{t.businessDashboardTitle ?? "İşletme Paneli"}</title>
      </Head>
      <Header />
      <main className="max-w-2xl mx-auto p-6">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">{t.profileInfoTitle ?? "Profil Bilgileri"}</h2>
          <div className="bg-white p-4 rounded shadow">
            <div>{t.businessNameLabel ?? "İşletme Adı"}: <span className="font-bold">Kuaför Demo</span></div>
            <div>{t.emailPlaceholder ?? "E-posta"}: demo@kuafor.com</div>
            <div>{t.phonePlaceholder ?? "Telefon"}: 0555 555 55 55</div>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">{t.myServicesTitle ?? "Hizmetlerim"}</h2>
          <ul className="bg-white p-4 rounded shadow">
            <li>{t.serviceHaircut ?? "Saç Kesimi"} - 250₺</li>
            <li>{t.serviceManicure ?? "Manikür"} - 200₺</li>
            <li>{t.serviceSkinCare ?? "Cilt Bakımı"} - 350₺</li>
            <li>{t.servicePedicure ?? "Pedikür"} - 350₺</li>
          </ul>
          <button className="btn-primary mt-2">{t.addServiceButton ?? "Yeni Hizmet Ekle"}</button>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">{t.calendarSettingsTitle ?? "Takvim Ayarları"}</h2>
          <div className="bg-white p-4 rounded shadow">
            <div>{t.workingDaysLabel ?? "Çalışma Günleri"}: {t.workingDaysValue ?? "Pazartesi - Cumartesi"}</div>
            <div>{t.workingHoursLabel ?? "Çalışma Saatleri"}: {t.workingHoursValue ?? "09:00 - 19:00"}</div>
          </div>
          <button className="btn-secondary mt-2">{t.editCalendarButton ?? "Takvim Düzenle"}</button>
        </section>
      </main>
    </div>
  );
}
