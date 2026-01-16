import { Gift, Star, Zap, Lock } from 'lucide-react';

export function RewardsView() {
    return (
        <div className="space-y-8">

            {/* Tarjeta de Saldo */}
            <div className="relative overflow-hidden bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-2xl p-6 shadow-2xl border border-yellow-500/30">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                    <Star size={100} className="text-white" />
                </div>
                <p className="text-yellow-100 text-xs uppercase font-bold tracking-widest mb-1">VitalPoints Balance</p>
                <h2 className="text-5xl font-heading font-bold text-white">1,250</h2>
                <p className="text-xs text-white/80 mt-2">Nivel: <span className="font-bold text-white">ORO 🥇</span></p>

                <div className="mt-4 w-full bg-black/30 h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-[70%]"></div>
                </div>
                <p className="text-[10px] text-white/60 mt-1 text-right">250 pts para Platino</p>
            </div>

            {/* Cómo ganar puntos (Misiones) */}
            <div>
                <h3 className="text-sm font-bold text-white uppercase mb-4 flex items-center gap-2">
                    <Zap size={18} className="text-gym-accent" /> Misiones Activas
                </h3>
                <div className="space-y-3">
                    <MissionItem title="Asistencia Perfecta (Semana)" points="+100" progress="3/5 días" done={false} />
                    <MissionItem title="Trae un invitado" points="+500" progress="0/1" done={false} />
                    <MissionItem title="Renovación Anticipada" points="+300" progress="Completado" done={true} />
                </div>
            </div>

            {/* Catálogo de Canje */}
            <div>
                <h3 className="text-sm font-bold text-white uppercase mb-4 flex items-center gap-2">
                    <Gift size={18} className="text-purple-500" /> Canjear Premios
                </h3>
                <div className="grid grid-cols-2 gap-3">
                    <RewardCard title="Batido Proteico" cost="500" image="🥤" />
                    <RewardCard title="Toalla VitalCore" cost="1200" image="🧣" canAfford />
                    <RewardCard title="1 Semana Free" cost="5000" image="🎟️" locked />
                    <RewardCard title="Descuento 20%" cost="3000" image="🏷️" locked />
                </div>
            </div>

        </div>
    );
}

function MissionItem({ title, points, progress, done }: any) {
    return (
        <div className={`p-3 rounded-xl border flex items-center justify-between ${done ? 'bg-green-500/10 border-green-500/30' : 'bg-gym-card border-gym-border'}`}>
            <div>
                <p className={`text-sm font-bold ${done ? 'text-green-500' : 'text-white'}`}>{title}</p>
                <p className="text-[10px] text-gym-muted">{progress}</p>
            </div>
            <span className={`text-xs font-bold px-2 py-1 rounded ${done ? 'bg-green-500 text-black' : 'bg-gym-accent/10 text-gym-accent'}`}>
                {points}
            </span>
        </div>
    )
}

function RewardCard({ title, cost, image, locked, canAfford }: any) {
    return (
        <div className={`relative p-4 rounded-xl border flex flex-col items-center text-center gap-2 ${locked ? 'bg-white/5 border-white/5 opacity-50 grayscale' : 'bg-gym-card border-gym-border'}`}>
            <div className="text-3xl mb-1">{image}</div>
            <p className="text-xs font-bold text-white leading-tight">{title}</p>
            <p className="text-[10px] text-gym-accent font-bold">{cost} pts</p>

            {locked && <Lock size={12} className="absolute top-2 right-2 text-white/50" />}
            {canAfford && <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>}

            <button disabled={locked} className={`w-full mt-2 py-1 rounded text-[10px] font-bold uppercase ${canAfford ? 'bg-gym-accent text-black' : 'bg-white/10 text-white'}`}>
                {locked ? 'Bloqueado' : 'Canjear'}
            </button>
        </div>
    )
}