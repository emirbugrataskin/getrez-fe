


import Head from 'next/head';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';


export default function Home() {
  const { language, setLanguage } = useLanguage();
  const t = useTranslation();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 flex flex-col">
      <Head>
        <title>{t.appName} - Modern Randevu Sistemi</title>
      </Head>
      <header className="w-full py-6 px-8 flex justify-between items-center bg-white/80 shadow-md">
        <div className="flex items-center gap-2">
          <img src="https://img.icons8.com/fluency/48/calendar.png" alt="GetRez Logo" className="h-10 w-10" />
          <span className="text-2xl font-extrabold text-blue-700 tracking-tight">{t.appName}</span>
        </div>
        <nav className="flex gap-6 items-center">
          <Link href="/business/login" className="btn-primary text-lg font-semibold">{t.btnBusinessLogin}</Link>
          <select
            value={language}
            onChange={e => setLanguage(e.target.value as 'tr' | 'en')}
            className="border rounded px-2 py-1 text-lg bg-white shadow focus:outline-none"
            aria-label="Dil seçimi"
          >
            <option value="tr">Türkçe</option>
            <option value="en">English</option>
          </select>
        </nav>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <section className="flex flex-col gap-8">
            <h1 className="text-5xl font-extrabold text-blue-800 mb-2 leading-tight text-left">{t.slogan}</h1>
            <p className="text-xl text-gray-700 mb-4 text-left">{t.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col items-center bg-white/80 px-6 py-6 rounded-xl shadow text-blue-700 font-semibold">
                <img src="https://img.icons8.com/fluency/48/appointment-reminders.png" alt="icon" className="mb-2"/>
                <span className="text-lg">{t.featureFast}</span>
              </div>
              <div className="flex flex-col items-center bg-white/80 px-6 py-6 rounded-xl shadow text-green-700 font-semibold">
                <img src="https://img.icons8.com/fluency/48/checked--v1.png" alt="icon" className="mb-2"/>
                <span className="text-lg">{t.featureEasy}</span>
              </div>
              <div className="flex flex-col items-center bg-white/80 px-6 py-6 rounded-xl shadow text-purple-700 font-semibold">
                <img src="https://img.icons8.com/fluency/48/phone.png" alt="icon" className="mb-2"/>
                <span className="text-lg">{t.featureMobile}</span>
              </div>
            </div>
            <div className="flex justify-center w-full">
              <Link href="/appointment" className="btn-accent text-xl font-bold py-4 px-10 rounded-full shadow-lg hover:scale-105 transition">{t.btnAppointment}</Link>
            </div>
          </section>
          <section className="flex flex-col items-center gap-6">
            <div className="w-full flex justify-center">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80" alt="Kuaför Demo" className="rounded-2xl shadow-lg w-[400px] h-[400px] object-cover" />
            </div>
            <div className="flex gap-4">
              <div className="bg-white/80 rounded-xl shadow px-4 py-2 flex items-center gap-2">
                <img src="https://img.icons8.com/fluency/24/user-group-man-man.png" alt="icon" />
                <span className="text-gray-700 font-medium">{t.statCustomers}</span>
              </div>
              <div className="bg-white/80 rounded-xl shadow px-4 py-2 flex items-center gap-2">
                <img src="https://img.icons8.com/fluency/24/barbershop.png" alt="icon" />
                <span className="text-gray-700 font-medium">{t.statBusinesses}</span>
              </div>
            </div>
            <span className="text-gray-500 text-sm">{t.demoImage}</span>
          </section>
        </div>
      </main>
      <footer className="w-full py-6 px-8 bg-white/80 flex flex-col md:flex-row justify-between items-center gap-4 shadow-inner">
        <span className="text-gray-500">{t.footer}</span>
        <div className="flex gap-4">
          <a href="https://instagram.com" target="_blank" rel="noopener" className="hover:scale-110 transition"><img src="https://img.icons8.com/fluency/32/instagram-new.png" alt="Instagram" /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener" className="hover:scale-110 transition"><img src="https://img.icons8.com/fluency/32/twitter.png" alt="Twitter" /></a>
        </div>
      </footer>
    </div>
  );
}
