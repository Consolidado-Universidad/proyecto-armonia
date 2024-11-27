import { CASTransito } from "@/proveedores/caschile/transito/consulta/CASTransito";
import { analizaSeleccionString } from "@/utilidades/analizaSeleccionString";
import { formateaRespuesta } from "@/utilidades/formateaRespuesta";
import { obtieneConfiguracion } from "@/utilidades/obtieneConfiguracion";
import { NextRequest } from "next/server";

export async function GET(nextRequest: NextRequest) {
  const searchParams = nextRequest.nextUrl.searchParams;
  const tipo = searchParams.get("tipo");

  // Configuración con base de datos especifica
  const db = process.env.LICENCIAS_DE_CONDUCIR;
  const transito_config = obtieneConfiguracion(db, "Licencias_de_Conducir");

  // Obtiene y parsea parámetros especificos desde URL
  const run = searchParams.get("run");
  const seleccion = analizaSeleccionString(searchParams.get("seleccion"));

  // Inicializa clases para certificados
  const transito = new CASTransito(transito_config);

  // valida RUT
  if (!run) {
    return formateaRespuesta({
      error: new Error("Debe ingresar un run, sin puntos y con guión"),
    });
  }

  let respuesta;

  try {
    switch (tipo) {
      case "transito_antiguedad_licencia":
        respuesta = await transito.obtieneCertificadoAntiguedad(run, seleccion);
        break;
    }
  } catch (error: any) {
    return formateaRespuesta({ error });
  }

  return formateaRespuesta({ respuesta });
}
