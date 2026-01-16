import { Mail, Phone, Shield, MoreVertical } from 'lucide-react';

const TEAM = [
    { id: 1, name: "Roberto Gómez", role: "Head Coach", type: "Trainer", status: "Activo", phone: "999-888-777" },
    { id: 2, name: "Laura Silva", role: "Recepcionista", type: "Admin", status: "Activo", phone: "999-111-222" },
    { id: 3, name: "Miguel Ángel", role: "Entrenador PT", type: "Trainer", status: "Vacaciones", phone: "999-333-444" },
    { id: 4, name: "Admin Principal", role: "Gerente", type: "SuperAdmin", status: "Activo", phone: "---" },
    { id: 5, name: "Sofía Castro", role: "Limpieza", type: "Staff", status: "Inactivo", phone: "999-555-666" },
];

export function StaffGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((member) => (
                <div key={member.id} className="group relative overflow-hidden rounded-xl border border-gym-border bg-gym-card p-6 transition-all hover:border-gym-accent/50 hover:shadow-[0_0_20px_rgba(0,0,0,0.5)]">

                    {/* Badge de Rol */}
                    <div className="absolute top-4 right-4">
                        <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider border ${member.type === 'SuperAdmin' ? 'border-purple-500/30 text-purple-500 bg-purple-500/10' :
                                member.type === 'Trainer' ? 'border-gym-accent/30 text-gym-accent bg-gym-accent/10' :
                                    'border-blue-500/30 text-blue-500 bg-blue-500/10'
                            }`}>
                            {member.role}
                        </span>
                    </div>

                    {/* Avatar y Datos */}
                    <div className="flex flex-col items-center text-center mt-4">
                        <div className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mb-4 border-2 ${member.status === 'Activo' ? 'border-green-500 text-white bg-green-500/20' : 'border-gym-muted text-gym-muted bg-white/5'
                            }`}>
                            {member.name.charAt(0)}
                        </div>

                        <h3 className="text-xl font-heading font-bold text-white">{member.name}</h3>
                        <p className="text-sm text-gym-muted mt-1 flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${member.status === 'Activo' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                            {member.status}
                        </p>
                    </div>

                    {/* Contacto */}
                    <div className="mt-6 space-y-3 pt-6 border-t border-gym-border/50">
                        <div className="flex items-center gap-3 text-sm text-gym-muted">
                            <Phone size={16} /> {member.phone}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gym-muted">
                            <Mail size={16} /> {member.name.split(' ')[0].toLowerCase()}@vitalcore.pe
                        </div>
                    </div>

                    {/* Acciones */}
                    <button className="absolute top-4 left-4 text-gym-muted hover:text-white">
                        <MoreVertical size={18} />
                    </button>
                </div>
            ))}

            {/* Tarjeta de "Agregar Nuevo" */}
            <button className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gym-border bg-transparent p-6 hover:border-gym-accent hover:bg-gym-accent/5 transition-all group min-h-[250px]">
                <div className="w-16 h-16 rounded-full bg-gym-card flex items-center justify-center text-gym-muted group-hover:text-gym-accent group-hover:scale-110 transition-all mb-4">
                    <span className="text-4xl font-light">+</span>
                </div>
                <span className="text-gym-muted font-bold uppercase tracking-wider group-hover:text-white">Registrar Personal</span>
            </button>
        </div>
    );
}