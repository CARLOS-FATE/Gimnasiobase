import { QrCode, Wifi } from 'lucide-react';

export function DigitalCard() {
    return (
        <div className="relative w-full aspect-[1.58/1] bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-gym-border overflow-hidden shadow-2xl p-6 flex flex-col justify-between group">

            {/* Fondo Decorativo */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gym-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            {/* Header Carnet */}
            <div className="flex justify-between items-start z-10">
                <div>
                    <h3 className="font-heading font-bold italic text-2xl text-white">VITAL<span className="text-gym-accent">CORE</span></h3>
                    <p className="text-[10px] text-gym-muted uppercase tracking-widest">Member Access Pass</p>
                </div>
                <Wifi size={20} className="text-gym-muted rotate-90" />
            </div>

            {/* Chip y Datos */}
            <div className="flex items-center gap-4 z-10 mt-2">
                <div className="w-10 h-8 rounded bg-gradient-to-br from-yellow-200 to-yellow-600 border border-yellow-400/50 shadow-inner"></div>
                <div className="text-gym-accent font-mono text-lg tracking-widest drop-shadow-[0_0_5px_rgba(255,153,0,0.5)]">
                    **** 8492
                </div>
            </div>

            {/* Footer Carnet */}
            <div className="flex justify-between items-end z-10 mt-auto">
                <div>
                    <p className="text-[10px] text-gym-muted uppercase">Titular</p>
                    <p className="font-bold text-white uppercase tracking-wide">Carlos Ramirez</p>
                </div>
                <div className="bg-white p-1 rounded">
                    <QrCode className="text-black" size={48} />
                </div>
            </div>

            {/* Scan Line Animation */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-gym-accent/10 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000"></div>
        </div>
    );
}
