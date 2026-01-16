import { ScanFace } from 'lucide-react';
import { AccessLogTable } from '@/features/access-control/components/AccessLogTable';
import { CameraFeed } from '@/features/access-control/components/CameraFeed';

export default function AccessControlPage() {
    return (
        <div className="space-y-6 animate-in fade-in duration-700 h-[calc(100vh-8rem)] flex flex-col">
            <div className="flex items-center gap-4 shrink-0">
                <div className="p-3 bg-blue-500/10 text-blue-500 rounded-lg border border-blue-500/20">
                    <ScanFace size={32} />
                </div>
                <div>
                    <h1 className="text-4xl font-heading font-bold uppercase text-white tracking-tighter italic">
                        Centro de <span className="text-blue-500">Seguridad</span>
                    </h1>
                    <p className="text-gym-muted mt-1 text-lg">
                        Monitoreo de cámaras y tornos biométricos.
                    </p>
                </div>
            </div>

            {/* Layout de Seguridad: Grid Asimétrico */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">

                {/* Columna Izquierda: Cámaras (Ocupa 2 espacios) */}
                <div className="lg:col-span-2 space-y-6 overflow-y-auto pr-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <CameraFeed />
                        <CameraFeed /> {/* Simulamos 2 cámaras */}
                    </div>

                    {/* Panel de Estado Rápido */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-gym-card border border-gym-border p-4 rounded-xl text-center">
                            <p className="text-gym-muted text-[10px] uppercase">Personas Dentro</p>
                            <p className="text-2xl font-bold text-white font-heading">42</p>
                        </div>
                        <div className="bg-gym-card border border-gym-border p-4 rounded-xl text-center">
                            <p className="text-gym-muted text-[10px] uppercase">Intentos Fallidos</p>
                            <p className="text-2xl font-bold text-red-500 font-heading">3</p>
                        </div>
                        <div className="bg-gym-card border border-gym-border p-4 rounded-xl text-center">
                            <p className="text-gym-muted text-[10px] uppercase">Puertas</p>
                            <p className="text-2xl font-bold text-green-500 font-heading">CERRADAS</p>
                        </div>
                    </div>
                </div>

                {/* Columna Derecha: Logs (Ocupa 1 espacio) */}
                <div className="h-full">
                    <AccessLogTable />
                </div>
            </div>
        </div>
    );
}