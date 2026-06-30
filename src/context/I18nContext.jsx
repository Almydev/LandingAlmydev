import { createContext, useContext, useState, useEffect } from 'react'

const I18nContext = createContext()

const translations = {
  es: {
    nav: { problema: 'Problema', solucion: 'Solución', capacidades: 'Capacidades', areas: 'Áreas', filosofia: 'Filosofía' },
    hero: {title: 'Transformamos procesos fragmentados en', highlight: 'ecosistemas inteligentes', subtitle: 'Información que fluye · Procesos conectados · Empresas que crecen', cta: 'Conoce más', cta2: 'Nuestras capacidades' },
    problem: { label: 'El desafío', title: 'Cuando la información deja de fluir', desc: 'Las organizaciones modernas generan grandes cantidades de información, pero gran parte permanece distribuida, fragmentada y desconectada. Esta fragmentación limita el crecimiento.' },
    problemCards: [
      { icon: '⊕', title: 'Información dispersa', desc: 'Datos atrapados en hojas de cálculo, correos electrónicos y sistemas desconectados.' },
      { icon: '⊘', title: 'Procesos manuales', desc: 'Tareas repetitivas que consumen tiempo, generan errores y ralentizan la operación.' },
      { icon: '⊝', title: 'Sistemas aislados', desc: 'Plataformas que no se comunican entre sí, creando silos operativos.' },
      { icon: '⊡', title: 'Decisiones reactivas', desc: 'Falta de información confiable en el momento adecuado para tomar mejores decisiones.' },
    ],
    solution: { label: 'Nuestra respuesta', title: 'Diseñamos soluciones que generan eficiencia, control y evolución', desc1: 'ALMYDEV diseña soluciones tecnológicas orientadas a conectar procesos, integrar información y automatizar operaciones.', desc2: 'Nuestro objetivo es construir ecosistemas digitales donde los datos fluyan con claridad, los procesos sean trazables y las organizaciones puedan enfocarse en crecer.', desc3: 'No desarrollamos software por desarrollar software. Diseñamos soluciones que generan eficiencia, control y capacidad de evolución.' },
    solutionCards: [
      { value: 'Información', label: 'Centralizada' },
      { value: 'Procesos', label: 'Automatizados' },
      { value: 'Sistemas', label: 'Conectados' },
      { value: 'Decisiones', label: 'en tiempo real' },
    ],
    transformation: { label: 'Transformación', title: 'Lo que buscamos transformar', current: 'Situación Actual', result: 'Resultado Esperado' },
    transformationRows: [
      { current: 'Información dispersa', result: 'Información centralizada' },
      { current: 'Procesos manuales', result: 'Procesos automatizados' },
      { current: 'Sistemas aislados', result: 'Ecosistemas conectados' },
      { current: 'Reportes tardíos', result: 'Información en tiempo real' },
      { current: 'Decisiones reactivas', result: 'Decisiones basadas en datos' },
      { current: 'Dependencia operativa', result: 'Escalabilidad organizacional' },
    ],
    capabilities: { label: 'Capacidades', title: 'Capacidades Estratégicas', desc: 'Cinco áreas de expertise que nos permiten transformar la operación de tu organización.' },
    capabilitiesList: [
      { title: 'Ingeniería de Software', desc: 'Desarrollo de plataformas empresariales diseñadas para acompañar el crecimiento de las organizaciones.' },
      { title: 'Automatización Inteligente', desc: 'Optimización de procesos mediante flujos digitales eficientes y reducción de tareas manuales.' },
      { title: 'Integración Empresarial', desc: 'Conexión de sistemas, aplicaciones y fuentes de información para eliminar silos operativos.' },
      { title: 'Inteligencia Operativa', desc: 'Transformación de datos en información estratégica para apoyar la toma de decisiones.' },
      { title: 'Consultoría Tecnológica', desc: 'Diagnóstico, rediseño y evolución de procesos organizacionales.' },
    ],
    process: { label: 'Metodología', title: 'Cómo trabajamos' },
    processSteps: [
      { num: '01', title: 'Diagnóstico', desc: 'Analizamos procesos, flujos de información y necesidades del negocio.' },
      { num: '02', title: 'Diseño', desc: 'Definimos la arquitectura funcional y tecnológica de la solución.' },
      { num: '03', title: 'Implementación', desc: 'Construimos e integramos las herramientas necesarias para alcanzar los objetivos.' },
      { num: '04', title: 'Evolución', desc: 'Acompañamos el crecimiento de la solución y su mejora continua.' },
    ],
    areas: { label: 'Sectores', title: 'Áreas que transformamos', desc: 'Nuestras soluciones se adaptan a las necesidades específicas de cada área funcional.' },
    areasList: ['Recursos Humanos', 'Operaciones', 'Inventarios', 'Compras', 'Ventas', 'Servicio al Cliente', 'Gestión Documental', 'Finanzas', 'Planeación Estratégica'],
    tech: { label: 'Tecnología', title: 'Ecosistema Tecnológico', desc: 'Tecnologías modernas y robustas para construir soluciones empresariales escalables.' },
    techList: ['Java', 'Spring Boot', 'React', 'Python', 'PostgreSQL', 'Docker', 'APIs', 'GitHub Actions', 'Google Workspace', 'Integraciones', 'Automatización'],
    philosophy: { label: 'Filosofía', quote1: 'La tecnología no debe añadir complejidad.', quote2: 'Debe eliminarla.', text: 'Creemos que los procesos eficientes nacen cuando la información fluye con claridad entre las personas, los sistemas y las decisiones. Por ello diseñamos soluciones que simplifican operaciones, integran información y potencian el crecimiento organizacional.', motto: 'La información correcta debe llegar a la persona correcta, en el momento correcto.' },
    values: ['PRECISIÓN', 'INTEGRACIÓN', 'TRAZABILIDAD', 'ESCALABILIDAD', 'INNOVACIÓN'],
    footer: { nav: 'Navegación', connect: 'Conectemos', evolution: 'Evolución', rights: 'Todos los derechos reservados.' },
    footerEvolution: ['Desarrollo de Software Empresarial', 'Automatización de Procesos', 'Integración de Información', 'Consultoría Tecnológica'],
    theme: { light: 'Modo claro', dark: 'Modo oscuro' },
    lang: { es: 'Español', en: 'Inglés' },
  },
  en: {
    nav: { problema: 'Problem', solucion: 'Solution', capacidades: 'Capabilities', areas: 'Areas', filosofia: 'Philosophy' },
    hero: { badge: 'ALMYDEV', title: 'We turn fragmented processes into', highlight: 'intelligent ecosystems', subtitle: 'Information that flows · Connected processes · Companies that grow', cta: 'Learn more', cta2: 'Our capabilities' },
    problem: { label: 'The challenge', title: 'When information stops flowing', desc: 'Modern organizations generate large amounts of information, but much of it remains distributed, fragmented, and disconnected. This fragmentation limits growth.' },
    problemCards: [
      { icon: '⊕', title: 'Scattered information', desc: 'Data trapped in spreadsheets, emails, and disconnected systems.' },
      { icon: '⊘', title: 'Manual processes', desc: 'Repetitive tasks that consume time, generate errors, and slow operations.' },
      { icon: '⊝', title: 'Isolated systems', desc: 'Platforms that don\'t communicate with each other, creating operational silos.' },
      { icon: '⊡', title: 'Reactive decisions', desc: 'Lack of reliable information at the right time to make better decisions.' },
    ],
    solution: { label: 'Our answer', title: 'We design solutions that generate efficiency, control, and evolution', desc1: 'ALMYDEV designs technology solutions aimed at connecting processes, integrating information, and automating operations.', desc2: 'Our goal is to build digital ecosystems where data flows clearly, processes are traceable, and organizations can focus on growing.', desc3: 'We don\'t develop software for the sake of it. We design solutions that generate efficiency, control, and evolution capacity.' },
    solutionCards: [
      { value: 'Information', label: 'Centralized' },
      { value: 'Processes', label: 'Automated' },
      { value: 'Systems', label: 'Connected' },
      { value: 'Decisions', label: 'in real time' },
    ],
    transformation: { label: 'Transformation', title: 'What we aim to transform', current: 'Current Situation', result: 'Expected Outcome' },
    transformationRows: [
      { current: 'Scattered information', result: 'Centralized information' },
      { current: 'Manual processes', result: 'Automated processes' },
      { current: 'Isolated systems', result: 'Connected ecosystems' },
      { current: 'Late reports', result: 'Real-time information' },
      { current: 'Reactive decisions', result: 'Data-driven decisions' },
      { current: 'Operational dependency', result: 'Organizational scalability' },
    ],
    capabilities: { label: 'Capabilities', title: 'Strategic Capabilities', desc: 'Five areas of expertise that allow us to transform your organization\'s operations.' },
    capabilitiesList: [
      { title: 'Software Engineering', desc: 'Development of enterprise platforms designed to support organizational growth.' },
      { title: 'Intelligent Automation', desc: 'Process optimization through efficient digital workflows and reduced manual tasks.' },
      { title: 'Enterprise Integration', desc: 'Connecting systems, applications, and data sources to eliminate operational silos.' },
      { title: 'Operational Intelligence', desc: 'Transforming data into strategic information to support decision-making.' },
      { title: 'Technology Consulting', desc: 'Diagnosis, redesign, and evolution of organizational processes.' },
    ],
    process: { label: 'Methodology', title: 'How we work' },
    processSteps: [
      { num: '01', title: 'Diagnosis', desc: 'We analyze processes, information flows, and business needs.' },
      { num: '02', title: 'Design', desc: 'We define the functional and technological architecture of the solution.' },
      { num: '03', title: 'Implementation', desc: 'We build and integrate the necessary tools to achieve the objectives.' },
      { num: '04', title: 'Evolution', desc: 'We support the growth of the solution and its continuous improvement.' },
    ],
    areas: { label: 'Sectors', title: 'Areas we transform', desc: 'Our solutions adapt to the specific needs of each functional area.' },
    areasList: ['Human Resources', 'Operations', 'Inventory', 'Purchasing', 'Sales', 'Customer Service', 'Document Management', 'Finance', 'Strategic Planning'],
    tech: { label: 'Technology', title: 'Technology Ecosystem', desc: 'Modern and robust technologies to build scalable enterprise solutions.' },
    techList: ['Java', 'Spring Boot', 'React', 'Python', 'PostgreSQL', 'Docker', 'APIs', 'GitHub Actions', 'Google Workspace', 'Integrations', 'Automation'],
    philosophy: { label: 'Philosophy', quote1: 'Technology should not add complexity.', quote2: 'It should eliminate it.', text: 'We believe that efficient processes are born when information flows clearly between people, systems, and decisions. That is why we design solutions that simplify operations, integrate information, and boost organizational growth.', motto: 'The right information must reach the right person, at the right time.' },
    values: ['PRECISION', 'INTEGRATION', 'TRACEABILITY', 'SCALABILITY', 'INNOVATION'],
    footer: { nav: 'Navigation', connect: 'Let\'s connect', evolution: 'Evolution', rights: 'All rights reserved.' },
    footerEvolution: ['Enterprise Software Development', 'Process Automation', 'Information Integration', 'Technology Consulting'],
    theme: { light: 'Light mode', dark: 'Dark mode' },
    lang: { es: 'Spanish', en: 'English' },
  },
}

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('almydev-lang') || 'es'
  })

  useEffect(() => {
    localStorage.setItem('almydev-lang', lang)
  }, [lang])

  const t = translations[lang]
  const toggleLang = () => setLang(l => l === 'es' ? 'en' : 'es')

  return (
    <I18nContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </I18nContext.Provider>
  )
}

export const useI18n = () => useContext(I18nContext)
