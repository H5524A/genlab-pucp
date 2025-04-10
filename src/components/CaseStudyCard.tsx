
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Book, Calendar, Layers } from 'lucide-react';
import { CaseStudy, experiences } from '@/data/mockData';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

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
      className="block transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg"
    >
      <Card className="overflow-hidden h-full border-0 shadow-md bg-white">
        <div className="relative h-60 overflow-hidden">
          <img 
            src={caseStudy.imagen_url} 
            alt={caseStudy.titulo} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex items-center space-x-1">
              <Book className="h-4 w-4 text-white" />
              <span className="text-xs text-white font-medium">Caso de Estudio</span>
            </div>
          </div>
        </div>
        
        <CardContent className="p-5">
          <h3 className="font-semibold text-xl text-edu-dark mb-3">{caseStudy.titulo}</h3>
          <p className="text-edu-muted text-sm mb-4 line-clamp-3">{caseStudy.descripcion_breve}</p>
        </CardContent>
        
        <CardFooter className="px-5 pb-5 pt-0 flex justify-between items-center">
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
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CaseStudyCard;
