
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Book, GraduationCap, LogOut, User } from 'lucide-react';
import { currentUser } from '@/data/mockData';
import { toast } from 'sonner';

const Nav: React.FC = () => {
  const location = useLocation();
  
  const handleLogout = () => {
    toast.success("Sesión cerrada con éxito");
    // In a real app, this would handle the logout logic
    window.location.href = '/';
  };

  // Don't show nav on login page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <header className="bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/dashboard" className="flex items-center space-x-2">
              <div className="bg-edu-primary p-1 rounded">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl text-edu-dark">EduVista</span>
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <Link 
              to="/dashboard"
              className={`flex items-center space-x-1 text-sm font-medium px-3 py-2 rounded-md transition-colors
                ${location.pathname === '/dashboard' 
                  ? 'text-edu-primary bg-blue-50' 
                  : 'text-edu-text hover:text-edu-primary hover:bg-blue-50'}`}
            >
              <Book className="h-4 w-4" />
              <span>Mis Cursos</span>
            </Link>

            <div className="flex items-center space-x-3 text-sm">
              <div className="flex items-center space-x-2">
                <div className="bg-edu-secondary rounded-full p-1">
                  <User className="h-4 w-4 text-white" />
                </div>
                <span className="text-edu-dark font-medium">
                  Prof. {currentUser.apellido}
                </span>
              </div>

              <button 
                onClick={handleLogout}
                className="flex items-center space-x-1 text-edu-muted hover:text-edu-error transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span>Salir</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
