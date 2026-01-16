import { Settings } from 'lucide-react';
import { GymProfile } from '@/features/gym/components/GymProfile';
import { HardwareStatus } from '@/features/gym/components/HardwareStatus';

export default function GymPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Header */}
            <div className="flex items-center gap-4">
                <div className="p-3 bg-gym-accent rounded-lg text-black">
                    <Settings size={32} />
                </div>
                <div>
                    <h1 className="text-4xl font-heading font-bold uppercase text-white tracking-tighter italic">
                        Configuración <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gym-muted">General</span>
                    </h1>
                    <p className="text-gym-muted mt-1 text-lg">
                        Gestiona la identidad del local y monitorea los dispositivos IoT.
                    </p>
                </div>
            </div>

            {/* Grid de Contenido */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Columna Izquierda: Datos */}
                <GymProfile />

                {/* Columna Derecha: Hardware */}
                <HardwareStatus />
            </div>
        </div>
    );
}