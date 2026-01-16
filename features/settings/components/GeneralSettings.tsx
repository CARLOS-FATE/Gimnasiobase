import { Bell, Moon, Volume2, Globe } from 'lucide-react';

export function GeneralSettings() {
    return (
        <div className="rounded-xl border border-gym-border bg-gym-card p-6">
            <h3 className="text-xl font-heading font-bold text-white mb-6 flex items-center gap-2">
                <SettingsIcon size={24} className="text-gym-accent" /> Preferencias Generales
            </h3>

            <div className="space-y-6">
                {/* Notificaciones */}
                <div className="flex items-center justify-between p-4 rounded-lg bg-black/20 border border-gym-border">
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-blue-500/10 text-blue-500 rounded-lg">
                            <Bell size={20} />
                        </div>
                        <div>
                            <p className="font-bold text-white text-sm">Notificaciones por Correo</p>
                            <p className="text-xs text-gym-muted">Recibir resumen diario de caja.</p>
                        </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gym-accent"></div>
                    </label>
                </div>

                {/* Sonidos */}
                <div className="flex items-center justify-between p-4 rounded-lg bg-black/20 border border-gym-border">
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-purple-500/10 text-purple-500 rounded-lg">
                            <Volume2 size={20} />
                        </div>
                        <div>
                            <p className="font-bold text-white text-sm">Alertas Sonoras</p>
                            <p className="text-xs text-gym-muted">Sonido al detectar acceso denegado.</p>
                        </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gym-accent"></div>
                    </label>
                </div>

                {/* Idioma (Simulado) */}
                <div className="flex items-center justify-between p-4 rounded-lg bg-black/20 border border-gym-border">
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-emerald-500/10 text-emerald-500 rounded-lg">
                            <Globe size={20} />
                        </div>
                        <div>
                            <p className="font-bold text-white text-sm">Idioma del Sistema</p>
                            <p className="text-xs text-gym-muted">Lenguaje de la interfaz.</p>
                        </div>
                    </div>
                    <select className="bg-black text-white text-sm border border-gym-border rounded px-2 py-1 focus:outline-none focus:border-gym-accent">
                        <option>Español (PE)</option>
                        <option>English (US)</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

function SettingsIcon({ className, size }: any) {
    // Icono placeholder simple para el título
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>
    )
}