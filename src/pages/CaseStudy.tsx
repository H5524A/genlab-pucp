
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Book, Layers, Users, Plus } from 'lucide-react';
import { caseStudies, experiences, students, enrollments, getStudentCompletionPercentage } from '@/data/mockData';
import ExperienceCard from '@/components/ExperienceCard';
import StudentCard from '@/components/StudentCard';
import CreateExperienceModal from '@/components/CreateExperienceModal';
import CreateCaseStudyModal from '@/components/CreateCaseStudyModal';
import { toast } from 'sonner';

type TabType = 'experiences' | 'students';

const CaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState<TabType>('experiences');
  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);
  const [isCaseStudyModalOpen, setIsCaseStudyModalOpen] = useState(false);
  const [editingExperienceId, setEditingExperienceId] = useState<number | null>(null);
  
  // Find the current case study
  const caseStudyId = Number(id);
  const caseStudy = caseStudies.find(cs => cs.id === caseStudyId);
  
  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-edu-dark mb-4">
            Caso de estudio no encontrado
          </h2>
          <p className="text-edu-muted mb-6">
            El caso de estudio que buscas no existe o ha sido eliminado.
          </p>
          <button 
            onClick={() => navigate('/dashboard')}
            className="btn-primary"
          >
            Volver al Dashboard
          </button>
        </div>
      </div>
    );
  }
  
  // Filter experiences for this case study
  const caseExperiences = experiences.filter(exp => exp.caso_estudio_id === caseStudyId);
  
  // Get enrolled students for the course
  const enrolledStudents = enrollments
    .filter(enrollment => enrollment.curso_id === caseStudy.curso_id)
    .map(enrollment => {
      const student = students.find(s => s.codigo === enrollment.estudiante_codigo);
      return student;
    })
    .filter(Boolean) as typeof students;
  
  const handleEditExperience = (experienceId: number) => {
    const experienceToEdit = experiences.find(exp => exp.id === experienceId);
    if (experienceToEdit) {
      setEditingExperienceId(experienceId);
      setIsExperienceModalOpen(true);
    } else {
      toast.error(`No se encontró la experiencia ${experienceId}`);
    }
  };
  
  const handleDeleteExperience = (experienceId: number) => {
    toast.success(`Experiencia ${experienceId} eliminada`);
  };
  
  const handleCreateOrUpdateExperience = (experienceData: any) => {
    if (editingExperienceId) {
      toast.success(`Experiencia ${editingExperienceId} actualizada exitosamente`);
      setEditingExperienceId(null);
    } else {
      toast.success("Nueva experiencia creada exitosamente");
    }
    setIsExperienceModalOpen(false);
  };
  
  const handleCreateCaseStudy = (caseStudyData: any) => {
    toast.success("Nuevo caso de estudio creado exitosamente");
    setIsCaseStudyModalOpen(false);
  };
  
  const getExperienceToEdit = () => {
    if (!editingExperienceId) return null;
    return experiences.find(exp => exp.id === editingExperienceId) || null;
  };

  const handleExperienceModalClose = () => {
    setEditingExperienceId(null);
    setIsExperienceModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => navigate('/dashboard')}
            className="flex items-center text-edu-muted hover:text-edu-primary transition-colors"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            <span>Volver a Cursos</span>
          </button>
        </div>
      </div>
      
      {/* Case Study Header */}
      <div className="relative h-48 sm:h-64 bg-edu-primary overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${caseStudy.imagen_url})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-edu-dark/60 to-edu-primary/90"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-6">
          <div className="flex items-center space-x-2 text-white text-opacity-90 mb-2">
            <Book className="h-4 w-4" />
            <span className="text-sm">Caso de Estudio</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            {caseStudy.titulo}
          </h1>
          <p className="text-white text-opacity-90 max-w-2xl">
            {caseStudy.descripcion_breve}
          </p>
        </div>
      </div>
      
      {/* Tabs Navigation */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              className={`flex items-center px-1 py-3 border-b-2 font-medium text-sm ${
                activeTab === 'experiences'
                  ? 'border-edu-primary text-edu-primary'
                  : 'border-transparent text-edu-muted hover:text-edu-dark hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('experiences')}
            >
              <Layers className="h-4 w-4 mr-2" />
              <span>Experiencias</span>
            </button>
            
            <button
              className={`flex items-center px-1 py-3 border-b-2 font-medium text-sm ${
                activeTab === 'students'
                  ? 'border-edu-primary text-edu-primary'
                  : 'border-transparent text-edu-muted hover:text-edu-dark hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('students')}
            >
              <Users className="h-4 w-4 mr-2" />
              <span>Estudiantes</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {activeTab === 'experiences' ? (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-edu-dark">
                Experiencias ({caseExperiences.length})
              </h2>
              
              <div className="flex space-x-3">
                <button 
                  onClick={() => setIsCaseStudyModalOpen(true)}
                  className="btn-secondary flex items-center space-x-2"
                >
                  <Plus className="h-4 w-4" />
                  <span>Editar Caso de Estudio</span>
                </button>
                <button 
                  onClick={() => {
                    setEditingExperienceId(null);
                    setIsExperienceModalOpen(true);
                  }}
                  className="btn-primary flex items-center space-x-2"
                >
                  <Plus className="h-4 w-4" />
                  <span>Crear Experiencia</span>
                </button>
              </div>
            </div>
            
            {caseExperiences.length > 0 ? (
              <div className="grid gap-6">
                {caseExperiences.map((experience) => (
                  <ExperienceCard
                    key={experience.id}
                    experience={experience}
                    onEdit={handleEditExperience}
                    onDelete={handleDeleteExperience}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center p-12 border border-dashed border-gray-300 rounded-lg">
                <Layers className="h-12 w-12 text-edu-muted mx-auto mb-4" />
                <h3 className="text-lg font-medium text-edu-dark mb-2">
                  No hay experiencias creadas
                </h3>
                <p className="text-edu-muted mb-6">
                  Comienza creando tu primera experiencia para este caso de estudio
                </p>
                <button 
                  onClick={() => setIsExperienceModalOpen(true)}
                  className="btn-primary flex items-center space-x-2 mx-auto"
                >
                  <Plus className="h-4 w-4" />
                  <span>Crear Experiencia</span>
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-edu-dark">
                Estudiantes ({enrolledStudents.length})
              </h2>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm text-edu-muted">
                  Filtrando por Caso de Estudio:
                </span>
                <span className="text-sm font-medium text-edu-dark">
                  {caseStudy.titulo}
                </span>
              </div>
            </div>
            
            <div className="grid gap-4">
              {enrolledStudents.map((student) => (
                <StudentCard 
                  key={student.codigo} 
                  student={student}
                  caseStudyId={caseStudyId}
                />
              ))}
            </div>
          </>
        )}
      </main>
      
      {/* Experience Modal (Create or Edit) */}
      <CreateExperienceModal
        caseStudyId={caseStudyId}
        caseStudyTitle={caseStudy.titulo}
        isOpen={isExperienceModalOpen}
        onClose={handleExperienceModalClose}
        onSave={handleCreateOrUpdateExperience}
      />
      
      {/* Create Case Study Modal */}
      <CreateCaseStudyModal
        cursoId={caseStudy.curso_id}
        cursoNombre="Curso Actual" // Idealmente esto vendría de los datos del curso
        isOpen={isCaseStudyModalOpen}
        onClose={() => setIsCaseStudyModalOpen(false)}
        onSave={handleCreateCaseStudy}
        caseStudy={caseStudy}
      />
    </div>
  );
};

export default CaseStudy;
