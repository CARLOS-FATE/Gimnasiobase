import { UserPlus } from 'lucide-react';
import { ClientsTable } from '@/features/clients/components/ClientsTable';

export default function ClientsPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-4xl font-heading font-bold uppercase text-white tracking-tighter italic">
                        Gestión de <span className="text-gym-accent">Clientes</span>
                    </h1>
                    <p className="text-gym-muted mt-1 text-lg">
                        Administra los miembros del gimnasio y sus accesos.
                    </p>
                </div>

                {/* Botón de Acción */}
                <button className="group px-6 py-3 font-bold text-black uppercase tracking-wider rounded bg-gym-accent hover:bg-white transition-all shadow-[0_0_20px_rgba(255,153,0,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] active:scale-95 flex items-center gap-2">
                    <UserPlus size={20} strokeWidth={2.5} />
                    Nuevo Cliente
                </button>
            </div>

            {/* Tabla de Clientes */}
            <ClientsTable />
        </div>
    );
}