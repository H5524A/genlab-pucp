
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
  imagen_url: string;
  curso_id: number;
}

export interface Experience {
  id: number;
  titulo: string;
  descripcion: string;
  imagen_preview_url: string;
  fecha_creacion: string;
  caso_estudio_id: number;
}

export interface Document {
  id: number;
  nombre_archivo: string;
  tipo_archivo: string;
  url_archivo: string;
  experiencia_id: number;
}

export interface Student {
  codigo: string;
  nombre: string;
  apellido: string;
}

export interface Enrollment {
  id: number;
  estudiante_codigo: string;
  curso_id: number;
}

export interface Result {
  id: number;
  estudiante_codigo: string;
  experiencia_id: number;
  nota: number | null;
  comentario_agente: string | null;
  fecha_completado: string;
}

// Mock Current User (Professor)
export const currentUser: Professor = {
  id: 1,
  nombre: "María",
  apellido: "Rodríguez",
  email: "maria.rodriguez@universidad.edu"
};

// Mock Courses
export const courses: Course[] = [
  {
    id: 1,
    nombre: "Ingeniería de Materiales",
    descripcion: "Estudio de las propiedades y aplicaciones de materiales en ingeniería",
    profesor_id: 1
  }
];

// Mock Case Studies
export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    titulo: "Materiales Compuestos",
    descripcion_breve: "Análisis de materiales compuestos y sus aplicaciones en construcción",
    imagen_url: "https://images.unsplash.com/photo-1518736346786-337db9af3dce?q=80&w=2070",
    curso_id: 1
  },
  {
    id: 2,
    titulo: "Materiales Semiconductores",
    descripcion_breve: "Estudio de semiconductores y su importancia en la electrónica moderna",
    imagen_url: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
    curso_id: 1
  }
];

// Mock Experiences for Case Study 1
export const experiences: Experience[] = [
  {
    id: 1,
    titulo: "Análisis de Resistencia",
    descripcion: "Estudio sobre la resistencia de materiales compuestos bajo distintas condiciones",
    imagen_preview_url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070",
    fecha_creacion: "2025-04-01T10:00:00Z",
    caso_estudio_id: 1
  },
  {
    id: 2,
    titulo: "Aplicaciones en Aeronáutica",
    descripcion: "Exploración de aplicaciones de materiales compuestos en la industria aeronáutica",
    imagen_preview_url: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=2073",
    fecha_creacion: "2025-04-02T14:30:00Z",
    caso_estudio_id: 1
  },
  {
    id: 3,
    titulo: "Durabilidad y Mantenimiento",
    descripcion: "Evaluación de la durabilidad y requisitos de mantenimiento de estructuras con materiales compuestos",
    imagen_preview_url: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=2070",
    fecha_creacion: "2025-04-03T09:15:00Z",
    caso_estudio_id: 1
  },
  {
    id: 4,
    titulo: "Innovaciones Recientes",
    descripcion: "Revisión de innovaciones recientes en el campo de los materiales compuestos",
    imagen_preview_url: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2070",
    fecha_creacion: "2025-04-04T16:45:00Z",
    caso_estudio_id: 1
  },
  // Case Study 2 Experiences
  {
    id: 5,
    titulo: "Principios Básicos",
    descripcion: "Introducción a los principios fundamentales de los semiconductores",
    imagen_preview_url: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069",
    fecha_creacion: "2025-04-05T11:00:00Z",
    caso_estudio_id: 2
  },
  {
    id: 6,
    titulo: "Fabricación de Chips",
    descripcion: "Proceso de fabricación de chips semiconductores y tecnologías actuales",
    imagen_preview_url: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=2070",
    fecha_creacion: "2025-04-06T13:20:00Z",
    caso_estudio_id: 2
  },
  {
    id: 7,
    titulo: "Avances en Nanotecnología",
    descripcion: "Explorando los avances en nanotecnología aplicada a semiconductores",
    imagen_preview_url: "https://images.unsplash.com/photo-1581093196277-9f508cc3e749?q=80&w=2070",
    fecha_creacion: "2025-04-07T10:30:00Z",
    caso_estudio_id: 2
  },
  {
    id: 8,
    titulo: "Futuro de los Semiconductores",
    descripcion: "Análisis de tendencias futuras y desarrollos prometedores en el campo",
    imagen_preview_url: "https://images.unsplash.com/photo-1564383424695-9910653f0774?q=80&w=2070",
    fecha_creacion: "2025-04-08T15:10:00Z",
    caso_estudio_id: 2
  }
];

