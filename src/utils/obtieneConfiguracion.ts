import { configuracion } from "@/app/configuracion";
import { ConnectionConfiguration } from "tedious";

type BaseDedatos = string | null | undefined;

/**
 * Obtiene la configuración de conexión a la base de datos, utilizando
 * una base de datos específica o un valor predeterminado si no se
 * proporciona una base de datos.
 *
 * @param {string | null | undefined} baseDeDatos - El nombre de la base
 *                                  de datos. Puede ser null o undefined.
 * @param {string} predefinido - El nombre de la base de datos a utilizar
 *                                      si `baseDeDatos` no está definido.
 * @returns {ConnectionConfiguration} La configuración de conexión con el
 *                                nombre de la base de datos actualizado.
 */
export const obtieneConfiguracion = (
  baseDeDatos: BaseDedatos,
  predefinido: string
): ConnectionConfiguration => {
  const _configuracion = configuracion;

  _configuracion.options!.database = baseDeDatos || predefinido;

  return _configuracion;
};
