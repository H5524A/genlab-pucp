
import React, { useState } from 'react';
import { X, Wand2 } from 'lucide-react';
import FileUpload from './FileUpload';
import { toast } from 'sonner';

interface CreateExperienceModalProps {
  caseStudyId: number;
  caseStudyTitle: string;
  isOpen: boolean;
  onClose: () => void;
  onSave: (experienceData: any) => void;
}

const CreateExperienceModal: React.FC<CreateExperienceModalProps> = ({
  caseStudyId,
  caseStudyTitle,
  isOpen,
  onClose,
  onSave
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [previewImage, setPreviewImage] = useState<File | null>(null);
  const [documents, setDocuments] = useState<File[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      toast.error("El título es obligatorio");
      return;
    }
    
    if (!previewImage) {
      toast.error("La imagen de vista previa es obligatoria");
      return;
    }

    // Create experience data
    const experienceData = {
      titulo: title,
      descripcion: description,
      imagen_preview_url: URL.createObjectURL(previewImage),
      caso_estudio_id: caseStudyId,
      fecha_creacion: new Date().toISOString(),
      documentos: documents
    };

    onSave(experienceData);
    handleClose();
    toast.success("Experiencia creada exitosamente");
  };

  const handleClose = () => {
    // Reset form
    setTitle('');
    setDescription('');
    setPreviewImage(null);
    setDocuments([]);
    onClose();
  };

  const handleGenerateWithAI = () => {
    if (documents.length === 0) {
      toast.error("Sube al menos un documento para generar con IA");
      return;
    }

    setIsGenerating(true);

    // Simulate AI generation
    setTimeout(() => {
      setTitle("Análisis de propiedades térmicas");
      setDescription("Estudio detallado sobre las propiedades térmicas de los materiales compuestos y su comportamiento bajo condiciones extremas de temperatura.");
      setIsGenerating(false);
      toast.success("Contenido generado con IA exitosamente");
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="flex justify-between items-center p-4 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-edu-dark">
            Nueva Experiencia
          </h2>
          <button 
            onClick={handleClose}
            className="text-edu-muted hover:text-edu-dark transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-6">
            <div className="bg-blue-50 rounded-lg p-3 mb-5 border border-blue-100">
              <p className="text-sm text-edu-primary">
                Creando experiencia para: <span className="font-medium">{caseStudyTitle}</span>
              </p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-edu-dark mb-1">
                Título
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input-field"
                placeholder="Ej: Análisis de Resistencia"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-edu-dark mb-1">
                Descripción
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="input-field min-h-[100px]"
                placeholder="Describe brevemente esta experiencia..."
              />
            </div>

            <div className="mb-4">
              <FileUpload
                label="Imagen de Vista Previa"
                description="Selecciona una imagen que represente esta experiencia (máx. 5MB)"
                multiple={false}
                accept="image/*"
                onFilesSelected={(files) => setPreviewImage(files[0])}
              />
            </div>

            <div className="mb-2">
              <FileUpload
                label="Documentos"
                description="Sube documentos relacionados con esta experiencia (PDFs, DOCs, etc.)"
                multiple={true}
                accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx"
                onFilesSelected={(files) => setDocuments(files)}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <button
              type="button"
              onClick={handleGenerateWithAI}
              disabled={isGenerating}
              className="btn-secondary flex items-center justify-center gap-2"
            >
              {isGenerating ? (
                <>
                  <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Generando...</span>
                </>
              ) : (
                <>
                  <Wand2 className="h-4 w-4" />
                  <span>Generar con IA</span>
                </>
              )}
            </button>
            
            <button
              type="button"
              onClick={handleClose}
              className="btn-outline"
            >
              Cancelar
            </button>
            
            <button
              type="submit"
              className="btn-primary"
            >
              Guardar Experiencia
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateExperienceModal;
