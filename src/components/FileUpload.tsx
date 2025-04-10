
import React, { useState } from 'react';
import { Upload, X, FileText, Image as ImageIcon } from 'lucide-react';

interface FileUploadProps {
  label: string;
  description?: string;
  onFilesSelected?: (files: File[]) => void;
  multiple?: boolean;
  accept?: string;
  maxSize?: number; // in MB
}

interface FilePreview {
  file: File;
  preview: string;
  type: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  label,
  description,
  onFilesSelected,
  multiple = false,
  accept = '*/*',
  maxSize = 5 // 5MB default
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<FilePreview[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (fileList: FileList) => {
    setError(null);
    const newFiles: File[] = [];
    
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      
      // Check file size
      if (file.size > maxSize * 1024 * 1024) {
        setError(`El archivo ${file.name} excede el tamaño máximo de ${maxSize}MB`);
        continue;
      }
      
      newFiles.push(file);
    }
    
    if (newFiles.length > 0) {
      const filePreviews = newFiles.map(file => {
        let preview = '';
        let type = getFileType(file);
        
        if (file.type.startsWith('image/')) {
          preview = URL.createObjectURL(file);
        }
        
        return { file, preview, type };
      });
      
      if (multiple) {
        setSelectedFiles(prev => [...prev, ...filePreviews]);
      } else {
        setSelectedFiles(filePreviews.slice(0, 1));
      }
      
      if (onFilesSelected) {
        onFilesSelected(multiple ? newFiles : [newFiles[0]]);
      }
    }
  };

  const getFileType = (file: File): string => {
    if (file.type.startsWith('image/')) return 'image';
    if (file.type.includes('pdf')) return 'pdf';
    if (file.type.includes('word') || file.type.includes('doc')) return 'doc';
    if (file.type.includes('excel') || file.type.includes('sheet')) return 'excel';
    if (file.type.includes('presentation') || file.type.includes('powerpoint')) return 'presentation';
    return 'file';
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'image': return <ImageIcon className="h-5 w-5 text-edu-primary" />;
      case 'pdf': return <FileText className="h-5 w-5 text-edu-error" />;
      case 'doc': return <FileText className="h-5 w-5 text-edu-primary" />;
      case 'excel': return <FileText className="h-5 w-5 text-edu-secondary" />;
      case 'presentation': return <FileText className="h-5 w-5 text-edu-warning" />;
      default: return <FileText className="h-5 w-5 text-edu-muted" />;
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => {
      const newFiles = [...prev];
      
      // Revoke object URL to prevent memory leaks
      if (newFiles[index].preview) {
        URL.revokeObjectURL(newFiles[index].preview);
      }
      
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-edu-dark mb-1">
        {label}
      </label>
      
      {description && (
        <p className="text-xs text-edu-muted mb-2">{description}</p>
      )}
      
      <div
        className={`border-2 border-dashed rounded-lg p-4 transition-colors ${
          dragActive ? 'border-edu-primary bg-blue-50' : 'border-gray-200'
        }`}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        <input
          id="file-upload"
          type="file"
          className="hidden"
          multiple={multiple}
          accept={accept}
          onChange={handleFileChange}
        />
        
        <div className="flex flex-col items-center justify-center py-4">
          <Upload className="h-8 w-8 text-edu-muted mb-2" />
          
          <p className="text-sm text-center mb-1">
            <span className="font-medium">Haz click para subir</span> o arrastra y suelta
          </p>
          
          <p className="text-xs text-edu-muted">
            {multiple ? 'Archivos' : 'Archivo'} ({accept.replace(/\*/g, 'todos')})
          </p>
          
          <label
            htmlFor="file-upload"
            className="mt-3 px-4 py-2 bg-edu-primary text-white text-sm rounded-md cursor-pointer hover:bg-opacity-90 transition-colors"
          >
            Seleccionar archivo{multiple ? 's' : ''}
          </label>
        </div>
      </div>
      
      {error && (
        <p className="mt-2 text-xs text-edu-error">{error}</p>
      )}
      
      {selectedFiles.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-medium text-edu-dark mb-2">
            {selectedFiles.length} archivo{selectedFiles.length > 1 ? 's' : ''} seleccionado{selectedFiles.length > 1 ? 's' : ''}
          </h4>
          
          <div className="space-y-2">
            {selectedFiles.map((file, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                <div className="flex items-center space-x-3">
                  {file.type === 'image' && file.preview ? (
                    <img 
                      src={file.preview} 
                      alt={file.file.name}
                      className="h-10 w-10 object-cover rounded"
                    />
                  ) : (
                    <div className="h-10 w-10 flex items-center justify-center bg-gray-100 rounded">
                      {getFileIcon(file.type)}
                    </div>
                  )}
                  
                  <div>
                    <p className="text-sm font-medium truncate max-w-[180px]">
                      {file.file.name}
                    </p>
                    <p className="text-xs text-edu-muted">
                      {(file.file.size / 1024).toFixed(1)} KB
                    </p>
                  </div>
                </div>
                
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="text-edu-muted hover:text-edu-error transition-colors"
                  aria-label="Eliminar archivo"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
