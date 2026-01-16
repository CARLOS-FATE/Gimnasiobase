'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, User, ArrowRight, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulación de login (espera 1.5s y redirige)
    setTimeout(() => {
      router.push('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gym-bg flex items-center justify-center p-4 relative overflow-hidden">
      {/* Fondo Decorativo (Círculos brillantes) */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-gym-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-gym-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Tarjeta de Login */}
      <div className="w-full max-w-md bg-gym-card/80 backdrop-blur-xl border border-gym-border rounded-2xl shadow-2xl p-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-heading font-bold italic tracking-tighter text-white mb-2">
            VITAL<span className="text-gym-accent">CORE</span>
          </h1>
          <p className="text-gym-muted text-sm uppercase tracking-widest">Sistema de Gestión Integral</p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleLogin} className="space-y-6">

          {/* Usuario */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-white uppercase ml-1">Usuario / ID</label>
            <div className="relative group">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gym-muted group-focus-within:text-gym-accent transition-colors" size={20} />
              <input
                type="text"
                placeholder="admin@vitalcore.pe"
                className="w-full bg-black/50 border border-gym-border rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-gym-muted/50 focus:outline-none focus:border-gym-accent focus:ring-1 focus:ring-gym-accent transition-all"
                required
              />
            </div>
          </div>

          {/* Contraseña */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-white uppercase ml-1">Contraseña</label>
            <div className="relative group">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gym-muted group-focus-within:text-gym-accent transition-colors" size={20} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full bg-black/50 border border-gym-border rounded-lg pl-10 pr-12 py-3 text-white placeholder:text-gym-muted/50 focus:outline-none focus:border-gym-accent focus:ring-1 focus:ring-gym-accent transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gym-muted hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Botón Ingresar */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-gym-primary to-gym-accent hover:to-orange-400 text-black font-bold uppercase py-3.5 rounded-lg shadow-[0_0_20px_rgba(255,153,0,0.3)] hover:shadow-[0_0_30px_rgba(255,153,0,0.5)] transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
            ) : (
              <>
                Ingresar al Sistema <ArrowRight size={20} strokeWidth={2.5} />
              </>
            )}
          </button>

          <div className="text-center">
            <Link href="#" className="text-xs text-gym-muted hover:text-gym-accent transition-colors">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
        </form>
      </div>

      <div className="absolute bottom-6 text-center text-[10px] text-gym-muted/50">
        &copy; 2026 VitalCore Gym. Acceso restringido solo a personal autorizado.
      </div>
    </div>
  );
}