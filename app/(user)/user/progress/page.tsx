import { WeightChart } from '@/features/member/components/WeightChart';
import { Ruler } from 'lucide-react';

export default function UserProgress() {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <h1 className="text-2xl font-heading font-bold uppercase text-white italic">
                Mi <span className="text-gym-accent">Evolución</span>
            </h1>

            <WeightChart />

            {/* Grid de Medidas */}
            <div className="grid grid-cols-2 gap-4">
                <MeasureCard label="Bíceps" value="38 cm" change="+0.5" />
                <MeasureCard label="Cintura" value="82 cm" change="-1.2" isGood={true} />
                <MeasureCard label="Pecho" value="105 cm" change="+2.0" />
                <MeasureCard label="Pierna" value="60 cm" change="+1.5" />
            </div>
        </div>
    );
}

function MeasureCard({ label, value, change, isGood }: any) {
    const color = isGood || parseFloat(change) > 0 ? 'text-green-500' : 'text-gym-muted';
    return (
        <div className="bg-gym-card border border-gym-border p-4 rounded-xl">
            <p className="text-gym-muted text-xs uppercase">{label}</p>
            <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-white font-heading">{value}</span>
                <span className={`text-xs font-bold ${color} mb-1`}>{change}</span>
            </div>
        </div>
    )
}