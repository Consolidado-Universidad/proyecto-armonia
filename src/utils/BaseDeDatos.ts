import { TYPES } from 'tedious'
import { ParametroSQL } from './ejecutaConsulta'

export type Columna = {
  nombre: string
  valor: string
}

export class BaseDeDatos {
  protected obtienePaginacion = (
    pagina?: number | string | null,
    limite?: number | string | null
  ): ParametroSQL[] => {
    return [
      { name: 'offset', type: TYPES.Int, value: Number(pagina) || 1 },
      { name: 'next', type: TYPES.Int, value: Number(limite) || 10 }
    ]
  }

  protected obtieneSeleccion = (
    parametros: Columna[],
    seleccion?: string[]
  ): string => {
    const _parametros = parametros.filter((campo) => {
      if (!seleccion || seleccion.length === 0) {
        return true
      }
      return seleccion.includes(campo.nombre.toLowerCase())
    })

    return _parametros.map((seleccion) => seleccion.valor).join(', ')
  }
}
