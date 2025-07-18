import Head from 'next/head';
import Header from '../../components/Header';
import { useTranslation } from '../../hooks/useTranslation';

export default function BusinessServices() {
  const t = useTranslation();
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{t.myServicesTitle ?? "Hizmetlerim"}</title>
      </Head>
      <Header />
      <main className="max-w-xl mx-auto p-6">
        <h2 className="text-xl font-bold mb-4">{t.myServicesTitle ?? "Hizmetlerim"}</h2>
        <ul className="bg-white p-4 rounded shadow mb-4">
          <li>{t.serviceHaircut ?? "Saç Kesimi"} - 250₺</li>
          <li>{t.serviceManicure ?? "Manikür"} - 200₺</li>
          <li>{t.serviceSkinCare ?? "Cilt Bakımı"} - 350₺</li>
          <li>{t.servicePedicure ?? "Pedikür"} - 350₺</li>

        </ul>
        <form className="flex gap-2 mb-4">
          <input type="text" placeholder={t.serviceNamePlaceholder ?? "Hizmet Adı"} className="input" />
          <input type="number" placeholder={t.pricePlaceholder ?? "Fiyat"} className="input" />
          <button type="submit" className="btn-primary">{t.addServiceButton ?? "Ekle"}</button>
        </form>
        <button className="btn-secondary">{t.saveServicesButton ?? "Hizmetleri Kaydet"}</button>
      </main>
    </div>
  );
}
