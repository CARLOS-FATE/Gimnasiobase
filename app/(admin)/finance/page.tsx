import { DollarSign } from 'lucide-react';
import { TransactionsTable } from '@/features/finance/components/TransactionsTable';
import { FinanceSummary } from '@/features/finance/components/FinanceSummary';

export default function FinancePage() {
    return (
        <div className="space-y-6 animate-in fade-in duration-700">
            {/* Header */}
            <div className="flex items-center gap-4 mb-2">
                <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-lg border border-emerald-500/20">
                    <DollarSign size={32} />
                </div>
                <div>
                    <h1 className="text-4xl font-heading font-bold uppercase text-white tracking-tighter italic">
                        Finanzas y <span className="text-emerald-500">Caja</span>
                    </h1>
                    <p className="text-gym-muted mt-1 text-lg">
                        Control de ingresos, egresos y flujo de efectivo.
                    </p>
                </div>
            </div>

            {/* Resumen de Tarjetas */}
            <FinanceSummary />

            {/* Tabla de Movimientos */}
            <TransactionsTable />
        </div>
    );
}