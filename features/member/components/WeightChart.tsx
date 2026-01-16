export function WeightChart() {
    const data = [78, 77.5, 77, 76.2, 75.8, 75.5];
    const max = Math.max(...data) + 2;
    const min = Math.min(...data) - 2;

    return (
        <div className="bg-gym-card border border-gym-border rounded-xl p-6">
            <h3 className="text-sm font-bold text-white uppercase mb-6 flex justify-between">
                Peso Corporal (kg)
                <span className="text-gym-accent">-2.5kg 📉</span>
            </h3>

            <div className="h-40 flex items-end justify-between gap-2">
                {data.map((weight, i) => {
                    const heightPercent = ((weight - min) / (max - min)) * 100;
                    return (
                        <div key={i} className="flex flex-col items-center gap-2 flex-1 group">
                            <span className="text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity absolute -mt-6 bg-gym-accent px-1 rounded text-black font-bold">
                                {weight}
                            </span>
                            <div
                                className="w-full bg-gym-primary/20 hover:bg-gym-accent rounded-t-sm transition-all duration-500 relative"
                                style={{ height: `${heightPercent}%`, minHeight: '10%' }}
                            ></div>
                            <span className="text-[10px] text-gym-muted">S{i + 1}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}