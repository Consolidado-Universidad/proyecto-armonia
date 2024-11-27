import { TYPES } from "tedious";
import { ParametroSQL } from "./ejecutaConsulta";

export type Columna = {
  nombre: string;
  valor: string;
};

export class BaseDeDatos {
  /**
   * Genera los parámetros de paginación para una consulta SQL.
   *
   * Este método convierte los valores de `pagina` y `limite` a números enteros y los utiliza
   * para calcular los parámetros `offset` (desplazamiento) y `next` (límite de registros) para una consulta SQL.
   *
   * @protected
   * @param {number | string | null} [pagina] - El número de la página a mostrar. Si es nulo o no
   *                                            se proporciona, se utiliza `1` por defecto.
   * @param {number | string | null} [limite] - El número de registros por página. Si es nulo o no se proporciona,
   *                                            se utiliza `10` por defecto.
   * @returns {ParametroSQL[]} Un arreglo de objetos `ParametroSQL` que contiene los parámetros `offset` y `next`
   *                                            para la consulta SQL.
   */
  protected obtienePaginacion = (
    pagina?: number | string | null,
    limite?: number | string | null
  ): ParametroSQL[] => {
    return [
      { name: "offset", type: TYPES.Int, value: Number(pagina) || 1 },
      { name: "next", type: TYPES.Int, value: Number(limite) || 10 },
    ];
  };

  /**
   * Genera una cadena de selección para una consulta SQL basada en los parámetros proporcionados.
   *
   * Este método filtra los parámetros según los nombres de columna especificados en `seleccion`.
   * Si no se proporciona ninguna selección o la lista está vacía, se incluyen todos los parámetros.
   * Luego, los valores de los parámetros seleccionados se concatenan en una cadena separada por comas.
   *
   * @protected
   * @param {Columna[]} parametros - Un arreglo de objetos `Columna` que representa los parámetros
   *                                 disponibles para la selección.
   * @param {string[]} [seleccion] - Un arreglo opcional de nombres de columna a seleccionar.
   *                                 Si no se proporciona o está vacío, se seleccionan todas las columnas.
   * @returns {string} Una cadena con los nombres de las columnas seleccionadas separados por comas,
   *                                 lista para ser usada en una consulta SQL.
   */

  protected obtieneSeleccion = (
    parametros: Columna[],
    seleccion?: string[]
  ): string => {
    const _parametros = parametros.filter((campo) => {
      if (!seleccion || seleccion.length === 0) {
        return true;
      }
      return seleccion.includes(campo.nombre.toLowerCase());
    });

    return _parametros.map((seleccion) => seleccion.valor).join(", ");
  };
}
