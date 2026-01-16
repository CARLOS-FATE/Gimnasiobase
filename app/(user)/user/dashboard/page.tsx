import Link from 'next/link'; // 👈 1. IMPORTANTE: Agregamos esto
import { DigitalCard } from '@/features/member/components/DigitalCard';
import { CalendarCheck, Flame, Trophy } from 'lucide-react';

export default function UserDashboard() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">

            {/* 1. Saludo */}
            <div>
                <h1 className="text-3xl font-heading font-bold uppercase italic text-white">
                    Hola, <span className="text-gym-accent">Carlos</span>
                </h1>
                <p className="text-gym-muted text-sm">Listo para romperla hoy? 🔥</p>
            </div>

            {/* 2. LAYOUT GRID INTELIGENTE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                {/* === COLUMNA IZQUIERDA (Carnet + Asistencia) === */}
                <div className="space-y-6">
                    <DigitalCard />

                    {/* Última Asistencia */}
                    <div className="bg-gym-card border border-gym-border rounded-xl p-4">
                        <h3 className="text-sm font-bold text-white uppercase mb-3">Último Ingreso</h3>
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-gym-muted">Hoy, 07:30 AM</span>
                            <span className="text-green-500 font-bold flex items-center gap-1">
                                ● Sede Principal
                            </span>
                        </div>
                    </div>
                </div>

                {/* === COLUMNA DERECHA (Estadísticas) === */}
                <div className="grid grid-cols-3 md:grid-cols-1 gap-3">

                    {/* Racha */}
                    <div className="bg-gym-card border border-gym-border p-4 rounded-xl flex flex-col md:flex-row md:justify-between items-center text-center md:text-left hover:border-gym-accent transition-colors group">
                        <div className="mb-2 md:mb-0 order-2 md:order-1">
                            <span className="text-[10px] text-gym-muted uppercase block">Racha Días</span>
                            <span className="text-2xl font-bold text-white font-heading">12</span>
                        </div>
                        <Flame className="text-orange-500 group-hover:scale-110 transition-transform mb-1 md:mb-0 order-1 md:order-2" size={28} />
                    </div>

                    {/* Vencimiento */}
                    <div className="bg-gym-card border border-gym-border p-4 rounded-xl flex flex-col md:flex-row md:justify-between items-center text-center md:text-left hover:border-gym-accent transition-colors group">
                        <div className="mb-2 md:mb-0 order-2 md:order-1">
                            <span className="text-[10px] text-gym-muted uppercase block">Vence Plan</span>
                            <span className="text-xl font-bold text-white font-heading">15 ENE</span>
                        </div>
                        <CalendarCheck className="text-blue-500 group-hover:scale-110 transition-transform mb-1 md:mb-0 order-1 md:order-2" size={28} />
                    </div>

                    {/* 👇 2. AQUÍ REEMPLAZAMOS EL RANKING POR EL LINK DE PUNTOS 👇 */}
                    <Link href="/user/rewards" className="bg-gym-card border border-gym-border p-4 rounded-xl flex flex-col md:flex-row md:justify-between items-center text-center md:text-left hover:border-yellow-500 transition-colors group cursor-pointer">
                        <div className="mb-2 md:mb-0 order-2 md:order-1">
                            <span className="text-[10px] text-gym-muted uppercase block group-hover:text-yellow-500 transition-colors">Ver Premios</span>
                            <span className="text-2xl font-bold text-white font-heading">1,250 pts</span>
                        </div>
                        <Trophy className="text-yellow-500 group-hover:scale-110 group-hover:rotate-12 transition-transform mb-1 md:mb-0 order-1 md:order-2" size={28} />
                    </Link>

                </div>

            </div>
        </div>
    );
}