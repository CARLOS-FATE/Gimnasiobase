import { UserCheck, AlertCircle } from 'lucide-react';

const RECENT_LOGS = [
    { id: 1, name: "Carlos Ramirez", time: "10:42 AM", plan: "PRO", status: "Permitido" },
    { id: 2, name: "Maria Lopez", time: "10:38 AM", plan: "FREE", status: "Permitido" },
    { id: 3, name: "Juan Perez", time: "10:15 AM", plan: "VENCIDO", status: "Denegado" },
    { id: 4, name: "Ana Torres", time: "09:55 AM", plan: "PRO", status: "Permitido" },
];

export function RecentCheckins() {
    return (
        <div className="rounded-xl border border-gym-border bg-gym-card p-6 h-full">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-heading font-bold text-white italic tracking-wide">
                    Accesos Recientes
                </h3>
                <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_red]"></span>
            </div>

            <div className="space-y-4">
                {RECENT_LOGS.map((log) => (
                    <div key={log.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors border-b border-gym-border/50 last:border-0">
                        <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-black ${log.status === 'Permitido' ? 'bg-gym-accent' : 'bg-red-500'}`}>
                                {log.name.charAt(0)}
                            </div>
                            <div>
                                <p className="font-bold text-white text-sm">{log.name}</p>
                                <p className="text-xs text-gym-muted flex items-center gap-1">
                                    {log.plan} • {log.time}
                                </p>
                            </div>
                        </div>

                        {log.status === 'Permitido' ? (
                            <UserCheck size={20} className="text-gym-accent" />
                        ) : (
                            <AlertCircle size={20} className="text-red-500" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}