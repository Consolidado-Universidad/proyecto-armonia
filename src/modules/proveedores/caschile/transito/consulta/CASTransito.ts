import { BaseDeDatos } from "@/utilidades/BaseDeDatos";
import { asignaSeleccion } from "@/utilidades/asignaSeleccion";
import { ParametroSQL, ejecutaConsulta } from "@/utilidades/ejecutaConsulta";
import { ConnectionConfiguration, TYPES } from "tedious";
import { columnas_funcionario } from "../../personal/modelo/columnas_funcionario";
import { antiguedad_licencia } from "./antiguedad_licencia";

export class CASTransito extends BaseDeDatos {
  private configuracion: ConnectionConfiguration;

  constructor(configuracion: ConnectionConfiguration) {
    super();
    this.configuracion = configuracion;
  }

  obtieneCertificadoAntiguedad(run: string, seleccion?: string[]) {
    // Obtiene y parsea parámetros especificos desde URL
    const _parametros: ParametroSQL[] = [
      { name: "numero_licencia", type: TYPES.NVarChar, value: run },
    ];

    // Lista con parametros seleccionados
    const _seleccion = this.obtieneSeleccion(columnas_funcionario, seleccion);
    // consulta con parametros seleccionados
    const _consulta = asignaSeleccion(antiguedad_licencia, _seleccion);

    // Realiza llamada a la base de datos
    return ejecutaConsulta(_consulta, _parametros, this.configuracion);
  }
}
