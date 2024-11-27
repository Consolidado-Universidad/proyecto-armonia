/**
 * Reemplaza la cadena "@seleccion" en el string de consulta con la selección proporcionada.
 *
 * @param {string} consulta - El string de consulta que contiene la cadena "@seleccion".
 * @param {string} seleccion - El valor que reemplazará la cadena "@seleccion" en el string de consulta.
 * @returns {string} El string de consulta con la cadena "@seleccion" reemplazada por el valor de selección.
 */
export const asignaSeleccion = (
  consulta: string,
  seleccion: string
): string => {
  return consulta.replace("@seleccion", seleccion);
};
