
// Types
export interface Professor {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
}

export interface Course {
  id: number;
  nombre: string;
  descripcion: string;
  profesor_id: number;
}

export interface CaseStudy {
  id: number;
  titulo: string;
  descripcion_breve: string;
  descripcion_completa?: string; // Nueva propiedad
  imagen_url: string;
  curso_id: number;
  fecha_creacion?: string; // Nueva propiedad
  objetivo_aprendizaje?: string; // Nueva propiedad
}

export interface Experience {
  id: number;
  titulo: string;
  descripcion: string;
  imagen_preview_url: string;
  fecha_creacion: string;
  caso_estudio_id: number;
  duracion_estimada?: string; // Nueva propiedad
  nivel_dificultad?: 'Básico' | 'Intermedio' | 'Avanzado'; // Nueva propiedad
  tecnologias_usadas?: string[]; // Nueva propiedad
}

export interface Document {
  id: number;
  nombre_archivo: string;
  tipo_archivo: string;
  url_archivo: string;
  experiencia_id: number;
  tamano_kb?: number; // Nueva propiedad
}

export interface Student {
  codigo: string;
  nombre: string;
  apellido: string;
  email?: string; // Nueva propiedad
  avatar_url?: string; // Nueva propiedad
}

export interface Enrollment {
  id: number;
  estudiante_codigo: string;
  curso_id: number;
  fecha_inscripcion?: string; // Nueva propiedad
}

export interface Result {
  id: number;
  estudiante_codigo: string;
  experiencia_id: number;
  nota: number | null;
  comentario_agente: string | null;
  fecha_completado: string;
  tiempo_dedicado_minutos?: number; // Nueva propiedad
  intentos?: number; // Nueva propiedad
}

// Mock Current User (Professor)
export const currentUser: Professor = {
  id: 1,
  nombre: "María",
  apellido: "Rodríguez",
  email: "maria.rodriguez@universidad.edu"
};

// Mock Courses - Añadimos más detalles
export const courses: Course[] = [
  {
    id: 1,
    nombre: "Ingeniería de Materiales",
    descripcion: "Estudio avanzado de las propiedades y aplicaciones de materiales en ingeniería civil, mecánica y aeroespacial. Incluye análisis de resistencia, durabilidad y aplicaciones industriales.",
    profesor_id: 1
  },
  {
    id: 2,
    nombre: "Nanotecnología Aplicada",
    descripcion: "Fundamentos y aplicaciones de la nanotecnología en diversos campos de la ingeniería y ciencia de materiales. Análisis de casos prácticos en industria y medicina.",
    profesor_id: 1
  }
];

