import { CheckCircle, MapPin, Clock } from 'lucide-react';

const HISTORY = [
    { id: 1, date: "Hoy, 16 Ene", time: "07:30 AM", location: "Sede Principal", status: "Puntual" },
    { id: 2, date: "Lun, 14 Ene", time: "06:15 PM", location: "Sede Principal", status: "Puntual" },
    { id: 3, date: "Sab, 12 Ene", time: "09:00 AM", location: "Sede Principal", status: "Tardanza" }, // Ejemplo
    { id: 4, date: "Jue, 10 Ene", time: "07:45 AM", location: "Sede Norte", status: "Puntual" },
];

export function AttendanceList() {
    return (
        <div className="space-y-4">
            {HISTORY.map((item) => (
                <div key={item.id} className="bg-gym-card border border-gym-border p-4 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-full ${item.status === 'Puntual' ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'}`}>
                            <CheckCircle size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-sm">{item.date}</h4>
                            <div className="flex items-center gap-3 text-xs text-gym-muted mt-1">
                                <span className="flex items-center gap-1"><Clock size={12} /> {item.time}</span>
                                <span className="flex items-center gap-1"><MapPin size={12} /> {item.location}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}