import { UserCog } from 'lucide-react';
import { StaffGrid } from '@/features/staff/components/StaffGrid';

export default function StaffPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500/10 text-purple-500 rounded-lg border border-purple-500/20">
                    <UserCog size={32} />
                </div>
                <div>
                    <h1 className="text-4xl font-heading font-bold uppercase text-white tracking-tighter italic">
                        Equipo & <span className="text-purple-500">Staff</span>
                    </h1>
                    <p className="text-gym-muted mt-1 text-lg">
                        Gestión de entrenadores, administrativos y permisos.
                    </p>
                </div>
            </div>
            <StaffGrid />
        </div>
    );
}