// Mock Case Studies - Añadimos más detalles
export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    titulo: "Materiales Compuestos",
    descripcion_breve: "Análisis de materiales compuestos y sus aplicaciones en construcción",
    descripcion_completa: "Estudio detallado de materiales compuestos, incluyendo fibra de carbono, fibra de vidrio y compuestos híbridos. Se analizan sus propiedades mecánicas, térmicas y su comportamiento bajo diferentes condiciones ambientales. Incluye aplicaciones prácticas en industrias como construcción, aeronáutica y automotriz.",
    imagen_url: "https://images.unsplash.com/photo-1518736346786-337db9af3dce?q=80&w=2070",
    curso_id: 1,
    fecha_creacion: "2025-03-15T10:00:00Z",
    objetivo_aprendizaje: "Comprender la estructura, propiedades y aplicaciones de materiales compuestos en diversos contextos industriales."
  },
  {
    id: 2,
    titulo: "Materiales Semiconductores",
    descripcion_breve: "Estudio de semiconductores y su importancia en la electrónica moderna",
    descripcion_completa: "Análisis profundo de los materiales semiconductores, su estructura cristalina y propiedades electrónicas. Se estudian los procesos de fabricación de dispositivos semiconductores, incluyendo dopado, litografía y empaquetado. Se exploran aplicaciones en microelectrónica, sensores y dispositivos optoelectrónicos.",
    imagen_url: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
    curso_id: 1,
    fecha_creacion: "2025-03-20T14:30:00Z",
    objetivo_aprendizaje: "Analizar las propiedades fundamentales de los semiconductores y su aplicación en dispositivos electrónicos contemporáneos."
  },
  {
    id: 3,
    titulo: "Nanomateriales Avanzados",
    descripcion_breve: "Exploración de nanomateriales y sus aplicaciones médicas e industriales",
    descripcion_completa: "Estudio detallado de nanomateriales, incluyendo nanopartículas, nanotubos de carbono y grafeno. Se analizan métodos de síntesis, caracterización y manipulación a nanoescala. Incluye aplicaciones en medicina, electrónica, energía y remediación ambiental.",
    imagen_url: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2070",
    curso_id: 2,
    fecha_creacion: "2025-03-25T09:15:00Z",
    objetivo_aprendizaje: "Comprender las propiedades únicas de los nanomateriales y sus aplicaciones multidisciplinarias."
  },
  {
    id: 4,
    titulo: "Biomateriales Inteligentes",
    descripcion_breve: "Análisis de biomateriales y su aplicación en medicina regenerativa",
    descripcion_completa: "Estudio de materiales biocompatibles y biodegradables para aplicaciones médicas. Incluye análisis de hidrogeles, scaffolds, materiales con memoria de forma y sistemas de liberación controlada de fármacos. Se exploran casos clínicos y avances recientes en medicina regenerativa e ingeniería de tejidos.",
    imagen_url: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070",
    curso_id: 2,
    fecha_creacion: "2025-04-01T11:45:00Z",
    objetivo_aprendizaje: "Analizar las propiedades y aplicaciones de biomateriales en contextos médicos y terapéuticos avanzados."
  }
];

