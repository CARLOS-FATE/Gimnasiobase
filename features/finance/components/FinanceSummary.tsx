import { Wallet, TrendingUp, TrendingDown } from 'lucide-react';

export function FinanceSummary() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Ingresos */}
            <div className="p-6 rounded-xl bg-gym-card border border-gym-border relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-emerald-500">
                    <TrendingUp size={60} />
                </div>
                <p className="text-gym-muted text-xs uppercase font-bold">Ingresos (Mes)</p>
                <h3 className="text-3xl font-heading font-bold text-white mt-1">S/. 24,500</h3>
                <p className="text-xs text-emerald-400 mt-2 font-bold">+12% vs mes anterior</p>
            </div>

            {/* Gastos */}
            <div className="p-6 rounded-xl bg-gym-card border border-gym-border relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-red-500">
                    <TrendingDown size={60} />
                </div>
                <p className="text-gym-muted text-xs uppercase font-bold">Gastos Operativos</p>
                <h3 className="text-3xl font-heading font-bold text-white mt-1">S/. 8,240</h3>
                <p className="text-xs text-red-400 mt-2 font-bold">+5% por mantenimiento</p>
            </div>

            {/* Balance Neto */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-gym-primary/20 to-gym-accent/10 border border-gym-accent/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-20 text-gym-accent">
                    <Wallet size={60} />
                </div>
                <p className="text-gym-accent text-xs uppercase font-bold">Utilidad Neta</p>
                <h3 className="text-4xl font-heading font-bold text-white mt-1">S/. 16,260</h3>
                <div className="w-full bg-black/30 h-1 mt-4 rounded-full overflow-hidden">
                    <div className="h-full bg-gym-accent w-[70%]"></div>
                </div>
                <p className="text-[10px] text-gym-muted mt-1 text-right">Meta mensual: 70%</p>
            </div>
        </div>
    );
}