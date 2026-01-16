import { Plus } from 'lucide-react';
import { PlansTable } from '@/features/subscriptions/components/PlansTable';

export default function SubscriptionsPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-l-4 border-gym-accent pl-6 py-2">
                <div>
                    <h1 className="text-4xl font-heading font-bold uppercase text-white tracking-tighter italic">
                        Planes de <span className="text-transparent bg-clip-text bg-gradient-to-r from-gym-primary to-gym-accent">Suscripción</span>
                    </h1>
                    <p className="text-gym-muted mt-1 text-lg">
                        Administra los precios y accesos del gimnasio.
                    </p>
                </div>

                {/* Botón Gradiente Neón */}
                <button className="group relative px-8 py-3 font-bold text-black uppercase tracking-wider overflow-hidden rounded bg-gradient-to-r from-gym-primary to-gym-accent hover:to-orange-400 transition-all shadow-[0_0_20px_rgba(255,153,0,0.3)] hover:shadow-[0_0_30px_rgba(255,153,0,0.6)] active:scale-95">
                    <span className="relative flex items-center gap-2 z-10">
                        <Plus size={20} strokeWidth={3} />
                        Crear Nuevo Plan
                    </span>
                </button>
            </div>

            {/* Tabla importada */}
            <PlansTable />
        </div>
    );
}