// Expanded Mock Experiences
export const experiences: Experience[] = [
  // Case Study 1 Experiences
  {
    id: 1,
    titulo: "Análisis de Resistencia",
    descripcion: "Estudio sobre la resistencia de materiales compuestos bajo distintas condiciones",
    imagen_preview_url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070",
    fecha_creacion: "2025-04-01T10:00:00Z",
    caso_estudio_id: 1,
    duracion_estimada: "45 minutos",
    nivel_dificultad: "Intermedio",
    tecnologias_usadas: ["Simulación FEA", "Análisis de Esfuerzos"]
  },
  {
    id: 2,
    titulo: "Aplicaciones en Aeronáutica",
    descripcion: "Exploración de aplicaciones de materiales compuestos en la industria aeronáutica",
    imagen_preview_url: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=2073",
    fecha_creacion: "2025-04-02T14:30:00Z",
    caso_estudio_id: 1,
    duracion_estimada: "60 minutos",
    nivel_dificultad: "Avanzado",
    tecnologias_usadas: ["Simulación Aerodinámica", "Modelos 3D"]
  },
  {
    id: 3,
    titulo: "Durabilidad y Mantenimiento",
    descripcion: "Evaluación de la durabilidad y requisitos de mantenimiento de estructuras con materiales compuestos",
    imagen_preview_url: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=2070",
    fecha_creacion: "2025-04-03T09:15:00Z",
    caso_estudio_id: 1,
    duracion_estimada: "50 minutos",
    nivel_dificultad: "Intermedio",
    tecnologias_usadas: ["Análisis de Ciclo de Vida", "Pruebas de Envejecimiento"]
  },
  {
    id: 4,
    titulo: "Innovaciones Recientes",
    descripcion: "Revisión de innovaciones recientes en el campo de los materiales compuestos",
    imagen_preview_url: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2070",
    fecha_creacion: "2025-04-04T16:45:00Z",
    caso_estudio_id: 1,
    duracion_estimada: "40 minutos",
    nivel_dificultad: "Básico",
    tecnologias_usadas: ["Revisión Bibliográfica", "Análisis de Casos"]
  },
  // Case Study 2 Experiences
  {
    id: 5,
    titulo: "Principios Básicos",
    descripcion: "Introducción a los principios fundamentales de los semiconductores",
    imagen_preview_url: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069",
    fecha_creacion: "2025-04-05T11:00:00Z",
    caso_estudio_id: 2,
    duracion_estimada: "30 minutos",
    nivel_dificultad: "Básico",
    tecnologias_usadas: ["Simulación de Bandas", "Visualización 3D"]
  },
  {
    id: 6,
    titulo: "Fabricación de Chips",
    descripcion: "Proceso de fabricación de chips semiconductores y tecnologías actuales",
    imagen_preview_url: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=2070",
    fecha_creacion: "2025-04-06T13:20:00Z",
    caso_estudio_id: 2,
    duracion_estimada: "70 minutos",
    nivel_dificultad: "Avanzado",
    tecnologias_usadas: ["Litografía", "Proceso de Grabado", "Dopado"]
  },
  {
    id: 7,
    titulo: "Avances en Nanotecnología",
    descripcion: "Explorando los avances en nanotecnología aplicada a semiconductores",
    imagen_preview_url: "https://images.unsplash.com/photo-1581093196277-9f508cc3e749?q=80&w=2070",
    fecha_creacion: "2025-04-07T10:30:00Z",
    caso_estudio_id: 2,
    duracion_estimada: "55 minutos",
    nivel_dificultad: "Avanzado",
    tecnologias_usadas: ["Microscopía Electrónica", "Nanofabricación"]
  },
  {
    id: 8,
    titulo: "Futuro de los Semiconductores",
    descripcion: "Análisis de tendencias futuras y desarrollos prometedores en el campo",
    imagen_preview_url: "https://images.unsplash.com/photo-1564383424695-9910653f0774?q=80&w=2070",
    fecha_creacion: "2025-04-08T15:10:00Z",
    caso_estudio_id: 2,
    duracion_estimada: "45 minutos",
    nivel_dificultad: "Intermedio",
    tecnologias_usadas: ["Computación Cuántica", "Semiconductores Orgánicos"]
  },
  // Case Study 3 Experiences
  {
    id: 9,
    titulo: "Síntesis de Nanomateriales",
    descripcion: "Técnicas y métodos para la síntesis controlada de nanomateriales",
    imagen_preview_url: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070",
    fecha_creacion: "2025-04-09T09:30:00Z",
    caso_estudio_id: 3,
    duracion_estimada: "60 minutos",
    nivel_dificultad: "Avanzado",
    tecnologias_usadas: ["Deposición Química de Vapor", "Sol-Gel"]
  },
  {
    id: 10,
    titulo: "Caracterización Nanométrica",
    descripcion: "Métodos y equipos para caracterizar materiales a escala nanométrica",
    imagen_preview_url: "https://images.unsplash.com/photo-1554475900-0a0350e3fc7b?q=80&w=2070",
    fecha_creacion: "2025-04-10T13:45:00Z",
    caso_estudio_id: 3,
    duracion_estimada: "50 minutos",
    nivel_dificultad: "Intermedio",
    tecnologias_usadas: ["AFM", "SEM", "TEM"]
  },
  {
    id: 11,
    titulo: "Aplicaciones Ambientales",
    descripcion: "Uso de nanomateriales en remediación ambiental y tratamiento de aguas",
    imagen_preview_url: "https://images.unsplash.com/photo-1537000092872-06bbf7b64f60?q=80&w=2070",
    fecha_creacion: "2025-04-11T10:15:00Z",
    caso_estudio_id: 3,
    duracion_estimada: "45 minutos",
    nivel_dificultad: "Intermedio",
    tecnologias_usadas: ["Nanofiltración", "Catálisis Avanzada"]
  },
  {
    id: 12,
    titulo: "Nanosensores y Biosensores",
    descripcion: "Diseño y aplicación de sensores basados en nanomateriales",
    imagen_preview_url: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2080",
    fecha_creacion: "2025-04-12T14:00:00Z",
    caso_estudio_id: 3,
    duracion_estimada: "55 minutos",
    nivel_dificultad: "Avanzado",
    tecnologias_usadas: ["Espectroscopía", "Electroquímica"]
  },
  // Case Study 4 Experiences
  {
    id: 13,
    titulo: "Biomateriales en Regeneración Tisular",
    descripcion: "Aplicación de biomateriales avanzados en medicina regenerativa",
    imagen_preview_url: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fb?q=80&w=2070",
    fecha_creacion: "2025-04-13T09:00:00Z",
    caso_estudio_id: 4,
    duracion_estimada: "65 minutos",
    nivel_dificultad: "Avanzado",
    tecnologias_usadas: ["Cultivo Celular", "Bioimpresión 3D"]
  },
  {
    id: 14,
    titulo: "Sistemas de Liberación Controlada",
    descripcion: "Diseño de materiales para liberación controlada de fármacos",
    imagen_preview_url: "https://images.unsplash.com/photo-1624811533744-f85c39c3c33f?q=80&w=2070",
    fecha_creacion: "2025-04-14T11:30:00Z",
    caso_estudio_id: 4,
    duracion_estimada: "55 minutos",
    nivel_dificultad: "Intermedio",
    tecnologias_usadas: ["Encapsulación", "Sistemas Responsivos"]
  },
  {
    id: 15,
    titulo: "Biocompatibilidad y Bioactividad",
    descripcion: "Evaluación de la biocompatibilidad y bioactividad de biomateriales",
    imagen_preview_url: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?q=80&w=2070",
    fecha_creacion: "2025-04-15T14:15:00Z",
    caso_estudio_id: 4,
    duracion_estimada: "50 minutos",
    nivel_dificultad: "Intermedio",
    tecnologias_usadas: ["Ensayos In Vitro", "Cultivos Celulares"]
  },
  {
    id: 16,
    titulo: "Casos Clínicos de Éxito",
    descripcion: "Análisis de casos clínicos exitosos utilizando biomateriales inteligentes",
    imagen_preview_url: "https://images.unsplash.com/photo-1631217868264-e6641e857368?q=80&w=2091",
    fecha_creacion: "2025-04-16T10:45:00Z",
    caso_estudio_id: 4,
    duracion_estimada: "40 minutos",
    nivel_dificultad: "Básico",
    tecnologias_usadas: ["Análisis Estadístico", "Revisión de Literatura"]
  }
];

