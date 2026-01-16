import { ArrowUpRight, ArrowDownLeft, FileText, Download } from 'lucide-react';

const TRANSACTIONS = [
    { id: 1, type: "income", concept: "Membresía PRO - Juan Perez", date: "Hoy, 10:42 AM", amount: 170.00, method: "Yape" },
    { id: 2, type: "income", concept: "Venta Bebida Rehidratante", date: "Hoy, 09:15 AM", amount: 5.00, method: "Efectivo" },
    { id: 3, type: "expense", concept: "Pago Servicio Luz", date: "Ayer, 04:30 PM", amount: -450.50, method: "Transferencia" },
    { id: 4, type: "income", concept: "Membresía FREE - Ana Torres", date: "Ayer, 11:20 AM", amount: 70.00, method: "Tarjeta" },
    { id: 5, type: "expense", concept: "Compra Insumos Limpieza", date: "14 Ene, 08:00 AM", amount: -120.00, method: "Efectivo" },
];

export function TransactionsTable() {
    return (
        <div className="w-full overflow-hidden rounded-xl border border-gym-border bg-gym-card shadow-2xl">
            <div className="p-4 border-b border-gym-border flex justify-between items-center bg-white/5">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Últimos Movimientos</h3>
                <button className="text-xs flex items-center gap-2 text-gym-muted hover:text-gym-accent transition-colors">
                    <Download size={14} /> Exportar CSV
                </button>
            </div>

            <table className="w-full text-left text-sm">
                <thead className="bg-black/20 text-xs font-bold text-gym-muted border-b border-gym-border uppercase">
                    <tr>
                        <th className="px-6 py-4">Tipo</th>
                        <th className="px-6 py-4">Concepto</th>
                        <th className="px-6 py-4">Fecha</th>
                        <th className="px-6 py-4">Método</th>
                        <th className="px-6 py-4 text-right">Monto</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gym-border/50">
                    {TRANSACTIONS.map((tx) => (
                        <tr key={tx.id} className="hover:bg-white/[0.02] transition-colors">
                            <td className="px-6 py-4">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${tx.type === 'income' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'
                                    }`}>
                                    {tx.type === 'income' ? <ArrowUpRight size={16} /> : <ArrowDownLeft size={16} />}
                                </div>
                            </td>
                            <td className="px-6 py-4 font-medium text-white">
                                {tx.concept}
                            </td>
                            <td className="px-6 py-4 text-gym-muted text-xs">
                                {tx.date}
                            </td>
                            <td className="px-6 py-4">
                                <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gym-text">
                                    {tx.method}
                                </span>
                            </td>
                            <td className={`px-6 py-4 text-right font-mono font-bold text-base ${tx.type === 'income' ? 'text-emerald-400' : 'text-red-400'
                                }`}>
                                {tx.type === 'income' ? '+' : ''} S/. {Math.abs(tx.amount).toFixed(2)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}