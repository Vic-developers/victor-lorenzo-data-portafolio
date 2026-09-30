export type Project = {
  slug: string;
  num: string;
  category: string;
  title: string;
  stack: string[];
  summary: string;
  problem: string;
  dataset: { label: string; value: string }[];
  questions: string[];
  insights: { value: string; label: string }[];
  conclusion: string;
  bars: number[];
  file: string;
  dashboardImage: string;
};

export const projects: Project[] = [
  {
    slug: 'analisis-mercado-laboral',
    num: '01',
    category: 'ANALÍTICA MERCADO LABORAL',
    title: 'Análisis Mercado Laboral 2021–2024',
    stack: ['Excel', 'Power BI', 'Power Query', 'DAX'],
    summary: 'Análisis integral del mercado laboral de EE. UU. en 10 industrias y 50+ estados — establecimientos, empleo y tendencias salariales a partir de 1.919 registros.',
    problem: 'Los datos del mercado laboral estaban fragmentados entre industrias y estados sin una visión unificada de tendencias de empleo, crecimiento salarial o concentración industrial por región.',
    dataset: [
      { label: 'Conjunto de datos', value: 'Estadísticas Laborales EE. UU. (simulado)' },
      { label: 'Registros', value: '1.919' },
      { label: 'Variables', value: 'Año · Industria · Estado · Establecimientos · Empleados · Salario Anual Promedio' },
      { label: 'Fuente', value: '5.3 Dashboard Empleabilidad.xlsx — Hoja "Datos"' },
      { label: 'Periodo', value: '2021–2024' },
    ],
    questions: [
      '¿Qué industrias impulsan el crecimiento del empleo y los salarios?',
      '¿Cómo se concentran establecimientos y empleo por estado?',
      '¿Cuáles son las disparidades salariales entre industrias y regiones?',
      '¿Qué combinaciones industria-estado muestran mayor crecimiento 2021→2024?',
    ],
    insights: [
      { value: '245K', label: 'Pico de empleados (CA, Energía, 2024)' },
      { value: '$71,6K', label: 'Salario promedio más alto (AZ, Energía, 2024)' },
      { value: '10', label: 'Industrias analizadas' },
      { value: '50+', label: 'Estados cubiertos' },
    ],
    conclusion: 'El sector energético lidera el crecimiento salarial mientras que Salud y Tecnología dominan el volumen de empleo. Los estados costeros concentran tanto establecimientos como empleos de alto salario. El dashboard permite filtrar por industria/estado para identificar oportunidades de fuerza laboral regional.',
    bars: [88, 46, 97, 62, 100, 64, 74],
    file: '/projects/labor-market.xlsx',
    dashboardImage: '/projects/dashboards/labor-market.png',
  },
  {
    slug: 'dashboard-ingresos-personales',
    num: '02',
    category: 'ANALÍTICA FINANCIERA',
    title: 'Dashboard Ingresos Personales 2010–2022',
    stack: ['Excel', 'Power BI', 'Power Query', 'DAX'],
    summary: 'Seguimiento trimestral de ingresos en 5 categorías de producto durante 13 años — 261 registros revelando estacionalidad, cambios en la mezcla de productos y tendencias de ingresos.',
    problem: 'Los flujos de ingresos de múltiples productos (Alquiler, Cursos, Eventos, Libros, Trabajo) se registraban de forma aislada sin una visión consolidada del rendimiento trimestral o crecimiento interanual.',
    dataset: [
      { label: 'Conjunto de datos', value: 'Seguimiento Ingresos Personales (simulado)' },
      { label: 'Registros', value: '261' },
      { label: 'Variables', value: 'Año · Trimestre · Tipo Producto · Ingresos' },
      { label: 'Fuente', value: '5.2 Dashboard Ingresos Personales.xlsx — Hoja "Datos Dashboard Ingresos"' },
      { label: 'Periodo', value: '2010–2022 (13 años × 4 trimestres × 5 productos)' },
    ],
    questions: [
      '¿Qué categorías de producto generan los ingresos más consistentes?',
      '¿Cuáles son los patrones estacionales por trimestre a lo largo de los años?',
      '¿Cómo ha evolucionado la mezcla de productos de 2010 a 2022?',
      '¿Qué trimestres muestran el rendimiento más fuerte/débil?',
    ],
    insights: [
      { value: '13', label: 'Años de datos trimestrales' },
      { value: '5', label: 'Categorías de producto' },
      { value: '261', label: 'Puntos de datos (trimestres × productos)' },
      { value: 'Eventos', label: 'Producto con mayor ingreso trimestral' },
    ],
    conclusion: 'Eventos y Cursos impulsan los ingresos trimestrales pico con fuerte estacionalidad en Q4. El alquiler proporciona una base de ingresos estable. La tabla dinámica permite filtrado dinámico por año, trimestre y producto para diagnósticos rápidos de ingresos.',
    bars: [72, 85, 58, 92, 45, 78, 66],
    file: '/projects/personal-income.xlsx',
    dashboardImage: '/projects/dashboards/personal-income.svg',
  },
  {
    slug: 'analisis-ventas-seguros',
    num: '03',
    category: 'ANALÍTICA DE VENTAS',
    title: 'Análisis Ventas Seguros por Municipio y Agente',
    stack: ['Excel', 'Power BI', 'Power Query', 'DAX'],
    summary: 'Rendimiento de ventas en 4 municipios, 3 tipos de seguro y 2 agentes — conjunto compacto (19 registros) demostrando diseño de dashboard basado en tablas dinámicas.',
    problem: 'Los datos de ventas de seguros estaban dispersos por municipio y agente sin una visión clara de qué productos se venden dónde, o qué agentes rinden mejor por línea de producto.',
    dataset: [
      { label: 'Conjunto de datos', value: 'Registros Ventas Seguros (simulado)' },
      { label: 'Registros', value: '19' },
      { label: 'Variables', value: 'Municipio · Tipo Seguro · Agente · Importe Ventas' },
      { label: 'Fuente', value: '5.1 Dashboard Venta de Seguros.xlsx — Hoja "Datos Dashboard Seguros"' },
      { label: 'Periodo', value: 'Instantánea período único' },
    ],
    questions: [
      '¿Qué municipio genera el mayor total de ventas?',
      '¿Qué tipo de seguro domina por volumen?',
      '¿Cómo se comparan los dos agentes (Alex, Carlos) entre productos?',
      '¿Qué combinaciones municipio-producto están subatendidas?',
    ],
    insights: [
      { value: 'Centro', label: 'Municipio top por ventas' },
      { value: 'Salud', label: 'Tipo de seguro líder' },
      { value: 'Alex', label: 'Mejor desempeño (foco mono-agente)' },
      { value: '40K+', label: 'Transacción individual más alta (Centro, Salud, Alex)' },
    ],
    conclusion: 'El municipio Centro y el seguro Salud dominan. Alex supera significativamente a Carlos en Salud. El dashboard con tema "gotita" brinda visibilidad instantánea de la concentración de ventas por geografía, producto y agente.',
    bars: [92, 48, 76, 34, 88, 56, 80],
    file: '/projects/insurance-sales.xlsx',
    dashboardImage: '/projects/dashboards/insurance-sales.svg',
  },
  {
    slug: 'analisis-gastos-aerolineas',
    num: '04',
    category: 'ANALÍTICA OPERACIONAL',
    title: 'Análisis Gastos Combustible y Operativos Aerolíneas 2001–2015',
    stack: ['Excel', 'Power BI', 'Power Query', 'DAX'],
    summary: 'Seguimiento de gastos durante 15 años para 6 aerolíneas — 91 registros analizando costos de combustible vs gastos operativos totales (miles), revelando eficiencia de operadores y evolución de estructura de costos.',
    problem: 'Los datos de gastos de aerolíneas existían en forma tabular cruda sin visibilidad de ratios combustible/total, comparativas entre operadores o tendencias temporales de eficiencia operativa.',
    dataset: [
      { label: 'Conjunto de datos', value: 'Gastos Operativos Aerolíneas (simulado)' },
      { label: 'Registros', value: '91' },
      { label: 'Variables', value: 'Aerolínea · Año · Gastos Combustible · Gastos Totales (miles)' },
      { label: 'Fuente', value: '5.4 Dashboard Aerolineas (1).xlsx — Hoja "Datos Aerolíneas"' },
      { label: 'Periodo', value: '2001–2015 (15 años × 6 aerolíneas)' },
    ],
    questions: [
      '¿Qué aerolíneas tienen la mayor ratio combustible/gastos totales?',
      '¿Cómo evolucionaron los costos de combustible vs totales 2001–2015?',
      '¿Qué operador muestra mejor disciplina de costos en el tiempo?',
      '¿Cuál es el impacto de choques de precio del petróleo por aerolínea?',
    ],
    insights: [
      { value: '6', label: 'Aerolíneas analizadas' },
      { value: '15', label: 'Años de datos' },
      { value: 'Iberia', label: 'Gastos totales más altos (consistentemente)' },
      { value: 'Ryanair', label: 'Base de costos más baja (modelo lean)' },
    ],
    conclusion: 'Iberia y American Airlines tienen los costos absolutos más altos; Ryanair y EasyJet mantienen estructuras lean. Los gastos de combustible representan ~10-15% del total en la mayoría de operadores. El dashboard basado en tablas dinámicas permite filtrado año/aerolínea para análisis comparativo rápido.',
    bars: [65, 82, 48, 90, 55, 78, 70],
    file: '/projects/airline-expenses.xlsx',
    dashboardImage: '/projects/dashboards/airline-expenses.svg',
  },
  {
    slug: 'analisis-avanzado-mercado-laboral',
    num: '05',
    category: 'ANALÍTICA AVANZADA',
    title: 'Análisis Avanzado Mercado Laboral',
    stack: ['Excel', 'Power BI', 'Power Query', 'DAX', 'Tablas Dinámicas'],
    summary: 'Versión mejorada del Proyecto 01 con tablas dinámicas preconstruidas, campos calculados y controles interactivos — demostrando flujo completo Excel a Power BI.',
    problem: 'Más allá de la exploración de datos crudos, los stakeholders necesitaban una herramienta analítica lista para usar con filtros dinámicos, tarjetas KPI y visualizaciones de tendencia para toma de decisiones en mercado laboral.',
    dataset: [
      { label: 'Conjunto de datos', value: 'Estadísticas Laborales EE. UU. (simulado) — Mejorado' },
      { label: 'Registros', value: '1.919 (crudo) + agregados dinámicos' },
      { label: 'Variables', value: 'Año · Industria · Estado · Establecimientos · Empleados · Salario Promedio + ratios calculados' },
      { label: 'Fuente', value: '5.3 Dashboard Empleabilidad (Solución).xlsx — Hojas "Datos", "Tablas", "Dashboard (format control)"' },
      { label: 'Periodo', value: '2021–2024' },
    ],
    questions: [
      '¿Cómo comparan tendencias salariales entre industrias normalizadas?',
      '¿Qué estados muestran mayor empleo por 100 habitantes por industria?',
      '¿Cuáles son las tasas de crecimiento interanual de salario y plantilla?',
      '¿Pueden los usuarios segmentar dinámicamente por industria, estado y año?',
    ],
    insights: [
      { value: 'Dinámicos', label: 'Segmentadores Industria/Estado/Año' },
      { value: 'Por 100 capita', label: 'Métrica empleo normalizada' },
      { value: 'YoY %', label: 'Cálculos de crecimiento integrados' },
      { value: 'Control formato', label: 'Hoja de theming del dashboard' },
    ],
    conclusion: 'El libro de solución demuestra un flujo BI en Excel completo: datos crudos → limpieza Power Query → modelado Tablas Dinámicas → Campos Calculados → Dashboard Interactivo con control de formato. Es la plantilla que replico en entregables de cliente.',
    bars: [95, 60, 88, 72, 98, 52, 84],
    file: '/projects/labor-market-solution.xlsx',
    dashboardImage: '/projects/dashboards/advanced-labor.svg',
  },
];

