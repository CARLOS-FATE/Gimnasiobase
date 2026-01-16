import { Save, MapPin, Phone, Mail, Building } from 'lucide-react';

export function GymProfile() {
    return (
        <div className="rounded-xl border border-gym-border bg-gym-card p-6 h-full">
            <div className="mb-6 border-b border-gym-border pb-4">
                <h3 className="text-xl font-heading font-bold text-white italic tracking-wide">
                    Perfil del Gimnasio
                </h3>
                <p className="text-sm text-gym-muted">Información visible para los clientes.</p>
            </div>

            <form className="space-y-5">
                {/* Nombre */}
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-gym-muted flex items-center gap-2">
                        <Building size={14} /> Nombre Comercial
                    </label>
                    <input
                        type="text"
                        defaultValue="VITALCORE FITNESS CENTER"
                        className="w-full bg-black/40 border border-gym-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gym-accent focus:ring-1 focus:ring-gym-accent transition-all font-bold tracking-wide"
                    />
                </div>

                {/* Dirección */}
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-gym-muted flex items-center gap-2">
                        <MapPin size={14} /> Dirección
                    </label>
                    <input
                        type="text"
                        defaultValue="Av. Larco 123, Trujillo"
                        className="w-full bg-black/40 border border-gym-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gym-accent transition-all"
                    />
                </div>

                {/* Contacto (Grid de 2) */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-gym-muted flex items-center gap-2">
                            <Phone size={14} /> Teléfono
                        </label>
                        <input
                            type="text"
                            defaultValue="+51 987 654 321"
                            className="w-full bg-black/40 border border-gym-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gym-accent transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-gym-muted flex items-center gap-2">
                            <Mail size={14} /> Correo
                        </label>
                        <input
                            type="email"
                            defaultValue="admin@vitalcore.pe"
                            className="w-full bg-black/40 border border-gym-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gym-accent transition-all"
                        />
                    </div>
                </div>

                {/* Botón Guardar */}
                <div className="pt-4">
                    <button type="button" className="w-full py-3 bg-white/5 hover:bg-gym-accent hover:text-black text-white font-bold uppercase tracking-wider rounded-lg border border-gym-border hover:border-gym-accent transition-all flex items-center justify-center gap-2 group">
                        <Save size={18} className="group-hover:scale-110 transition-transform" />
                        Guardar Cambios
                    </button>
                </div>
            </form>
        </div>
    );
}