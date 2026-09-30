'use client';

import { useEffect, useState } from 'react';

export function ProjectSearch() {
  const [projectElements, setProjectElements] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const initializeProjects = () => {
      const ps = document.querySelectorAll('.project-card');
      setProjectElements(Array.from(ps));
    };

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializeProjects);
    } else {
      initializeProjects();
    }

    return () => {
      // cleanup
    };
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (!term || projectElements.length === 0) {
      // Show all
      projectElements.forEach((p: HTMLElement) => {
        p.style.display = '';
      });
      return;
    }

    projectElements.forEach((p: HTMLElement) => {
      const title = p.querySelector('h3')?.textContent.toLowerCase() || '';
      const category = p.querySelector('.cat')?.textContent.toLowerCase() || '';
      const num = p.querySelector('.num')?.textContent.toLowerCase() || '';

      if (title.includes(term) || category.includes(term) || num.includes(term)) {
        p.style.display = '';
      } else {
        p.style.display = 'none';
      }
    });
  };

  return (
    <div className="search-filter" style={{ marginTop: '16px', padding: '12px 0', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <input
        type="text"
        id="project-search"
        placeholder="Buscar proyecto... (industria, categoría, keywords)"
        aria-label="Buscar proyecto"
        value={searchTerm}
        onChange={handleSearch}
        style={{
          width: '300px',
          padding: '8px 12px',
          border: '1px solid var(--line)',
          borderRadius: '4px',
          fontSize: '13px',
          color: 'var(--ink)',
          background: '#fff'
        }}
      />
    </div>
  );
}