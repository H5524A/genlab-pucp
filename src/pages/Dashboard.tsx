
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Plus, Book } from 'lucide-react';
import { courses, caseStudies, currentUser } from '@/data/mockData';
import CaseStudyCard from '@/components/CaseStudyCard';
import { toast } from 'sonner';

const Dashboard = () => {
  const navigate = useNavigate();
  // Use the first course as the current course
  const currentCourse = courses[0];
  // Filter case studies for the current course
  const courseCaseStudies = caseStudies.filter(cs => cs.curso_id === currentCourse.id);

  const handleCreateCaseStudy = () => {
    toast.info("Funcionalidad de crear caso de estudio en desarrollo");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Course Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <Briefcase className="h-5 w-5 text-edu-primary" />
            <h2 className="text-2xl font-semibold text-edu-dark">
              {currentCourse.nombre}
            </h2>
          </div>
          
          <p className="text-edu-muted max-w-3xl">
            {currentCourse.descripcion}
          </p>
          
          <div className="mt-4 flex items-center space-x-2 text-sm">
            <span className="text-edu-dark">Profesor:</span>
            <span className="text-edu-muted">
              {currentUser.nombre} {currentUser.apellido}
            </span>
          </div>
        </div>

        {/* Cases Studies Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2">
              <Book className="h-5 w-5 text-edu-primary" />
              <h3 className="text-xl font-semibold text-edu-dark">Casos de Estudio</h3>
            </div>
            
            <button 
              onClick={handleCreateCaseStudy}
              className="btn-primary flex items-center space-x-1"
            >
              <Plus className="h-4 w-4" />
              <span>Crear Caso</span>
            </button>
          </div>

          {courseCaseStudies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courseCaseStudies.map((caseStudy) => (
                <CaseStudyCard 
                  key={caseStudy.id} 
                  caseStudy={caseStudy} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center p-8 border border-dashed border-gray-300 rounded-lg">
              <Book className="h-12 w-12 text-edu-muted mx-auto mb-4" />
              <h4 className="text-lg font-medium text-edu-dark mb-2">
                No hay casos de estudio
              </h4>
              <p className="text-edu-muted mb-4">
                Crea tu primer caso de estudio para este curso
              </p>
              <button 
                onClick={handleCreateCaseStudy}
                className="btn-primary flex items-center space-x-1 mx-auto"
              >
                <Plus className="h-4 w-4" />
                <span>Crear Caso</span>
              </button>
            </div>
          )}
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="edu-card p-6">
            <h4 className="text-lg font-semibold text-edu-dark mb-3">Resumen del Curso</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-edu-muted">Casos de Estudio</span>
                  <span className="font-medium">{courseCaseStudies.length}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div className="bg-edu-primary h-1.5 rounded-full" style={{ width: '33%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-edu-muted">Experiencias Creadas</span>
                  <span className="font-medium">8</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div className="bg-edu-secondary h-1.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-edu-muted">Estudiantes Activos</span>
                  <span className="font-medium">20</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div className="bg-edu-warning h-1.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="edu-card p-6">
            <h4 className="text-lg font-semibold text-edu-dark mb-3">Rendimiento Estudiantil</h4>
            <div className="flex items-end justify-between h-32">
              <div className="flex flex-col items-center">
                <div className="w-8 bg-edu-primary rounded-t h-16"></div>
                <span className="text-xs mt-1 text-edu-muted">A</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 bg-edu-primary rounded-t h-24"></div>
                <span className="text-xs mt-1 text-edu-muted">B</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 bg-edu-primary rounded-t h-20"></div>
                <span className="text-xs mt-1 text-edu-muted">C</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 bg-edu-primary rounded-t h-12"></div>
                <span className="text-xs mt-1 text-edu-muted">D</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 bg-edu-primary rounded-t h-8"></div>
                <span className="text-xs mt-1 text-edu-muted">F</span>
              </div>
            </div>
            <p className="text-xs text-center mt-4 text-edu-muted">
              Distribución de calificaciones
            </p>
          </div>
          
          <div className="edu-card p-6">
            <h4 className="text-lg font-semibold text-edu-dark mb-3">Actividad Reciente</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="h-2 w-2 rounded-full bg-edu-secondary mt-1.5"></div>
                <div>
                  <p className="text-sm">Juan López completó <span className="font-medium">Análisis de Resistencia</span></p>
                  <p className="text-xs text-edu-muted">Hace 2 horas</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="h-2 w-2 rounded-full bg-edu-secondary mt-1.5"></div>
                <div>
                  <p className="text-sm">Ana González completó <span className="font-medium">Aplicaciones en Aeronáutica</span></p>
                  <p className="text-xs text-edu-muted">Hace 3 horas</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="h-2 w-2 rounded-full bg-edu-secondary mt-1.5"></div>
                <div>
                  <p className="text-sm">Carlos Martínez completó <span className="font-medium">Durabilidad y Mantenimiento</span></p>
                  <p className="text-xs text-edu-muted">Hace 5 horas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
