import { Settings } from 'lucide-react';
import { GeneralSettings } from '@/features/settings/components/GeneralSettings';
import { SecuritySettings } from '@/features/settings/components/SecuritySettings';

export default function SettingsPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-700">

            {/* Header */}
            <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 text-white rounded-lg border border-white/20">
                    <Settings size={32} />
                </div>
                <div>
                    <h1 className="text-4xl font-heading font-bold uppercase text-white tracking-tighter italic">
                        Configuración <span className="text-gym-muted">Global</span>
                    </h1>
                    <p className="text-gym-muted mt-1 text-lg">
                        Preferencias del sistema, notificaciones y seguridad.
                    </p>
                </div>
            </div>

            {/* Grid de Configuración */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Columna Izquierda: General */}
                <GeneralSettings />

                {/* Columna Derecha: Seguridad */}
                <SecuritySettings />
            </div>

            {/* Footer de Versión */}
            <div className="text-center text-gym-muted text-xs pt-8 border-t border-gym-border/30">
                <p>VitalCore System v1.0.4 (Build 2026.01.16)</p>
                <p className="mt-1 opacity-50">Desarrollado con Next.js 14 & Python FastAPI</p>
            </div>

        </div>
    );
}