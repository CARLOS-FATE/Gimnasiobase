import { Server, Camera, ShieldCheck, Wifi, RefreshCw } from 'lucide-react';

const DEVICES = [
    { id: 1, name: "Servidor Principal (Python)", ip: "192.168.1.150", status: "Online", icon: Server },
    { id: 2, name: "Cámara Acceso 01", ip: "192.168.1.201", status: "Online", icon: Camera },
    { id: 3, name: "Torno Biométrico", ip: "192.168.1.205", status: "Offline", icon: ShieldCheck },
];

export function HardwareStatus() {
    return (
        <div className="rounded-xl border border-gym-border bg-gym-card p-6 h-full flex flex-col">
            <div className="mb-6 flex justify-between items-center border-b border-gym-border pb-4">
                <div>
                    <h3 className="text-xl font-heading font-bold text-white italic tracking-wide">
                        Estado del Sistema
                    </h3>
                    <p className="text-sm text-gym-muted">Hardware conectado a GymFace.</p>
                </div>
                <button className="p-2 bg-gym-accent/10 text-gym-accent rounded-full hover:bg-gym-accent hover:text-black transition-colors">
                    <RefreshCw size={18} />
                </button>
            </div>

            <div className="space-y-4 flex-1">
                {DEVICES.map((device) => (
                    <div key={device.id} className="flex items-center justify-between p-4 rounded-lg bg-black/20 border border-gym-border group hover:border-gym-muted transition-colors">
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${device.status === 'Online' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                                <device.icon size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">{device.name}</h4>
                                <div className="flex items-center gap-2 text-xs text-gym-muted font-mono mt-1">
                                    <Wifi size={12} />
                                    {device.ip}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-end gap-1">
                            <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider border ${device.status === 'Online'
                                    ? 'border-green-500/30 text-green-500 bg-green-500/5 shadow-[0_0_10px_rgba(34,197,94,0.1)]'
                                    : 'border-red-500/30 text-red-500 bg-red-500/5 shadow-[0_0_10px_rgba(239,68,68,0.1)]'
                                }`}>
                                {device.status}
                            </span>
                            <span className="text-[10px] text-gym-muted">Ping: {device.status === 'Online' ? '24ms' : '--'}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Alerta Visual */}
            <div className="mt-6 p-4 rounded bg-yellow-500/10 border border-yellow-500/20 flex gap-3">
                <div className="text-yellow-500 mt-1">⚠️</div>
                <div>
                    <p className="text-sm font-bold text-yellow-500">Advertencia de Hardware</p>
                    <p className="text-xs text-gym-muted mt-1">El torno biométrico no responde. Revise la conexión LAN.</p>
                </div>
            </div>
        </div>
    );
}