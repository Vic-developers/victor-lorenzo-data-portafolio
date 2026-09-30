'use client';

import { useEffect, useState } from 'react';
import { projects } from '../data/projects';

export function AdminPanel() {
  const [password, setPassword] = useState('');
  const [showPanel, setShowPanel] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin-portfolio-2026') {
      setShowPanel(true);
    }
  };

  const handleLogout = () => {
    setShowPanel(false);
  };

  // Cargar datos de proyectos al inicializar
  useEffect(() => {
    // Los proyectos se definen en data/projects.ts
    // No es necesario cargarlos aquí para el panel de vista
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-xl min-h-screen">
      <div className="flex items-center justify-between mb-6 pb-4 border-b">
        <h2 className="text-2xl font-bold text-gray-900">
          {showPanel ? 'Panel de Administración' : 'Login Administrador'}
        </h2>
        {showPanel && (
          <button onClick={handleLogout} className="text-red-600 hover:text-red-800">
            Cerrar sesión
          </button>
        )}
      </div>

      {showPanel ? (
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-gray-900 mb-4">Panel de Administración</h3>
          <p className="text-sm text-gray-500 mb-4">
            El portafolio Data Analyst ya está desplegado en http://localhost:3003.
          </p>
          <p className="text-sm text-gray-500">
            Los proyectos y datos se definen en el archivo <code>data/projects.ts</code>.
            Este panel es solo para vista preliminar y demostración.
          </p>
          <p className="text-sm text-gray-500">
            Para modificar los proyectos definitivamente, edita directamente el archivo
            <code>data/projects.ts</code>.
          </p>
        </div>
      ) : (
        <div className="bg-gray-800 rounded-lg p-8 text-center min-h-screen">
          <h2 className="text-2xl font-bold text-white mb-6">Panel de Administración</h2>
          <form onSubmit={(e) => e.preventDefault()} className="max-w-md mx-auto">
            <div>
              <p className="text-white mb-4">Ingresa la contraseña para acceder:</p>
              <input
                type="password"
                placeholder="admin-portfolio-2026"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors mt-4"
            >
              Entrar al Panel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}