
import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import { useTranslation } from '../hooks/useTranslation';

export default function Appointment() {
  const t = useTranslation();
  const mockServices = [
    { id: 1, name: t.serviceHaircut ?? 'Saç Kesimi', price: 250 },
    { id: 2, name: t.serviceManicure ?? 'Manikür', price: 200 },
    { id: 3, name: t.serviceSkinCare ?? 'Cilt Bakımı', price: 350 },
    { id: 4, name: t.servicePedicure ?? 'Pedikür', price: 350 },
  ];
  const [service, setService] = useState<number | null>(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Head>
        <title>{t.btnAppointment} | {t.appName}</title>
      </Head>
      <Header />
      <main className="flex-1 w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md flex flex-col justify-center">
        <h2 className="text-xl font-bold mb-4">{t.btnAppointment}</h2>
        {success ? (
          <div className="text-green-600 font-semibold">{t.appointmentSuccess ?? "Randevunuz başarıyla oluşturuldu!"}</div>
        ) : (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <select value={service ?? ''} onChange={e => setService(Number(e.target.value))} className="input" required>
              <option value="" disabled>{t.selectService ?? "Hizmet Seçiniz"}</option>
              {mockServices.map(s => (
                <option key={s.id} value={s.id}>{s.name} - {s.price}₺</option>
              ))}
            </select>
            <input type="date" value={date} onChange={e => setDate(e.target.value)} className="input" required placeholder={t.datePlaceholder ?? "Tarih"} />
            <input type="time" value={time} onChange={e => setTime(e.target.value)} className="input" required placeholder={t.timePlaceholder ?? "Saat"} />
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder={t.namePlaceholder ?? "Ad Soyad"} className="input" required />
            <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder={t.phonePlaceholder ?? "Telefon"} className="input" required />
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder={t.emailPlaceholder ?? "E-posta"} className="input" required />
            <button type="submit" className="btn-accent">{t.createAppointmentButton ?? "Randevu Oluştur"}</button>
          </form>
        )}
      </main>
    </div>
  );
}
