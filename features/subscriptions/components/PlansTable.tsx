import { MoreHorizontal, CheckCircle2 } from 'lucide-react';

const MOCK_DATA = [
    { id: 1, name: "Rutina - GUIADA", days: 1, price: 10.00, status: "Activo" },
    { id: 2, name: "Rutina - SIN GUÍA", days: 1, price: 7.00, status: "Activo" },
    { id: 3, name: "MEMBRESÍA FREE - 1 MES", days: 30, price: 70.00, status: "Activo" },
    { id: 4, name: "MEMBRESÍA PRO - 3 MESES", days: 90, price: 170.00, status: "Activo" },
];

export function PlansTable() {
    return (
        <div className="w-full overflow-hidden rounded-xl border border-gym-border bg-gym-card shadow-2xl shadow-black relative">
            {/* Efecto de brillo sutil arriba */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gym-border to-transparent opacity-50"></div>

            <table className="w-full text-left text-sm">
                <thead className="bg-white/5 uppercase tracking-wider text-xs font-bold text-gym-muted border-b border-gym-border">
                    <tr>
                        <th className="px-6 py-4">Nombre del Plan</th>
                        <th className="px-6 py-4">Duración</th>
                        <th className="px-6 py-4">Precio</th>
                        <th className="px-6 py-4">Estado</th>
                        <th className="px-6 py-4 text-right">Acciones</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gym-border">
                    {MOCK_DATA.map((plan) => (
                        <tr key={plan.id} className="hover:bg-white/[0.02] transition-colors group">
                            <td className="px-6 py-4 font-bold text-white text-base font-heading tracking-wide flex items-center gap-3">
                                <div className="w-1 h-8 bg-gym-accent opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
                                {plan.name}
                            </td>
                            <td className="px-6 py-4 text-gym-muted">{plan.days} días</td>
                            <td className="px-6 py-4 font-mono text-gym-accent text-lg drop-shadow-[0_0_5px_rgba(255,153,0,0.5)]">
                                S/. {plan.price.toFixed(2)}
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 size={14} className="text-gym-accent" />
                                    <span className="text-xs font-bold text-gym-accent uppercase tracking-wider">
                                        {plan.status}
                                    </span>
                                </div>
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
    );
}