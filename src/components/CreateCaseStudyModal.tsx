
import React from 'react';
import { useForm } from 'react-hook-form';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import FileUpload from '@/components/FileUpload';
import { BookOpen, Plus, X } from 'lucide-react';

interface CreateCaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: CaseStudyFormData) => void;
  cursoId: number;
  cursoNombre: string;
  caseStudy?: {
    id: number;
    titulo: string;
    descripcion_breve: string;
    imagen_url?: string;
  } | null;
}

interface CaseStudyFormData {
  titulo: string;
  descripcion_breve: string;
  imagen_url?: string;
}

const CreateCaseStudyModal: React.FC<CreateCaseStudyModalProps> = ({
  isOpen,
  onClose,
  onSave,
  cursoId,
  cursoNombre,
  caseStudy = null
}) => {
  const form = useForm<CaseStudyFormData>({
    defaultValues: {
      titulo: caseStudy?.titulo || '',
      descripcion_breve: caseStudy?.descripcion_breve || '',
      imagen_url: caseStudy?.imagen_url || ''
    }
  });

  const handleSubmit = (data: CaseStudyFormData) => {
    onSave({
      ...data,
      imagen_url: data.imagen_url || '/placeholder.svg' // Use placeholder if no image is uploaded
    });
  };

  const isEditing = !!caseStudy;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-edu-primary" />
            {isEditing ? 'Editar Caso de Estudio' : 'Crear Nuevo Caso de Estudio'}
          </DialogTitle>
          <DialogDescription>
            {isEditing 
              ? `Modifica la información del caso de estudio existente`
              : `Crea un nuevo caso de estudio para el curso ${cursoNombre}`}
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="titulo"
              rules={{ required: 'El título es obligatorio' }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título del Caso de Estudio</FormLabel>
                  <FormControl>
                    <Input placeholder="Ej: Estudio de materiales compuestos" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="descripcion_breve"
              rules={{ required: 'La descripción es obligatoria' }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descripción Breve</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Breve descripción del caso de estudio..." 
                      className="min-h-[100px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="imagen_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Imagen de Portada</FormLabel>
                  <FormControl>
                    <FileUpload
                      onChange={field.onChange}
                      currentValue={field.value}
                      accept="image/*"
                      maxSize={5}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <DialogFooter className="gap-2 sm:gap-0">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex items-center gap-2"
              >
                <X className="h-4 w-4" />
                Cancelar
              </Button>
              
              <Button 
                type="submit"
                className="flex items-center gap-2"
              >
                <Plus className="h-4 w-4" />
                {isEditing ? 'Actualizar Caso de Estudio' : 'Crear Caso de Estudio'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCaseStudyModal;
