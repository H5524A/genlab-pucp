
import pb, { useRealData } from './pocketbase';
import * as mockData from '@/data/mockData';

// Exportamos funciones que abstraen el origen de datos
export const getDataService = () => {
  if (useRealData) {
    // Usar PocketBase
    return {
      getCourses: async (professorId: number) => {
        try {
          return await pb.collection('cursos').getList(1, 50, {
            filter: `profesor_id=${professorId}`
          });
        } catch (error) {
          console.error('Error fetching courses:', error);
          // Fallback a datos mock en caso de error
          return mockData.courses.filter(course => course.profesor_id === professorId);
        }
      },
      
      getCaseStudies: async (courseId: number) => {
        try {
          return await pb.collection('casos_estudio').getList(1, 50, {
            filter: `curso_id=${courseId}`
          });
        } catch (error) {
          console.error('Error fetching case studies:', error);
          return mockData.caseStudies.filter(cs => cs.curso_id === courseId);
        }
      },

      getExperiences: async (caseStudyId: number) => {
        try {
          return await pb.collection('experiencias').getList(1, 50, {
            filter: `caso_estudio_id=${caseStudyId}`
          });
        } catch (error) {
          console.error('Error fetching experiences:', error);
          return mockData.experiences.filter(exp => exp.caso_estudio_id === caseStudyId);
        }
      },
      
      // Más funciones según necesidad...
    };
  } else {
    // Usar datos mock
    return {
      getCourses: async (professorId: number) => 
        mockData.courses.filter(course => course.profesor_id === professorId),
      
      getCaseStudies: async (courseId: number) => 
        mockData.caseStudies.filter(cs => cs.curso_id === courseId),
        
      getExperiences: async (caseStudyId: number) => 
        mockData.experiences.filter(exp => exp.caso_estudio_id === caseStudyId),
        
      getStudentsForCourse: async (courseId: number) => {
        const studentCodes = mockData.enrollments
          .filter(e => e.curso_id === courseId)
          .map(e => e.estudiante_codigo);
          
        return mockData.students.filter(s => studentCodes.includes(s.codigo));
      },
      
      getStudentPerformance: (caseStudyId: number, studentCode: string) => 
        mockData.getStudentPerformanceForCaseStudy(caseStudyId, studentCode),
        
      getGradeDistribution: (caseStudyId: number) => 
        mockData.getGradeDistributionForCaseStudy(caseStudyId),
        
      getRecentActivities: (limit: number = 5) => 
        mockData.getRecentActivities(limit),
        
      getDocumentsForExperience: (experienceId: number) => 
        mockData.getDocumentsForExperience(experienceId)
    };
  }
};

// Singleton para acceder fácilmente al servicio de datos
export const dataService = getDataService();
