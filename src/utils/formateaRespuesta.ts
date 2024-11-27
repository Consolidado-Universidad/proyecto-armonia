import { NextResponse } from "next/server";

type formateaRespuestaProps = {
  respuesta?: any;
  error?: Error;
};

/**
 * Formatea la respuesta y el error para la respuesta HTTP en formato JSON.
 *
 * @param {formateaRespuestaProps} props - Objeto con los parámetros de respuesta y error.
 * @param {any} [props.respuesta] - La respuesta que se incluirá en el JSON si está presente.
 * @param {Error} [props.error] - El error que se incluirá en el JSON si está presente.
 * @returns {NextResponse} La respuesta formateada en formato JSON, con estado 500 si hay un error.
 */
export const formateaRespuesta = ({
  respuesta,
  error,
}: formateaRespuestaProps) => {
  if (respuesta) {
    return NextResponse.json({ respuesta, error: null });
  } else if (!respuesta && error) {
    return NextResponse.json(
      { respuesta: null, error: error.message },
      { status: 500 }
    );
  }
};