export const tools = [
  { name: 'SQL', tag: 'QUERY · JOIN · CTE' },
  { name: 'Power BI', tag: 'DAX · MODELING' },
  { name: 'Python', tag: 'ANALYSIS · EDA' },
  { name: 'Excel', tag: 'MODELING · PIVOT' },
  { name: 'Pandas', tag: 'WRANGLING' },
  { name: 'NumPy', tag: 'COMPUTE' },
  { name: 'Power Query', tag: 'ETL' },
  { name: 'DAX', tag: 'MEASURES' },
  { name: 'Google Sheets', tag: 'COLLAB' },
];

export const notes = [
  { title: 'Por qué importan los datos limpios', meta: 'DATOS · 5 MIN LECTURA', text: 'Ningún modelo sobrevive a mala entrada. Checklist para perfilar, duplicados y nulos antes de cualquier gráfico.' },
  { title: 'Patrones SQL que reutilizo semanalmente', meta: 'SQL · 7 MIN LECTURA', text: 'CTEs, funciones de ventana y consultas de cohortes que responden el 80% de preguntas de negocio.' },
  { title: 'Diseñando Power BI para decisiones', meta: 'POWER BI · 6 MIN LECTURA', text: 'Una página, una pregunta. Cómo estructuro medidas, filtros y jerarquía visual.' },
  { title: 'Flujo Excel → Power BI', meta: 'EXCEL · 8 MIN LECTURA', text: 'De hojas crudas a modelos dinámicos a medidas DAX — el pipeline que uso en cada proyecto de cliente.' },
  { title: 'Patrones Power Query para datos sucios', meta: 'POWER QUERY · 6 MIN LECTURA', text: 'Desanidar, coincidencia difusa y consultas parametrizadas que ahorran horas de limpieza manual.' },
];