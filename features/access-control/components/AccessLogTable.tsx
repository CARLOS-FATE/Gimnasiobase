import { AlertTriangle, CheckCircle, Clock } from 'lucide-react';

const ACCESS_LOGS = [
    { id: 101, user: "Carlos Ramirez", time: "10:42:15", cam: "CAM-01 (Principal)", status: "ALLOWED", confidence: "98.5%" },
    { id: 102, user: "Desconocido", time: "10:40:05", cam: "CAM-02 (Trasera)", status: "DENIED", confidence: "12.0%" },
    { id: 103, user: "Maria Lopez", time: "10:38:22", cam: "CAM-01 (Principal)", status: "ALLOWED", confidence: "99.1%" },
    { id: 104, user: "Juan Perez", time: "10:15:00", cam: "CAM-01 (Principal)", status: "DENIED_DEBT", confidence: "97.4%" },
];

export function AccessLogTable() {
    return (
        <div className="rounded-xl border border-gym-border bg-gym-card overflow-hidden h-full flex flex-col">
            <div className="p-4 border-b border-gym-border bg-white/5 flex justify-between items-center">
                <h3 className="font-bold text-white uppercase tracking-wider text-sm flex items-center gap-2">
                    <Clock size={16} className="text-gym-accent" /> Historial en Vivo
                </h3>
                <span className="text-[10px] bg-red-500/20 text-red-500 px-2 py-1 rounded animate-pulse">● LIVE</span>
            </div>

            <div className="overflow-y-auto flex-1 p-0">
                <table className="w-full text-left text-xs">
                    <tbody className="divide-y divide-gym-border/30">
                        {ACCESS_LOGS.map((log) => (
                            <tr key={log.id} className="hover:bg-white/5 transition-colors">
                                <td className="px-4 py-3 font-mono text-gym-muted">{log.time}</td>
                                <td className="px-4 py-3 font-bold text-white">{log.user}</td>
                                <td className="px-4 py-3 text-gym-muted hidden sm:table-cell">{log.cam}</td>
                                <td className="px-4 py-3 text-right">
                                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded border ${log.status === 'ALLOWED' ? 'bg-green-500/10 text-green-500 border-green-500/20' :
                                            'bg-red-500/10 text-red-500 border-red-500/20'
                                        }`}>
                                        {log.status === 'ALLOWED' ? <CheckCircle size={10} /> : <AlertTriangle size={10} />}
                                        {log.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}