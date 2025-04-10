
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, User, BarChart2, MessageSquare, Clock, BookOpen } from 'lucide-react';
import { Student, getStudentAverageGrade, getStudentCompletionPercentage, getStudentPerformanceForCaseStudy } from '@/data/mockData';

interface StudentCardProps {
  student: Student;
  caseStudyId: number;
}

const StudentCard: React.FC<StudentCardProps> = ({ student, caseStudyId }) => {
  const [expanded, setExpanded] = useState(false);
  
  const averageGrade = getStudentAverageGrade(student.codigo, caseStudyId);
  const completion = getStudentCompletionPercentage(student.codigo, caseStudyId);
  const performanceDetails = getStudentPerformanceForCaseStudy(caseStudyId, student.codigo);
  
  // Get the last comment
  const lastComment = performanceDetails
    .filter(p => p.comment)
    .sort((a, b) => b.experienceId - a.experienceId)[0]?.comment || "Sin comentarios";
  
  // Calculate total time dedicated
  const totalTime = performanceDetails.reduce((total, exp) => total + (exp.timeDedicated || 0), 0);
  
  return (
    <div className="edu-card overflow-hidden mb-3 animate-fade-in">
      <div 
        className="p-4 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            {student.avatar_url ? (
              <img 
                src={student.avatar_url} 
                alt={`${student.nombre} ${student.apellido}`} 
                className="h-10 w-10 rounded-full object-cover"
              />
            ) : (
              <div className="bg-edu-primary bg-opacity-10 rounded-full p-2">
                <User className="h-5 w-5 text-edu-primary" />
              </div>
            )}
            
            <div>
              <h4 className="font-medium text-edu-dark">
                {student.nombre} {student.apellido}
              </h4>
              <p className="text-xs text-edu-muted">
                {student.codigo}
                {student.email && <span className="ml-1">• {student.email}</span>}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className={`text-sm font-bold px-2 py-1 rounded-full ${
              averageGrade >= 4 ? 'bg-green-100 text-green-700' :
              averageGrade >= 3 ? 'bg-yellow-100 text-yellow-700' :
              'bg-red-100 text-red-700'
            }`}>
              {averageGrade.toFixed(1)}
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
        </div>
        
        <div className="grid grid-cols-3 mt-4 gap-4">
          <div className="flex items-center space-x-2">
            <BarChart2 className="h-4 w-4 text-edu-secondary" />
            <div>
              <p className="text-xs text-edu-muted">Progreso</p>
              <p className="text-sm font-medium">
                {completion.percentage}%
                <span className="text-xs text-edu-muted ml-1">
                  ({completion.completed}/{completion.total})
                </span>
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-edu-warning" />
            <div>
              <p className="text-xs text-edu-muted">Tiempo Total</p>
              <p className="text-sm font-medium">
                {totalTime} min
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <BookOpen className="h-4 w-4 text-edu-primary" />
            <div>
              <p className="text-xs text-edu-muted">Nota Promedio</p>
              <p className="text-sm font-medium">
                {averageGrade.toFixed(1)}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {expanded && (
        <div className="bg-gray-50 px-4 py-3 border-t border-gray-100 animate-slide-in-right">
          <div className="flex justify-between items-center mb-2">
            <h5 className="text-sm font-medium text-edu-dark">Detalle de Experiencias</h5>
            <div className="text-xs text-edu-primary">
              {completion.completed} completadas de {completion.total}
            </div>
          </div>
          
          <div className="space-y-3">
            {performanceDetails.map((detail) => (
              <div key={detail.experienceId} className="bg-white rounded-md p-3 border border-gray-100">
                <div className="grid grid-cols-12 gap-2 items-center text-sm mb-2">
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
                  
                  <div className="col-span-3 text-center">
                    <span className="text-xs text-edu-muted">
                      {detail.timeDedicated} min • {detail.attempts} {detail.attempts === 1 ? 'intento' : 'intentos'}
                    </span>
                  </div>
                  
                  <div className="col-span-2 text-right">
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div 
                        className={`h-1.5 rounded-full ${
                          detail.grade 
                            ? detail.grade >= 4 
                              ? 'bg-edu-secondary' 
                              : detail.grade >= 3 
                                ? 'bg-edu-warning' 
                                : 'bg-edu-error'
                            : 'bg-edu-muted'
                        }`} 
                        style={{ width: detail.grade ? `${(detail.grade / 5) * 100}%` : '10%' }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                {/* Comentario para cada experiencia */}
                <div className="mt-2 pl-2 border-l-2 border-gray-200">
                  <div className="flex items-start space-x-2">
                    <MessageSquare className="h-3.5 w-3.5 text-edu-primary mt-0.5" />
                    <div>
                      <p className="text-xs text-edu-muted">Comentario:</p>
                      <p className="text-sm">{detail.comment || "Sin comentario para esta experiencia"}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Progress bar */}
          <div className="mt-4 space-y-2">
            <div>
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
        </div>
      )}
    </div>
  );
};

export default StudentCard;