// Mock Documents for Experiences
export const documents: Document[] = [
  // Documentos para Experiencia 1
  {
    id: 1,
    nombre_archivo: "Guía de análisis de resistencia.pdf",
    tipo_archivo: "pdf",
    url_archivo: "/documentos/guia_analisis_resistencia.pdf",
    experiencia_id: 1,
    tamano_kb: 2450
  },
  {
    id: 2,
    nombre_archivo: "Tabla comparativa de materiales.xlsx",
    tipo_archivo: "xlsx",
    url_archivo: "/documentos/tabla_comparativa_materiales.xlsx",
    experiencia_id: 1,
    tamano_kb: 890
  },
  {
    id: 3,
    nombre_archivo: "Presentación de resistencia.pptx",
    tipo_archivo: "pptx",
    url_archivo: "/documentos/presentacion_resistencia.pptx",
    experiencia_id: 1,
    tamano_kb: 3200
  },
  // Documentos para otras experiencias...
  {
    id: 4,
    nombre_archivo: "Manual de aplicaciones aeronáuticas.pdf",
    tipo_archivo: "pdf",
    url_archivo: "/documentos/manual_aplicaciones_aeronauticas.pdf",
    experiencia_id: 2,
    tamano_kb: 4500
  },
  {
    id: 5,
    nombre_archivo: "Casos de estudio - Boeing 787.docx",
    tipo_archivo: "docx",
    url_archivo: "/documentos/casos_estudio_boeing.docx",
    experiencia_id: 2,
    tamano_kb: 1200
  }
];

// Generate 30 Mock Students with avatars
export const students: Student[] = Array.from({ length: 30 }, (_, i) => {
  const id = (i + 1).toString().padStart(6, '0');
  const firstNames = ["Juan", "Ana", "Carlos", "Sofía", "Diego", "Valentina", "Andrés", "Lucía", "Gabriel", "Camila", "Mateo", "Isabella", "Sebastián", "Mariana", "Daniel"];
  const lastNames = ["González", "López", "Martínez", "Rodríguez", "Pérez", "Sánchez", "Ramírez", "Torres", "Flores", "Díaz", "Vargas", "Morales", "Castro", "Ortiz", "Gutiérrez"];
  
  // Email basado en nombre y apellido
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@universidad.edu`;
  
  // Avatar URL usando servicios de avatar generativo
  const avatarId = Math.floor(Math.random() * 100);
  const avatarUrl = `https://i.pravatar.cc/150?img=${avatarId}`;
  
  return {
    codigo: `EST${id}`,
    nombre: firstName,
    apellido: lastName,
    email: email,
    avatar_url: avatarUrl
  };
});

