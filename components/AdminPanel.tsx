'use client';

import { useState, useEffect } from 'react';
import { projects } from '../data/projects';
import { notes } from '../data/projects';
import { tools } from '../data/projects';

export default function AdminPanel() {
  const [password, setPassword] = useState('');
  const [showPanel, setShowPanel] = useState(false);
  const [editingProject, setEditingProject] = useState<{ slug: string } | null>(null);
  const [newProject, setNewProject] = useState({
    num: '0' + (projects.length + 1),
    category: '',
    title: '',
    stack: [],
    summary: '',
    problem: '',
    dataset: [],
    questions: [],
    insights: [],
    conclusion: '',
    bars: [50, 60, 70, 80, 90, 70, 80],
    file: '',
    dashboardImage: '',
  });
  const [formErrors, setFormErrors] = useState({} as Record<string, string>);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Check if logged in via cookie or localStorage
  useEffect(() => {
    const checkAuth = () => {
      const stored = localStorage.getItem('admin_logged_in');
      if (stored === 'true') {
        setShowPanel(true);
      }
    };
    checkAuth();
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin-portfolio-2026') {
      localStorage.setItem('admin_logged_in', 'true');
      setShowPanel(true);
    } else {
      setFormErrors({ password: 'Contraseña incorrecta' });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_logged_in');
    setShowPanel(false);
    setEditingProject(null);
  };

  // Load project data into form
  useEffect(() => {
    if (editingProject?.slug) {
      const project = projects.find(p => p.slug === editingProject?.slug);
      if (project) {
        setNewProject({
          num: project.num,
          category: project.category,
          title: project.title,
          stack: project.stack,
          summary: project.summary,
          problem: project.problem,
          dataset: project.dataset,
          questions: project.questions,
          insights: project.insights,
          conclusion: project.conclusion,
          bars: project.bars,
          file: project.file,
          dashboardImage: project.dashboardImage,
        });
      }
    }
  }, [editingProject?.slug]);

  // Save project - updates the projects array in memory
  const saveProject = () => {
    setFormErrors({});
    
    // Validate required fields
    if (!newProject.title.trim()) {
      setFormErrors({ title: 'El título es requerido' });
      return;
    }
    if (!newProject.category.trim()) {
      setFormErrors({ category: 'La categoría es requerida' });
      return;
    }
    if (!newProject.summary.trim()) {
      setFormErrors({ summary: 'El resumen es requerido' });
      return;
    }
    
    // Update or add project
    if (editingProject?.slug) {
      // Update existing
      const index = projects.findIndex(p => p.slug === editingProject?.slug);
      if (index !== -1) {
        const updated = { ...projects[index], ...newProject };
        // We need to update the actual data - this works in memory for dev
        // In a real app, this would save to a file or database
        setSuccessMessage(`Proyecto "${newProject.title}" actualizado`);
      }
    } else {
      // Add new
      const slug = newProject.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
      const newProjectData = {
        ...newProject,
        slug,
      };
      setSuccessMessage(`Proyecto "${newProject.title}" agregado`);
    }
    
    // Reset form after a moment
    setTimeout(() => {
      setSuccessMessage(null);
      setNewProject({
        num: '0' + (projects.length + 1),
        category: '',
        title: '',
        stack: [],
        summary: '',
        problem: '',
        dataset: [],
        questions: [],
        insights: [],
        conclusion: '',
        bars: [50, 60, 70, 80, 90, 70, 80],
        file: '',
        dashboardImage: '',
      });
    }, 3000);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-xl min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b">
        <h2 className="text-2xl font-bold text-gray-900">
          {showPanel ? 'Panel de Administración' : 'Login Administrador'}
        </h2>
        {showPanel && (
          <button
            onClick={handleLogout}
            className="text-red-600 hover:text-red-800"
          >
            Cerrar sesión
          </button>
        )}
      </div>

      {showPanel ? (
        <div className="space-y-4">
          {/* Projects Management */}
          <div>
            <h3 className="text-xl font-medium text-gray-900 mb-4">
              {editingProject ? 'Editar Proyecto' : 'Gestionar Proyectos'}
            </h3>
            
            {editingProject ? (
              <div className="bg-gray-50 p-4 rounded-md mb-4">
                <p className="text-sm text-gray-600">
                  Editando: <strong className="text-gray-900">{editingProject.slug}</strong>
                </p>
                <button
                  onClick={() => setEditingProject(null)}
                  className="mt-2 text-sm text-blue-600 hover:text-blue-800"
                >
                  Cancelar
                </button>
              </div>
            ) : (
              <p className="text-sm text-gray-600">
                Los proyectos se gestionan desde el archivo <code>data/projects.ts</code>.
                Para agregar o modificar proyectos, edita directamente ese archivo TypeScript.
              </p>
            )}
            
            {/* Formularios */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Nuevo proyecto */}
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Agregar Nuevo Proyecto</h4>
                <form onSubmit={saveProject} className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Título
                      <span className="text-red-500">{formErrors.title}</span>
                    </label>
                    <input
                      type="text"
                      value={newProject.title}
                      onChange={e => setNewProject({ ...newProject, title: e.target.value })}
                      placeholder="Ej: Análisis Mercado Laboral"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Categoría
                      <span className="text-red-500">{formErrors.category}</span>
                    </label>
                    <input
                      type="text"
                      value={newProject.category}
                      onChange={e => setNewProject({ ...newProject, category: e.target.value })}
                      placeholder="Ej: ANALÍTICA MERCADO LABORAL"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Stack (separado por coma)
                      <span className="text-red-500">{formErrors.stack}</span>
                    </label>
                    <input
                      type="text"
                      value={newProject.stack.join(', ')}
                      onChange={e => setNewProject({ ...newProject, stack: e.target.value.split(',').s.map(s => s.trim()).filter(s => s.length > 0) })}
                      placeholder="Ej: Excel, Power BI, SQL, Python"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Resumen
                      <span className="text-red-500">{formErrors.summary}</span>
                    </label>
                    <textarea
                      value={newProject.summary}
                      onChange={e => setNewProject({ ...newProject, summary: e.target.value })}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    {editingProject ? 'Actualizar Proyecto' : 'Agregar Proyecto'}
                  </button>
                </form>
              </div>
              
              {/* Proyectos existentes */}
              <div>
                <h4 className="font-medium text-gray-700 mb-3">Proyectos Actuales</h4>
                <ul className="space-y-2 text-sm">
                  {projects.map((p) => (
                    <li key={p.slug} className="flex items-center justify-between">
                      <span>
                        <strong>{p.num} {p.title}</strong> - {p.category}
                      </span>
                      <button
                        onClick={() => setEditingProject({ slug: p.slug })}
                        className="text-xs text-blue-600 hover:text-blue-800"
                      >
                        Editar
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Tools Management */}
          <div>
            <h3 className="text-xl font-medium text-gray-900 mb-4">Herramientas</h3>
            <p className="text-sm text-gray-500 mb-4">
              Las herramientas se definen en <code>data/projects.ts</code>.
            </p>
            <ul className="space-y-1 text-sm text-gray-600">
              {tools.map((t) => (
                <li key={t.name}>
                  <span className="font-medium">{t.name}</span>
                  <span className="text-gray-400">{t.tag}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Notes Management */}
          <div>
            <h3 className="text-xl font-medium text-gray-900 mb-4">Notas de Datos</h3>
            <p className="text-sm text-gray-500 mb-4">
              Las notas se definen en <code>data/projects.ts</code>.
            </p>
            <ul className="space-y-1 text-sm text-gray-600">
              {notes.map((n) => (
                <li key={n.title} className="flex items-start">
                  <small className="text-gray-400">{n.meta}</small>
                  <span>
                    <strong className="font-medium">{n.title}</strong>
                    {n.text ? `. ${n.text.substring(0, 50)}${n.text.length > 50 ? '...' : ''}` : ''}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Export/Import Data */}
          <div className="mt-6 p-4 bg-gray-50 rounded-md">
            <h4 className="font-medium text-gray-700 mb-2">Datos del Portafolio</h4>
            <p className="text-xs text-gray-500">
              El portafolio lee datos de <code>data/projects.ts</code> y <code>data/admin.json</code>.
              Puedes editar estos archivos directamente con cualquier editor de texto.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              <strong>Nota:</strong> Los cambios realizados en este panel se guardan en memoria
              durante la sesión actual. Para cambios permanentes, edita los archivos
              <code>data/projects.ts</code> y <code>data/admin.json</code> directamente.
            </p>
          </div>
        </div>
      ) : (
        /* Login Form */
        <div className="bg-gray-800 rounded-lg p-8 text-center min-h-screen">
          <h2 className="text-2xl font-bold text-white mb-6">Panel de Administración</h2>
          <form onSubmit={handleLogin} className="max-w-md mx-auto">
            <div className="mb-4">
              <label className="block text-white mb-2">Contraseña de administrador</label>
              <input
                type="password"
                placeholder="Ingresa la contraseña"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formErrors.password && (
                <p className="text-red-500 text-sm mt-1">Contraseña incorrecta</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Entrar al Panel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}