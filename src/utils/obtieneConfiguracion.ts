import { configuracion } from '@/config/configuracion'
import { ConnectionConfiguration } from 'tedious'

type BaseDedatos = string | null | undefined

export const obtieneConfiguracion = (
  baseDeDatos: BaseDedatos,
  predefinido: string
): ConnectionConfiguration => {
  const _configuracion = configuracion

  _configuracion.options!.database = baseDeDatos || predefinido

  return _configuracion
}
