import { NextRequest, NextResponse } from "next/server";
import { esIpValida } from "./app/esIpValida";

export function middleware(request: NextRequest) {
  const listaIp = process.env.LISTA_BLANCA?.split(",") || [];
  const clientIp = request.headers.get("x-forwarded-for") || request.ip;

  if (clientIp && !esIpValida(clientIp, listaIp)) {
    return NextResponse.json({ error: "prohibido" }, { status: 403 });
  }

  return NextResponse.next();
}
