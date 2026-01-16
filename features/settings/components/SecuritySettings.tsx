import { Lock, Shield, Key } from 'lucide-react';

export function SecuritySettings() {
    return (
        <div className="rounded-xl border border-gym-border bg-gym-card p-6 h-full">
            <h3 className="text-xl font-heading font-bold text-white mb-6 flex items-center gap-2">
                <Shield size={24} className="text-gym-accent" /> Seguridad y Acceso
            </h3>

            <form className="space-y-5">

                {/* Cambio de Contraseña */}
                <div className="space-y-4 border-b border-gym-border pb-6">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Lock size={16} /> Cambiar Contraseña
                    </h4>

                    <div className="space-y-2">
                        <label className="text-xs text-gym-muted">Contraseña Actual</label>
                        <input
                            type="password"
                            className="w-full bg-black/40 border border-gym-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gym-accent transition-all"
                            placeholder="••••••••"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-xs text-gym-muted">Nueva Contraseña</label>
                            <input
                                type="password"
                                className="w-full bg-black/40 border border-gym-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gym-accent transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs text-gym-muted">Confirmar</label>
                            <input
                                type="password"
                                className="w-full bg-black/40 border border-gym-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gym-accent transition-all"
                            />
                        </div>
                    </div>

                    <button type="button" className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-xs font-bold uppercase rounded border border-gym-border transition-all">
                        Actualizar Clave
                    </button>
                </div>

                {/* 2FA */}
                <div className="pt-2">
                    <div className="flex items-start justify-between p-4 rounded-lg bg-gym-accent/5 border border-gym-accent/20">
                        <div className="flex gap-4">
                            <div className="mt-1 text-gym-accent">
                                <Key size={24} />
                            </div>
                            <div>
                                <p className="font-bold text-white text-sm">Autenticación de Dos Factores (2FA)</p>
                                <p className="text-xs text-gym-muted mt-1 max-w-xs">Añade una capa extra de seguridad requiriendo un código desde tu celular.</p>
                            </div>
                        </div>
                        <button type="button" className="px-3 py-1.5 bg-gym-accent text-black text-xs font-bold uppercase rounded hover:bg-white transition-colors">
                            Activar
                        </button>
                    </div>
                </div>

            </form>
        </div>
    );
}