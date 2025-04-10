
import PocketBase from 'pocketbase';

// Creamos una instancia singleton de PocketBase
const pb = new PocketBase('https://your-pocketbase-url.com'); // Reemplazar con tu URL de PocketBase

export default pb;

// Función auxiliar para verificar si estamos usando datos reales o estáticos
export const useRealData = false; // Cambiar a true cuando quieras usar PocketBase
