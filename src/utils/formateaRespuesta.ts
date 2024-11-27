import { NextResponse } from 'next/server'

type formateaRespuestaProps = {
  respuesta?: any
  error?: Error
}

export const formateaRespuesta = ({
  respuesta,
  error
}: formateaRespuestaProps) => {
  if (respuesta) {
    return NextResponse.json({ respuesta, error: null })
  } else if (!respuesta && error) {
    return NextResponse.json(
      { respuesta: null, error: error.message },
      { status: 500 }
    )
  }
}
