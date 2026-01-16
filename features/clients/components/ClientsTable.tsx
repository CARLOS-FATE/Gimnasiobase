import { MoreHorizontal, Search, Filter, User } from 'lucide-react';

const MOCK_CLIENTS = [
    { id: 1, name: "Carlos Ramirez", email: "carlos@gmail.com", plan: "PRO - 3 Meses", status: "Activo", expire: "15 Ene 2026" },
    { id: 2, name: "Maria Lopez", email: "maria.gym@hotmail.com", plan: "Mensual", status: "Activo", expire: "20 Feb 2026" },
    { id: 3, name: "Juan Perez", email: "juan.perez@yahoo.com", plan: "Diario", status: "Vencido", expire: "10 Ene 2026" },
    { id: 4, name: "Ana Torres", email: "ana.t@gmail.com", plan: "Anual", status: "Pendiente", expire: "---" },
    { id: 5, name: "Luis Gomez", email: "luis.g@outlook.com", plan: "PRO - 3 Meses", status: "Activo", expire: "05 Mar 2026" },
];

export function ClientsTable() {
    return (
        <div className="space-y-4">
            {/* Barra de Herramientas (Buscador y Filtros) */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-gym-card p-4 rounded-xl border border-gym-border">
                <div className="relative w-full sm:w-96 group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gym-muted group-focus-within:text-gym-accent transition-colors" size={20} />
                    <input
                        type="text"
                        placeholder="Buscar por nombre o DNI..."
                        className="w-full bg-black/40 border border-gym-border rounded-lg pl-10 pr-4 py-2 text-white placeholder:text-gym-muted focus:outline-none focus:border-gym-accent focus:ring-1 focus:ring-gym-accent transition-all"
                    />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg border border-gym-border transition-colors">
                    <Filter size={18} />
                    <span>Filtros</span>
                </button>
            </div>

            {/* Tabla */}
            <div className="w-full overflow-hidden rounded-xl border border-gym-border bg-gym-card shadow-2xl">
                <table className="w-full text-left text-sm">
                    <thead className="bg-white/5 uppercase tracking-wider text-xs font-bold text-gym-muted border-b border-gym-border">
                        <tr>
                            <th className="px-6 py-4">Cliente</th>
                            <th className="px-6 py-4">Plan Actual</th>
                            <th className="px-6 py-4">Vencimiento</th>
                            <th className="px-6 py-4">Estado</th>
                            <th className="px-6 py-4 text-right">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gym-border">
                        {MOCK_CLIENTS.map((client) => (
                            <tr key={client.id} className="hover:bg-white/[0.02] transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gym-border flex items-center justify-center text-white overflow-hidden border border-transparent group-hover:border-gym-accent transition-colors">
                                            {/* Aquí iría la foto real, por ahora un icono */}
                                            <User size={20} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-white text-base">{client.name}</p>
                                            <p className="text-xs text-gym-muted">{client.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-white font-medium">{client.plan}</td>
                                <td className="px-6 py-4 text-gym-muted font-mono">{client.expire}</td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${client.status === 'Activo' ? 'bg-green-500/10 text-green-500 border-green-500/20' :
                                            client.status === 'Vencido' ? 'bg-red-500/10 text-red-500 border-red-500/20' :
                                                'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                                        }`}>
                                        {client.status.toUpperCase()}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-gym-muted hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
                                        <MoreHorizontal size={20} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}