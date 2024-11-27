/**
 * Analiza un string de selecciones separadas por comas y devuelve
 * un array de selecciones sin espacios adicionales.
 *
 * @param {string | null} [parametro] - El string a analizar, separado
 *                                    por comas. Puede ser nulo o indefinido.
 * @returns {string[]} Un array de strings, cada uno representando una
 *                     selección sin espacios adicionales.
 */
export const analizaSeleccionString = (parametro?: string | null): string[] => {
  if (!parametro) {
    return [];
  }

  return parametro.split(",").map((seleccion) => seleccion.trim());
};