// Generate 20 Mock Students
export const students: Student[] = Array.from({ length: 20 }, (_, i) => {
  const id = (i + 1).toString().padStart(6, '0');
  const firstNames = ["Juan", "Ana", "Carlos", "Sofía", "Diego", "Valentina", "Andrés", "Lucía", "Gabriel", "Camila"];
  const lastNames = ["González", "López", "Martínez", "Rodríguez", "Pérez", "Sánchez", "Ramírez", "Torres", "Flores", "Díaz"];
  
  return {
    codigo: `EST${id}`,
    nombre: firstNames[Math.floor(Math.random() * firstNames.length)],
    apellido: lastNames[Math.floor(Math.random() * lastNames.length)]
  };
});

// Enrollments - All students in the course
export const enrollments: Enrollment[] = students.map((student, i) => ({
  id: i + 1,
  estudiante_codigo: student.codigo,
  curso_id: 1
}));

// Generate results for each student and experience combination (some will be null/pending)
export const results: Result[] = [];

// For each student
students.forEach(student => {
  // For each experience
  experiences.forEach(exp => {
    // 75% chance of having completed the experience
    if (Math.random() < 0.75) {
      results.push({
        id: results.length + 1,
        estudiante_codigo: student.codigo,
        experiencia_id: exp.id,
        nota: +(Math.random() * 4 + 1).toFixed(1), // Random grade between 1.0 and 5.0
        comentario_agente: getRandomComment(),
        fecha_completado: getRandomPastDate()
      });
    } else {
      // Not completed yet
      results.push({
        id: results.length + 1,
        estudiante_codigo: student.codigo,
        experiencia_id: exp.id,
        nota: null,
        comentario_agente: null,
        fecha_completado: getRandomPastDate() // They started but didn't finish
      });
    }
  });
});

// Helper function to get random past date
function getRandomPastDate(): string {
  const now = new Date();
  const pastDate = new Date(now.getTime() - Math.random() * 30 * 24 * 60 * 60 * 1000); // Random date in the past 30 days
  return pastDate.toISOString();
}

// Helper function to get random comment
function getRandomComment(): string {
  const comments = [
    "Excelente análisis, muy completo.",
    "Buen trabajo, pero falta profundidad en algunos conceptos.",
    "Necesita mejorar la estructura de la presentación.",
    "Destacable manejo de los conceptos técnicos.",
    "Conclusiones muy bien fundamentadas.",
    "Falta mejorar la claridad en la explicación de algunos procesos.",
    "Muy creativo el enfoque utilizado.",
    "Excelente uso de ejemplos prácticos.",
    "Hay aspectos teóricos que necesitan revisión.",
    "Sobresaliente integración de conceptos."
  ];
  
  return comments[Math.floor(Math.random() * comments.length)];
}

// Helper function to get student performance data for a case study
export function getStudentPerformanceForCaseStudy(caseStudyId: number, studentCode: string): {
  experienceId: number,
  experienceTitle: string,
  grade: number | null,
  comment: string | null
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
      comment: result?.comentario_agente || null
    };
  });
}

// Helper function to get average grade for a student across all experiences
export function getStudentAverageGrade(studentCode: string): number {
  const studentResults = results.filter(r => 
    r.estudiante_codigo === studentCode && 
    r.nota !== null
  );
  
  if (studentResults.length === 0) return 0;
  
  const sum = studentResults.reduce((acc, curr) => acc + (curr.nota || 0), 0);
  return +(sum / studentResults.length).toFixed(1);
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
