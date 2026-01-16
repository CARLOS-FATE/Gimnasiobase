import { User, Mail, Phone, CreditCard, Clock, ChevronRight, LogOut, Shield, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export default function UserProfile() {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">

            {/* 1. Cabecera del Perfil */}
            <div className="flex items-center gap-4 pt-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-gym-primary to-gym-accent p-[2px]">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center border-4 border-black">
                        <span className="text-3xl font-heading font-bold text-white">C</span>
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl font-heading font-bold text-white italic">Carlos Ramirez</h1>
                    <p className="text-gym-muted text-sm">Miembro desde 2024</p>
                    <span className="inline-block mt-1 px-2 py-0.5 rounded bg-gym-accent/20 text-gym-accent text-[10px] font-bold uppercase tracking-wider border border-gym-accent/30">
                        Plan PRO
                    </span>
                </div>
            </div>

            {/* 2. Datos Personales (Solo Lectura) */}
            <div className="bg-gym-card border border-gym-border rounded-xl p-4 space-y-4">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Mis Datos</h3>

                <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/5 rounded-lg text-gym-muted">
                        <Mail size={18} />
                    </div>
                    <div className="flex-1">
                        <p className="text-[10px] text-gym-muted uppercase">Correo</p>
                        <p className="text-sm text-white">carlos.ramirez@gmail.com</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/5 rounded-lg text-gym-muted">
                        <Phone size={18} />
                    </div>
                    <div className="flex-1">
                        <p className="text-[10px] text-gym-muted uppercase">Teléfono</p>
                        <p className="text-sm text-white">+51 987 654 321</p>
                    </div>
                </div>
            </div>

            {/* 3. Menú de Acciones */}
            <div className="bg-gym-card border border-gym-border rounded-xl overflow-hidden">

                <ProfileMenuItem
                    icon={CreditCard}
                    label="Historial de Pagos"
                    subLabel="Ver mis recibos y fechas"
                />

                <ProfileMenuItem
                    icon={Clock}
                    label="Historial de Asistencias"
                    subLabel="Registro de ingresos"
                />

                <ProfileMenuItem
                    icon={Shield}
                    label="Seguridad"
                    subLabel="Cambiar contraseña"
                />

                <ProfileMenuItem
                    icon={HelpCircle}
                    label="Ayuda y Soporte"
                    subLabel="Contactar con administración"
                />
            </div>

            {/* 4. Botón Cerrar Sesión */}
            <button className="w-full py-4 rounded-xl border border-red-500/30 bg-red-500/10 text-red-500 font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-red-500 hover:text-white transition-all">
                <LogOut size={20} /> Cerrar Sesión
            </button>

            {/* Versión */}
            <p className="text-center text-[10px] text-gym-muted/50">
                VitalCore App v1.2.0
            </p>

        </div>
    );
}

function ProfileMenuItem({ icon: Icon, label, subLabel }: any) {
    return (
        <button className="w-full flex items-center gap-4 p-4 border-b border-gym-border last:border-0 hover:bg-white/5 transition-colors text-left group">
            <div className="p-2 bg-gym-bg rounded-lg text-gym-accent group-hover:text-white transition-colors">
                <Icon size={20} />
            </div>
            <div className="flex-1">
                <p className="text-sm font-bold text-white">{label}</p>
                <p className="text-xs text-gym-muted">{subLabel}</p>
            </div>
            <ChevronRight size={18} className="text-gym-muted group-hover:translate-x-1 transition-transform" />
        </button>
    )
}