// Enrollments - Todos los estudiantes en ambos cursos
export const enrollments: Enrollment[] = [];

// Asignar estudiantes al curso 1
students.slice(0, 20).forEach((student, i) => {
  enrollments.push({
    id: enrollments.length + 1,
    estudiante_codigo: student.codigo,
    curso_id: 1,
    fecha_inscripcion: getRandomPastDate(90) // Inscripción en los últimos 90 días
  });
});

// Asignar estudiantes al curso 2
students.slice(10, 30).forEach((student, i) => {
  enrollments.push({
    id: enrollments.length + 1,
    estudiante_codigo: student.codigo,
    curso_id: 2,
    fecha_inscripcion: getRandomPastDate(60) // Inscripción en los últimos 60 días
  });
});

// Generate results for each student and experience combination with more detail
export const results: Result[] = [];

// Para cada estudiante en el curso 1
students.slice(0, 20).forEach(student => {
  // Para cada experiencia del caso de estudio 1 y 2 (curso 1)
  experiences.filter(exp => [1, 2].includes(exp.caso_estudio_id)).forEach(exp => {
    // 80% chance of having completed the experience
    if (Math.random() < 0.8) {
      results.push({
        id: results.length + 1,
        estudiante_codigo: student.codigo,
        experiencia_id: exp.id,
        nota: +(Math.random() * 4 + 1).toFixed(1), // Random grade between 1.0 and 5.0
        comentario_agente: getRandomComment(),
        fecha_completado: getRandomPastDate(30), // Completado en los últimos 30 días
        tiempo_dedicado_minutos: Math.floor(Math.random() * 60) + 15, // Entre 15 y 75 minutos
        intentos: Math.floor(Math.random() * 3) + 1 // Entre 1 y 3 intentos
      });
    } else {
      // Not completed yet but started
      results.push({
        id: results.length + 1,
        estudiante_codigo: student.codigo,
        experiencia_id: exp.id,
        nota: null,
        comentario_agente: null,
        fecha_completado: getRandomPastDate(10), // Empezado en los últimos 10 días
        tiempo_dedicado_minutos: Math.floor(Math.random() * 20) + 5, // Entre 5 y 25 minutos
        intentos: 1
      });
    }
  });
});

// Para cada estudiante en el curso 2
students.slice(10, 30).forEach(student => {
  // Para cada experiencia del caso de estudio 3 y 4 (curso 2)
  experiences.filter(exp => [3, 4].includes(exp.caso_estudio_id)).forEach(exp => {
    // 70% chance of having completed the experience
    if (Math.random() < 0.7) {
      results.push({
        id: results.length + 1,
        estudiante_codigo: student.codigo,
        experiencia_id: exp.id,
        nota: +(Math.random() * 4 + 1).toFixed(1), // Random grade between 1.0 and 5.0
        comentario_agente: getRandomComment(),
        fecha_completado: getRandomPastDate(20), // Completado en los últimos 20 días
        tiempo_dedicado_minutos: Math.floor(Math.random() * 70) + 20, // Entre 20 y 90 minutos
        intentos: Math.floor(Math.random() * 3) + 1 // Entre 1 y 3 intentos
      });
    } else {
      // Some haven't even started
      if (Math.random() > 0.3) {
        results.push({
          id: results.length + 1,
          estudiante_codigo: student.codigo,
          experiencia_id: exp.id,
          nota: null,
          comentario_agente: null,
          fecha_completado: getRandomPastDate(5), // Empezado en los últimos 5 días
          tiempo_dedicado_minutos: Math.floor(Math.random() * 15) + 3, // Entre 3 y 18 minutos
          intentos: 1
        });
      }
    }
  });
});

