'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
    LayoutDashboard,
    Users,
    CreditCard,
    Dumbbell,
    Menu,
    Banknote,
    ShieldCheck,
    UserCog,
    Settings,
    LogOut,
    ScanFace,
    X // Importamos la X para cerrar el menú
} from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Estado para abrir/cerrar menú

    return (
        <div className="flex h-screen bg-gym-bg text-gym-text font-sans overflow-hidden">

            {/* --- SIDEBAR (Adaptable: Fijo en Móvil / Relativo en PC) --- */}
            <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-gym-card border-r border-gym-border flex flex-col transition-transform duration-300 shadow-2xl
        md:relative md:translate-x-0 
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
      `}>

                {/* Header del Sidebar */}
                <div className="p-6 pb-2 flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-heading font-bold italic tracking-tighter text-white">
                            VITAL<span className="text-gym-accent">CORE</span>
                        </h1>
                        <p className="text-[10px] text-gym-muted uppercase tracking-widest mt-1">Panel Administrativo</p>
                    </div>
                    {/* Botón X solo visible en móvil */}
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="md:hidden text-gym-muted hover:text-white transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Navegación */}
                <nav className="flex-1 px-4 py-4 space-y-6 overflow-y-auto scrollbar-hide">

                    {/* GRUPO 1: PRINCIPAL */}
                    <div className="space-y-1">
                        <p className="px-4 text-[10px] font-bold text-gym-muted/50 uppercase tracking-widest mb-2">Principal</p>
                        <NavItem
                            icon={<LayoutDashboard size={20} />}
                            label="Dashboard"
                            href="/dashboard"
                            active={pathname === '/dashboard'}
                        />
                    </div>

                    {/* GRUPO 2: GESTIÓN */}
                    <div className="space-y-1">
                        <p className="px-4 text-[10px] font-bold text-gym-muted/50 uppercase tracking-widest mb-2">Gestión</p>
                        <NavItem
                            icon={<Users size={20} />}
                            label="Clientes"
                            href="/clients"
                            active={pathname === '/clients'}
                        />
                        <NavItem
                            icon={<UserCog size={20} />}
                            label="Staff / Entrenadores"
                            href="/staff"
                            active={pathname === '/staff'}
                        />
                        <NavItem
                            icon={<CreditCard size={20} />}
                            label="Membresías"
                            href="/subscriptions"
                            active={pathname === '/subscriptions'}
                        />
                    </div>

                    {/* GRUPO 3: OPERACIONES */}
                    <div className="space-y-1">
                        <p className="px-4 text-[10px] font-bold text-gym-muted/50 uppercase tracking-widest mb-2">Operaciones</p>
                        <NavItem
                            icon={<ScanFace size={20} />}
                            label="Control Acceso"
                            href="/access-control"
                            active={pathname === '/access-control'}
                        />
                        <NavItem
                            icon={<Banknote size={20} />}
                            label="Finanzas"
                            href="/finance"
                            active={pathname === '/finance'}
                        />
                        <NavItem
                            icon={<Dumbbell size={20} />}
                            label="Config. Gimnasio"
                            href="/gym"
                            active={pathname === '/gym'}
                        />
                    </div>

                </nav>

                {/* Footer del Sidebar (Usuario + Logout) */}
                <div className="p-4 border-t border-gym-border bg-black/20">

                    {/* Enlace a Configuración Global */}
                    <Link
                        href="/settings"
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all ${pathname === '/settings' ? 'bg-white/10 text-white' : 'text-gym-muted hover:text-white'}`}
                    >
                        <Settings size={18} />
                        <span className="text-sm font-medium">Configuración</span>
                    </Link>

                    {/* Botón Logout */}
                    <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all group">
                        <LogOut size={18} />
                        <span className="text-sm font-bold uppercase tracking-wide">Cerrar Sesión</span>
                    </button>

                    {/* Mini Perfil */}
                    <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/5">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gym-primary to-gym-accent flex items-center justify-center text-black font-bold text-xs shadow-lg shadow-gym-accent/20">
                            A
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-sm font-bold text-white truncate">Administrador</p>
                            <p className="text-[10px] text-gym-muted truncate">admin@vitalcore.pe</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* --- OVERLAY PARA MÓVIL (Fondo oscuro al abrir menú) --- */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/80 z-40 md:hidden backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* --- CONTENIDO PRINCIPAL --- */}
            <main className="flex-1 flex flex-col h-full overflow-hidden relative">
                <header className="h-16 border-b border-gym-border flex items-center justify-between px-8 bg-gym-bg/90 backdrop-blur-md z-10">
                    <div className="flex items-center gap-2 text-gym-muted">
                        {/* Logo visible solo en móvil */}
                        <span className="md:hidden font-heading font-bold italic text-white mr-2 text-xl">
                            VITAL<span className="text-gym-accent">CORE</span>
                        </span>

                        {/* Indicador de estado (Solo PC) */}
                        <div className="hidden md:flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-gym-accent animate-pulse"></span>
                            <h2 className="text-xs uppercase tracking-widest font-bold">Sistema Activo</h2>
                        </div>
                    </div>

                    {/* Botón Hamburguesa (Solo Móvil) */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                    >
                        <Menu size={24} />
                    </button>
                </header>

                <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
                    {children}
                </div>
            </main>
        </div>
    );
}

// Componente NavItem (Optimizado con estilos y animación)
function NavItem({ icon, label, href, active = false }: any) {
    return (
        <Link
            href={href}
            className={`flex items-center gap-3 px-4 py-2.5 mx-2 rounded-lg text-sm transition-all duration-200 group relative overflow-hidden ${active
                    ? 'bg-gym-accent text-black font-bold shadow-[0_0_15px_rgba(255,153,0,0.4)] translate-x-1'
                    : 'text-gym-muted hover:text-white hover:bg-white/5 hover:translate-x-1'
                }`}
        >
            <div className="relative z-10 flex items-center gap-3">
                {icon}
                <span className="uppercase tracking-wide font-medium text-[11px] md:text-xs">{label}</span>
            </div>

            {/* Efecto de brillo al pasar el mouse (solo inactivos) */}
            {!active && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
        </Link>
    );
}