'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, TrendingUp, User, Menu, X, QrCode, LogOut } from 'lucide-react';

export default function UserLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gym-bg text-white font-sans flex flex-col">

            {/* Navbar Móvil Superior */}
            <header className="h-16 border-b border-gym-border flex items-center justify-between px-6 bg-gym-card/80 backdrop-blur-md sticky top-0 z-50">
                <div className="flex items-center gap-2">
                    {/* Logo Compacto */}
                    <div className="w-8 h-8 bg-gym-accent rounded flex items-center justify-center text-black font-bold italic">V</div>
                    <span className="font-heading font-bold italic tracking-tighter text-lg">VITAL<span className="text-gym-accent">CORE</span></span>
                </div>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </header>

            {/* Menú Desplegable Móvil */}
            {isMenuOpen && (
                <div className="fixed inset-0 top-16 z-40 bg-black/95 backdrop-blur-xl p-6 flex flex-col gap-6 animate-in slide-in-from-top-10">
                    <nav className="flex flex-col gap-4">
                        <MobileLink icon={Home} label="Inicio" href="/user/dashboard" active={pathname === '/user/dashboard'} onClick={() => setIsMenuOpen(false)} />
                        <MobileLink icon={TrendingUp} label="Mi Progreso" href="/user/progress" active={pathname === '/user/progress'} onClick={() => setIsMenuOpen(false)} />
                        <MobileLink icon={User} label="Mi Perfil" href="/user/profile" active={pathname === '/user/profile'} onClick={() => setIsMenuOpen(false)} />
                    </nav>
                    <div className="mt-auto border-t border-white/10 pt-6">
                        <button className="flex items-center gap-3 text-red-500 font-bold uppercase tracking-wider">
                            <LogOut size={20} /> Cerrar Sesión
                        </button>
                    </div>
                </div>
            )}

            {/* Contenido */}
            <main className="flex-1 p-6 pb-24 w-full mx-auto max-w-md md:max-w-4xl">
                {children}
            </main>

            {/* Bottom Navigation (Estilo App Móvil) */}
            <nav className="fixed bottom-0 left-0 w-full h-20 bg-gym-card border-t border-gym-border flex justify-around items-center px-2 z-40 md:hidden">
                <BottomTab icon={Home} label="Inicio" href="/user/dashboard" active={pathname.includes('dashboard')} />

                {/* Botón Central Flotante (QR) */}
                <div className="relative -top-6">
                    <button className="w-14 h-14 rounded-full bg-gym-accent text-black flex items-center justify-center shadow-[0_0_20px_rgba(255,153,0,0.5)] border-4 border-gym-bg">
                        <QrCode size={28} />
                    </button>
                </div>

                <BottomTab icon={TrendingUp} label="Progreso" href="/user/progress" active={pathname.includes('progress')} />
            </nav>
        </div>
    );
}

function BottomTab({ icon: Icon, label, href, active }: any) {
    return (
        <Link href={href} className={`flex flex-col items-center gap-1 ${active ? 'text-gym-accent' : 'text-gym-muted'}`}>
            <Icon size={24} />
            <span className="text-[10px] uppercase font-bold">{label}</span>
        </Link>
    )
}

function MobileLink({ icon: Icon, label, href, active, onClick }: any) {
    return (
        <Link href={href} onClick={onClick} className={`flex items-center gap-4 p-4 rounded-xl text-lg font-bold ${active ? 'bg-gym-accent text-black' : 'bg-white/5 text-white'}`}>
            <Icon size={24} /> {label}
        </Link>
    )
}