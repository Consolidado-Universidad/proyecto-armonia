import { NextRequest, NextResponse } from 'next/server'

import { esIpValida } from './utils/esIpValida'

export function middleware(request: NextRequest) {
  const listaIp = process.env.LISTA_BLANCA?.split(',') || []

  console.log('listaIp', listaIp)

  const clientIp = request.headers.get('x-forwarded-for') || request.ip

  console.log('clientIp', clientIp)

  if (clientIp && !esIpValida(clientIp, listaIp)) {
    return NextResponse.json({ error: 'prohibido' }, { status: 403 })
  }

  // Pasar el controlo al manejador de solicitudes siguiente
  return NextResponse.next()
}
