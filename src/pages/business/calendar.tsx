import Head from 'next/head';
import Header from '../../components/Header';
import { useTranslation } from '../../hooks/useTranslation';

export default function BusinessCalendar() {
  const t = useTranslation();
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{t.calendarSettingsTitle ?? "Takvim Ayarları"}</title>
      </Head>
      <Header />
      <main className="max-w-xl mx-auto p-6">
        <h2 className="text-xl font-bold mb-4">{t.calendarSettingsTitle ?? "Takvim Ayarları"}</h2>
        <form className="flex flex-col gap-4">
          <div>
            <label className="block mb-1">{t.workingDaysLabel ?? "Çalışma Günleri"}</label>
            <select multiple className="input">
              <option>{t.monday ?? "Pazartesi"}</option>
              <option>{t.tuesday ?? "Salı"}</option>
              <option>{t.wednesday ?? "Çarşamba"}</option>
              <option>{t.thursday ?? "Perşembe"}</option>
              <option>{t.friday ?? "Cuma"}</option>
              <option>{t.saturday ?? "Cumartesi"}</option>
              <option>{t.sunday ?? "Pazar"}</option>
            </select>
          </div>
          <div>
            <label className="block mb-1">{t.startTimeLabel ?? "Başlangıç Saati"}</label>
            <input type="time" className="input" placeholder={t.startTimePlaceholder ?? "Başlangıç Saati"} />
          </div>
          <div>
            <label className="block mb-1">{t.endTimeLabel ?? "Bitiş Saati"}</label>
            <input type="time" className="input" placeholder={t.endTimePlaceholder ?? "Bitiş Saati"} />
          </div>
          <button type="submit" className="btn-primary">{t.saveCalendarButton ?? "Kaydet"}</button>
        </form>
      </main>
    </div>
  );
}
