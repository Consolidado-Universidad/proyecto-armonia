export const analizaSeleccionString = (parametro?: string | null): string[] => {
  if (!parametro) {
    return []
  }

  return parametro.split(',').map((seleccion) => seleccion.trim())
}
