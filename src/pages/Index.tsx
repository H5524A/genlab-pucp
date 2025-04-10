
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, GraduationCap } from 'lucide-react';
import { toast } from 'sonner';

const Index = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Por favor ingresa tu email y contraseña');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (email === 'profesor@ejemplo.com' && password === 'password') {
        toast.success('Inicio de sesión exitoso');
        navigate('/dashboard');
      } else {
        toast.error('Credenciales incorrectas');
        setIsLoading(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="flex items-center space-x-2 mb-8">
            <div className="bg-edu-primary p-2 rounded">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-edu-dark">EduVista</h1>
          </div>
          
          <h2 className="text-3xl font-bold text-edu-dark mb-2">Bienvenido de vuelta</h2>
          <p className="text-edu-muted mb-8">Ingresa tus credenciales para acceder al panel de gestión docente</p>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-edu-dark mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="profesor@universidad.edu"
                className="input-field"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-edu-dark mb-1">
                Contraseña
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="input-field pr-10"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-edu-muted hover:text-edu-dark"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              <div className="flex justify-end mt-1">
                <a href="#" className="text-xs text-edu-primary hover:underline">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  <span>Iniciando sesión...</span>
                </>
              ) : (
                'Iniciar Sesión'
              )}
            </button>
            
            <p className="text-center text-xs text-edu-muted mt-4">
              Credenciales de prueba: profesor@ejemplo.com / password
            </p>
          </form>
        </div>
      </div>
      
      {/* Right side - Image */}
      <div className="hidden md:block md:w-1/2 bg-edu-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1974')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-edu-primary to-edu-dark opacity-80"></div>
        
        <div className="relative z-10 h-full flex flex-col justify-center p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Plataforma Docente EduVista</h2>
          <p className="text-lg opacity-90 mb-8">
            Gestiona tus cursos, crea experiencias de aprendizaje innovadoras y sigue el progreso de tus estudiantes.
          </p>
          
          <div className="flex space-x-4">
            <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="font-medium mb-2">Casos de Estudio</h3>
              <p className="text-sm opacity-80">Crea y organiza casos prácticos para tus estudiantes</p>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="font-medium mb-2">Aprendizaje con IA</h3>
              <p className="text-sm opacity-80">Genera contenido educativo con ayuda de inteligencia artificial</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
