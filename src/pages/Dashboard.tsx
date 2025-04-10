
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Plus, Book } from 'lucide-react';
import { courses, caseStudies, currentUser } from '@/data/mockData';
import CaseStudyCard from '@/components/CaseStudyCard';
import { toast } from 'sonner';
import CreateCaseStudyModal from '@/components/CreateCaseStudyModal';

const Dashboard = () => {
  const navigate = useNavigate();
  // Use the first course as the current course
  const currentCourse = courses[0];
  // Filter case studies for the current course
  const courseCaseStudies = caseStudies.filter(cs => cs.curso_id === currentCourse.id);
  
  const [isCreateCaseStudyModalOpen, setIsCreateCaseStudyModalOpen] = useState(false);

  const handleCreateCaseStudy = (caseStudyData: any) => {
    toast.success("Nuevo caso de estudio creado exitosamente");
    setIsCreateCaseStudyModalOpen(false);
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
              onClick={() => setIsCreateCaseStudyModalOpen(true)}
              className="btn-primary flex items-center space-x-1"
            >
              <Plus className="h-4 w-4" />
              <span>Crear Caso</span>
            </button>
          </div>

          {courseCaseStudies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                onClick={() => setIsCreateCaseStudyModalOpen(true)}
                className="btn-primary flex items-center space-x-1 mx-auto"
              >
                <Plus className="h-4 w-4" />
                <span>Crear Caso</span>
              </button>
            </div>
          )}
        </div>

        {/* Create Case Study Modal */}
        <CreateCaseStudyModal
          cursoId={currentCourse.id}
          cursoNombre={currentCourse.nombre}
          isOpen={isCreateCaseStudyModalOpen}
          onClose={() => setIsCreateCaseStudyModalOpen(false)}
          onSave={handleCreateCaseStudy}
        />
      </main>
    </div>
  );
};

export default Dashboard;