// Helper function to get random past date
function getRandomPastDate(maxDaysAgo: number = 30): string {
  const now = new Date();
  const pastDate = new Date(now.getTime() - Math.random() * maxDaysAgo * 24 * 60 * 60 * 1000);
  return pastDate.toISOString();
}

// Helper function to get random comment
function getRandomComment(): string {
  const comments = [
    "Excelente análisis, muy completo y bien estructurado.",
    "Buen trabajo, pero falta profundidad en algunos conceptos clave.",
    "Necesita mejorar la estructura de la presentación y la claridad de las conclusiones.",
    "Destacable manejo de los conceptos técnicos y aplicación práctica.",
    "Conclusiones muy bien fundamentadas en datos experimentales.",
    "Falta mejorar la claridad en la explicación de algunos procesos complejos.",
    "Muy creativo el enfoque utilizado, especialmente en las soluciones propuestas.",
    "Excelente uso de ejemplos prácticos para ilustrar conceptos teóricos.",
    "Hay aspectos teóricos que necesitan revisión y mayor precisión.",
    "Sobresaliente integración de conceptos interdisciplinarios.",
    "La presentación visual es excelente, pero el contenido podría ser más detallado.",
    "Análisis crítico destacable, especialmente en la sección de limitaciones.",
    "Buen trabajo en equipo, se nota la coordinación y distribución de tareas.",
    "El formato de presentación es confuso, recomiendo reorganizar las secciones.",
    "Argumentación sólida y bien respaldada con referencias actualizadas.",
    "Falta mayor análisis comparativo entre las distintas soluciones propuestas.",
    "Excelente consideración de aspectos éticos y de sostenibilidad.",
    "La metodología utilizada es apropiada pero la ejecución presenta fallos.",
    "Muy buen uso de herramientas de simulación para validar hipótesis.",
    "Las conclusiones no se alinean completamente con los resultados presentados."
  ];
  
  return comments[Math.floor(Math.random() * comments.length)];
}

// Helper function to get student performance data for a case study
export function getStudentPerformanceForCaseStudy(caseStudyId: number, studentCode: string): {
  experienceId: number,
  experienceTitle: string,
  grade: number | null,
  comment: string | null,
  timeDedicated?: number,
  attempts?: number
}[] {
  // Get all experiences for the case study
  const caseStudyExperiences = experiences.filter(exp => exp.caso_estudio_id === caseStudyId);
  
  return caseStudyExperiences.map(exp => {
    // Find result for this student and experience
    const result = results.find(r => 
      r.estudiante_codigo === studentCode && 
      r.experiencia_id === exp.id
    );
    
    return {
      experienceId: exp.id,
      experienceTitle: exp.titulo,
      grade: result?.nota || null,
      comment: result?.comentario_agente || null,
      timeDedicated: result?.tiempo_dedicado_minutos || 0,
      attempts: result?.intentos || 0
    };
  });
}

// Helper function to get average grade for a student across all experiences
export function getStudentAverageGrade(studentCode: string, caseStudyId?: number): number {
  // Filter results by case study if provided
  let filteredResults = results.filter(r => 
    r.estudiante_codigo === studentCode && 
    r.nota !== null
  );
  
  if (caseStudyId) {
    // Filter by case study id
    const caseStudyExperienceIds = experiences
      .filter(exp => exp.caso_estudio_id === caseStudyId)
      .map(exp => exp.id);
      
    filteredResults = filteredResults.filter(r => 
      caseStudyExperienceIds.includes(r.experiencia_id)
    );
  }
  
  if (filteredResults.length === 0) return 0;
  
  const sum = filteredResults.reduce((acc, curr) => acc + (curr.nota || 0), 0);
  return +(sum / filteredResults.length).toFixed(1);
}

// Helper function to get completion percentage for a student
export function getStudentCompletionPercentage(studentCode: string, caseStudyId?: number): {
  completed: number;
  total: number;
  percentage: number;
} {
  let relevantExperiences: Experience[];
  
  if (caseStudyId) {
    // Filter experiences by case study
    relevantExperiences = experiences.filter(exp => exp.caso_estudio_id === caseStudyId);
  } else {
    // All experiences
    relevantExperiences = [...experiences];
  }
  
  const total = relevantExperiences.length;
  const completed = results.filter(r => 
    r.estudiante_codigo === studentCode && 
    r.nota !== null &&
    relevantExperiences.some(exp => exp.id === r.experiencia_id)
  ).length;
  
  return {
    completed,
    total,
    percentage: Math.round((completed / total) * 100)
  };
}

