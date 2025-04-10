
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Book, Calendar, Layers } from 'lucide-react';
import { CaseStudy, experiences } from '@/data/mockData';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {
  // Contar experiencias para este caso de estudio
  const experienceCount = experiences.filter(
    exp => exp.caso_estudio_id === caseStudy.id
  ).length;
  
  // Formatear fecha de creación si existe
  const formattedDate = caseStudy.fecha_creacion 
    ? formatDistanceToNow(new Date(caseStudy.fecha_creacion), { 
        addSuffix: true, 
        locale: es 
      })
    : null;
    
  return (
    <Link 
      to={`/case-study/${caseStudy.id}`}
      className="edu-card group block overflow-hidden animate-scale-in"
    >
      <div className="relative h-40 overflow-hidden">
        <img 
          src={caseStudy.imagen_url} 
          alt={caseStudy.titulo} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center space-x-1">
            <Book className="h-4 w-4 text-white" />
            <span className="text-xs text-white font-medium">Caso de Estudio</span>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg text-edu-dark mb-2">{caseStudy.titulo}</h3>
        <p className="text-edu-muted text-sm line-clamp-2 mb-3">{caseStudy.descripcion_breve}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            <div className="text-xs text-edu-primary font-medium bg-blue-50 px-2 py-1 rounded-full flex items-center">
              <Layers className="h-3 w-3 mr-1" />
              {experienceCount} Experiencias
            </div>
            
            {formattedDate && (
              <div className="text-xs text-edu-muted flex items-center">
                <Calendar className="h-3 w-3 mr-1" />
                {formattedDate}
              </div>
            )}
          </div>
          
          <div className="flex items-center text-edu-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
            <span>Ver detalles</span>
            <ChevronRight className="h-4 w-4 ml-1" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CaseStudyCard;
