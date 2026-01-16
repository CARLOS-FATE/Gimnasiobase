import { Users, CreditCard, Activity, TrendingUp } from 'lucide-react';

const STATS = [
    {
        label: "Miembros Activos",
        value: "1,240",
        icon: Users,
        trend: "+12%",
        color: "text-blue-400",
        gradient: "from-blue-500/20 to-blue-600/5"
    },
    {
        label: "Ingresos del Mes",
        value: "S/. 24,500",
        icon: CreditCard,
        trend: "+8.5%",
        color: "text-gym-accent", // Naranja
        gradient: "from-orange-500/20 to-amber-600/5"
    },
    {
        label: "Asistencia Hoy",
        value: "145",
        icon: Activity,
        trend: "-2%",
        color: "text-emerald-400",
        gradient: "from-emerald-500/20 to-green-600/5"
    },
    {
        label: "Nuevas Inscripciones",
        value: "48",
        icon: TrendingUp,
        trend: "+24%",
        color: "text-purple-400",
        gradient: "from-purple-500/20 to-violet-600/5"
    },
];

export function StatsGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, index) => (
                <div
                    key={index}
                    className={`relative overflow-hidden rounded-xl border border-gym-border bg-gym-card p-6 transition-all hover:border-gym-accent/50 hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] group`}
                >
                    {/* Fondo con degradado sutil */}
                    <div className={`absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br ${stat.gradient} blur-2xl transition-all group-hover:scale-150 opacity-60`}></div>

                    <div className="relative z-10 flex justify-between items-start">
                        <div>
                            <p className="text-gym-muted text-xs uppercase tracking-wider font-bold">{stat.label}</p>
                            <h3 className="text-3xl font-heading font-bold text-white mt-1">{stat.value}</h3>
                        </div>
                        <div className={`p-2 rounded-lg bg-white/5 ${stat.color}`}>
                            <stat.icon size={24} />
                        </div>
                    </div>

                    <div className="mt-4 flex items-center gap-2">
                        <span className={`text-xs font-bold ${stat.trend.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                            {stat.trend}
                        </span>
                        <span className="text-gym-muted text-xs">vs mes anterior</span>
                    </div>
                </div>
            ))}
        </div>
    );
}