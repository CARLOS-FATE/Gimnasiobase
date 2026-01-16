import { StatsGrid } from '@/features/dashboard/components/StatsGrid';
import { RecentCheckins } from '@/features/dashboard/components/RecentCheckins';
import { Dumbbell } from 'lucide-react';

export default function DashboardPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-4xl font-heading font-bold uppercase text-white tracking-tighter italic">
                    Panel de <span className="text-gym-accent">Control</span>
                </h1>
                <p className="text-gym-muted mt-1">Resumen general de VitalCore Gym.</p>
            </div>

            {/* 1. Tarjetas de Estadísticas */}
            <StatsGrid />

            {/* 2. Sección Inferior (Dividida en 2 columnas) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[400px]">

                {/* Columna Izquierda: Gráfico Simulado (Placeholder visual) */}
                <div className="lg:col-span-2 rounded-xl border border-gym-border bg-gym-card p-6 flex flex-col items-center justify-center text-gym-muted relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-t from-gym-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Dumbbell size={48} className="mb-4 text-gym-border group-hover:text-gym-accent transition-colors duration-500" />
                    <p className="uppercase tracking-widest font-bold text-sm">Estadísticas de Asistencia (Próximamente)</p>
                </div>

                {/* Columna Derecha: Accesos Recientes */}
                <div className="lg:col-span-1">
                    <RecentCheckins />
                </div>
            </div>
        </div>
    );
}