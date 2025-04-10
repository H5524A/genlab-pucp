
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, User, BarChart2, MessageSquare } from 'lucide-react';
import { Student, getStudentAverageGrade, getStudentCompletionPercentage, getStudentPerformanceForCaseStudy } from '@/data/mockData';

interface StudentCardProps {
  student: Student;
  caseStudyId: number;
}

const StudentCard: React.FC<StudentCardProps> = ({ student, caseStudyId }) => {
  const [expanded, setExpanded] = useState(false);
  
  const averageGrade = getStudentAverageGrade(student.codigo);
  const completion = getStudentCompletionPercentage(student.codigo, caseStudyId);
  const performanceDetails = getStudentPerformanceForCaseStudy(caseStudyId, student.codigo);
  
  // Get the last comment
  const lastComment = performanceDetails
    .filter(p => p.comment)
    .sort((a, b) => b.experienceId - a.experienceId)[0]?.comment || "Sin comentarios";
  
  return (
    <div className="edu-card overflow-hidden mb-3 animate-fade-in">
      <div 
        className="p-4 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-edu-primary bg-opacity-10 rounded-full p-2">
              <User className="h-5 w-5 text-edu-primary" />
            </div>
            
            <div>
              <h4 className="font-medium text-edu-dark">
                {student.nombre} {student.apellido}
              </h4>
              <p className="text-xs text-edu-muted">Código: {student.codigo}</p>
            </div>
          </div>
          
          <button
            className="text-edu-muted hover:text-edu-primary transition-colors"
            aria-label={expanded ? "Colapsar" : "Expandir"}
          >
            {expanded ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </button>
        </div>
        
        <div className="grid grid-cols-2 mt-3 gap-4">
          <div className="flex items-center space-x-2">
            <BarChart2 className="h-4 w-4 text-edu-secondary" />
            <div>
              <p className="text-xs text-edu-muted">Progreso General</p>
              <p className="text-sm font-medium">
                {completion.completed} de {completion.total} completadas 
                <span className="text-xs text-edu-secondary ml-1">
                  ({completion.percentage}%)
                </span>
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <MessageSquare className="h-4 w-4 text-edu-primary" />
            <div>
              <p className="text-xs text-edu-muted">Último Comentario</p>
              <p className="text-sm line-clamp-1">{lastComment}</p>
            </div>
          </div>
        </div>
      </div>
      
      {expanded && (
        <div className="bg-gray-50 px-4 py-3 border-t border-gray-100 animate-slide-in-right">
          <h5 className="text-sm font-medium text-edu-dark mb-2">Detalle de Experiencias</h5>
          
          <div className="space-y-3">
            {performanceDetails.map((detail) => (
              <div 
                key={detail.experienceId} 
                className="grid grid-cols-12 gap-2 items-center text-sm"
              >
                <div className="col-span-5">
                  <p className="font-medium truncate">{detail.experienceTitle}</p>
                </div>
                
                <div className="col-span-2 text-center">
                  {detail.grade ? (
                    <span className={`font-medium ${
                      detail.grade >= 4 
                        ? 'text-edu-secondary' 
                        : detail.grade >= 3 
                          ? 'text-edu-warning' 
                          : 'text-edu-error'
                    }`}>
                      {detail.grade.toFixed(1)}
                    </span>
                  ) : (
                    <span className="text-edu-muted">Pendiente</span>
                  )}
                </div>
                
                <div className="col-span-5">
                  <p className="text-edu-muted text-xs truncate">
                    {detail.comment || "--"}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Progress bar */}
          <div className="mt-4">
            <div className="flex justify-between text-xs mb-1">
              <span className="font-medium text-edu-dark">Progreso Total</span>
              <span className="text-edu-secondary">{completion.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-edu-secondary h-2 rounded-full" 
                style={{ width: `${completion.percentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentCard;
