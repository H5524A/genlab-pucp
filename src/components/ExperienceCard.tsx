
import React from 'react';
import { CalendarDays, FileText, Edit, Trash2 } from 'lucide-react';
import { Experience } from '@/data/mockData';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

interface ExperienceCardProps {
  experience: Experience;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ 
  experience, 
  onEdit, 
  onDelete 
}) => {
  // Format the date to display in Spanish
  const formattedDate = formatDistanceToNow(
    new Date(experience.fecha_creacion),
    { addSuffix: true, locale: es }
  );

  return (
    <div className="edu-card flex animate-fade-in">
      <div className="w-1/4 min-w-[120px]">
        <img 
          src={experience.imagen_preview_url} 
          alt={experience.titulo}
          className="w-full h-full object-cover rounded-l-xl"
        />
      </div>
      
      <div className="flex-1 p-4">
        <div className="flex justify-between">
          <h3 className="font-semibold text-edu-dark">{experience.titulo}</h3>
          
          <div className="flex space-x-2">
            {onEdit && (
              <button 
                onClick={() => onEdit(experience.id)}
                className="text-edu-muted hover:text-edu-primary transition-colors"
                aria-label="Editar"
              >
                <Edit className="h-4 w-4" />
              </button>
            )}
            
            {onDelete && (
              <button 
                onClick={() => onDelete(experience.id)}
                className="text-edu-muted hover:text-edu-error transition-colors"
                aria-label="Eliminar"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
        
        <p className="text-sm text-edu-muted mt-1 line-clamp-2">{experience.descripcion}</p>
        
        <div className="flex items-center space-x-4 mt-3">
          <div className="flex items-center text-xs text-edu-muted">
            <CalendarDays className="h-3 w-3 mr-1" />
            <span>{formattedDate}</span>
          </div>
          
          <div className="flex items-center text-xs text-edu-muted">
            <FileText className="h-3 w-3 mr-1" />
            <span>3 archivos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
