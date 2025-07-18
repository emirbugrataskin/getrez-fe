import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const t = useTranslation();

  return (
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
  );
}
