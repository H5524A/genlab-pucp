
import PocketBase from 'pocketbase';

// Creamos una instancia singleton de PocketBase
const pb = new PocketBase('http://127.0.0.1:8090'); // Puerto por defecto de PocketBase local

export default pb;

// Función auxiliar para verificar si estamos usando datos reales o estáticos
export const useRealData = false; // Cambiar a true cuando quieras usar PocketBase

// Funciones para interactuar con las colecciones
export const fetchCaseStudies = async (cursoId?: number) => {
  if (!useRealData) return [];
  
  try {
    const filter = cursoId ? `curso_id=${cursoId}` : '';
    const records = await pb.collection('casos_estudio').getList(1, 50, {
      filter,
      sort: '-created',
    });
    return records.items;
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return [];
  }
};

export const fetchExperiences = async (caseStudyId?: number) => {
  if (!useRealData) return [];
  
  try {
    const filter = caseStudyId ? `caso_estudio_id=${caseStudyId}` : '';
    const records = await pb.collection('experiencias').getList(1, 100, {
      filter,
      sort: '-created',
    });
    return records.items;
  } catch (error) {
    console.error('Error fetching experiences:', error);
    return [];
  }
};

export const fetchStudentPerformance = async (caseStudyId: number, studentCode: string) => {
  if (!useRealData) return [];
  
  try {
    const resultados = await pb.collection('resultados').getList(1, 100, {
      filter: `experiencia.caso_estudio_id=${caseStudyId} && estudiante_codigo="${studentCode}"`,
      expand: 'experiencia',
    });
    return resultados.items;
  } catch (error) {
    console.error('Error fetching student performance:', error);
    return [];
  }
};

export const createOrUpdateCaseStudy = async (caseStudyData: any, id?: string) => {
  if (!useRealData) return { id: 'mock-id', ...caseStudyData };
  
  try {
    if (id) {
      // Update existing
      return await pb.collection('casos_estudio').update(id, caseStudyData);
    } else {
      // Create new
      return await pb.collection('casos_estudio').create(caseStudyData);
    }
  } catch (error) {
    console.error('Error saving case study:', error);
    throw error;
  }
};

export const createOrUpdateExperience = async (experienceData: any, id?: string) => {
  if (!useRealData) return { id: 'mock-id', ...experienceData };
  
  try {
    if (id) {
      // Update existing
      return await pb.collection('experiencias').update(id, experienceData);
    } else {
      // Create new
      return await pb.collection('experiencias').create(experienceData);
    }
  } catch (error) {
    console.error('Error saving experience:', error);
    throw error;
  }
};

export const deleteExperience = async (id: string) => {
  if (!useRealData) return true;
  
  try {
    await pb.collection('experiencias').delete(id);
    return true;
  } catch (error) {
    console.error('Error deleting experience:', error);
    throw error;
  }
};
