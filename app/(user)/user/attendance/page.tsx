import { CalendarDays } from 'lucide-react';
import { AttendanceList } from '@/features/member/components/AttendanceList';

export default function AttendancePage() {
    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-3 mb-6">
                <CalendarDays className="text-gym-accent" size={28} />
                <h1 className="text-2xl font-heading font-bold text-white uppercase italic">
                    Mis <span className="text-gym-accent">Asistencias</span>
                </h1>
            </div>

            {/* Resumen */}
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                    <span className="text-2xl font-bold text-white block">14</span>
                    <span className="text-[10px] uppercase text-gym-muted">Este Mes</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                    <span className="text-2xl font-bold text-green-500 block">98%</span>
                    <span className="text-[10px] uppercase text-gym-muted">Puntualidad</span>
                </div>
            </div>

            <AttendanceList />
        </div>
    );
}