// Helper function to get documents for an experience
export function getDocumentsForExperience(experienceId: number): Document[] {
  return documents.filter(doc => doc.experiencia_id === experienceId);
}

// Helper function to get experiences for a case study with document count
export function getExperiencesWithDocumentCount(caseStudyId: number): (Experience & { documentCount: number })[] {
  return experiences
    .filter(exp => exp.caso_estudio_id === caseStudyId)
    .map(exp => ({
      ...exp,
      documentCount: documents.filter(doc => doc.experiencia_id === exp.id).length
    }));
}

// Helper function to get grade distribution for a case study
export function getGradeDistributionForCaseStudy(caseStudyId: number): { grade: string, count: number }[] {
  const caseStudyExperiences = experiences
    .filter(exp => exp.caso_estudio_id === caseStudyId)
    .map(exp => exp.id);
    
  const gradeResults = results
    .filter(r => 
      caseStudyExperiences.includes(r.experiencia_id) && 
      r.nota !== null
    );
    
  const distribution = [
    { grade: 'A', count: 0, min: 4.5, max: 5.0 },
    { grade: 'B', count: 0, min: 4.0, max: 4.49 },
    { grade: 'C', count: 0, min: 3.0, max: 3.99 },
    { grade: 'D', count: 0, min: 2.0, max: 2.99 },
    { grade: 'F', count: 0, min: 0, max: 1.99 }
  ];
  
  gradeResults.forEach(result => {
    const grade = result.nota || 0;
    for (const category of distribution) {
      if (grade >= category.min && grade <= category.max) {
        category.count++;
        break;
      }
    }
  });
  
  return distribution.map(({ grade, count }) => ({ grade, count }));
}

// Helper function to get recent activities
export function getRecentActivities(limit: number = 5): {
  studentName: string;
  experienceTitle: string;
  date: string;
  type: 'completion' | 'started' | 'feedback'
}[] {
  // Sort results by date
  const sortedResults = [...results]
    .sort((a, b) => new Date(b.fecha_completado).getTime() - new Date(a.fecha_completado).getTime())
    .slice(0, limit * 2); // Get more than needed to filter
    
  const activities: {
    studentName: string;
    experienceTitle: string;
    date: string;
    type: 'completion' | 'started' | 'feedback'
  }[] = [];
  
  sortedResults.forEach(result => {
    if (activities.length >= limit) return;
    
    const student = students.find(s => s.codigo === result.estudiante_codigo);
    const experience = experiences.find(e => e.id === result.experiencia_id);
    
    if (student && experience) {
      const type = result.nota !== null ? 'completion' : 'started';
      
      activities.push({
        studentName: `${student.nombre} ${student.apellido}`,
        experienceTitle: experience.titulo,
        date: result.fecha_completado,
        type
      });
    }
  });
  
  return activities.slice(0, limit);
}

// Exportamos functions para usar con PocketBase
export const API = {
  async getProfessor(id: number) {
    // Esta función en un entorno real se conectaría a PocketBase
    return currentUser;
  },
  
  async getCourses(professorId: number) {
    // Esta función en un entorno real se conectaría a PocketBase
    return courses.filter(course => course.profesor_id === professorId);
  },
  
  async getCaseStudies(courseId: number) {
    // Esta función en un entorno real se conectaría a PocketBase
    return caseStudies.filter(cs => cs.curso_id === courseId);
  },
  
  async getExperiences(caseStudyId: number) {
    // Esta función en un entorno real se conectaría a PocketBase
    return experiences.filter(exp => exp.caso_estudio_id === caseStudyId);
  },
  
  async getStudentsForCourse(courseId: number) {
    // Esta función en un entorno real se conectaría a PocketBase
    const studentCodes = enrollments
      .filter(e => e.curso_id === courseId)
      .map(e => e.estudiante_codigo);
      
    return students.filter(s => studentCodes.includes(s.codigo));
  }
};
