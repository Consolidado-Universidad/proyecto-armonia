export const asignaSeleccion = (
  consulta: string,
  seleccion: string
): string => {
  return consulta.replace('@seleccion', seleccion)
}
