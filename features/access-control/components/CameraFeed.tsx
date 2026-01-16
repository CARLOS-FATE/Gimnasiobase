import { Maximize2, Video } from 'lucide-react';

export function CameraFeed() {
    return (
        <div className="relative rounded-xl border border-gym-border bg-black overflow-hidden aspect-video group shadow-2xl">
            {/* Overlay de UI Cámara */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded animate-pulse">REC</span>
                <span className="text-white text-xs font-mono drop-shadow-md">CAM-01: LOBBY PRINCIPAL</span>
            </div>

            <div className="absolute top-4 right-4 z-10">
                <Maximize2 className="text-white/50 hover:text-white cursor-pointer" size={20} />
            </div>

            {/* Mira de enfoque (Decoración) */}
            <div className="absolute inset-0 border-2 border-white/10 m-8 rounded-lg pointer-events-none">
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gym-accent"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gym-accent"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gym-accent"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gym-accent"></div>
            </div>

            {/* Placeholder de Video (Fondo Gris Animado) */}
            <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                <div className="text-zinc-700 flex flex-col items-center gap-2">
                    <Video size={48} />
                    <p className="text-xs font-mono uppercase tracking-widest">Esperando señal de video...</p>
                </div>
            </div>
        </div>
    );
}