
import Clock from './clock'
import FullDate from '@/app/fullDate'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="justify-center text-6xl mb-4">Horário de Brasília</h1>
      <Clock />
      <FullDate  dateTime={new Date()} />
    </main>
  );
}
