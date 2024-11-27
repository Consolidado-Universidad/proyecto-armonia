import * as ipaddr from 'ipaddr.js'
export const esIpValida = (ip: string, listaIp: string[]): boolean => {
  try {
    let ipToCheck = ipaddr.parse(ip)

    // Si es una IPv4 mapeada a IPv6, la convertimos a IPv4
    if (
      ipToCheck.kind() === 'ipv6' &&
      (ipToCheck as ipaddr.IPv6).isIPv4MappedAddress()
    ) {
      ipToCheck = (ipToCheck as ipaddr.IPv6).toIPv4Address()
    }

    for (const item of listaIp) {
      if (item.includes('/')) {
        // Es un rango CIDR
        try {
          const range = ipaddr.parseCIDR(item)
          let rangeNetwork = range[0]

          // Si la IP a verificar es IPv4 y el rango es IPv6, intentamos convertir el rango a IPv4
          if (ipToCheck.kind() === 'ipv4' && rangeNetwork.kind() === 'ipv6') {
            if ((rangeNetwork as ipaddr.IPv6).isIPv4MappedAddress()) {
              rangeNetwork = (rangeNetwork as ipaddr.IPv6).toIPv4Address()
              const newRange: [ipaddr.IPv4, number] = [
                rangeNetwork,
                range[1] - 96
              ] // Ajustamos la máscara
              if (ipToCheck.match(newRange)) {
                return true
              }
            }
          } else if (
            ipToCheck.kind() === rangeNetwork.kind() &&
            ipToCheck.match(range)
          ) {
            return true
          }
        } catch (error) {
          console.error('Error al parsear el rango CIDR:', item, error)
          continue // Continuamos con el siguiente item si hay un error
        }
      } else {
        // Es una IP específica
        let listIp = ipaddr.parse(item)

        // Si la IP a verificar es IPv4 y la IP de la lista es IPv6, intentamos convertir la IP de la lista a IPv4
        if (
          ipToCheck.kind() === 'ipv4' &&
          listIp.kind() === 'ipv6' &&
          (listIp as ipaddr.IPv6).isIPv4MappedAddress()
        ) {
          listIp = (listIp as ipaddr.IPv6).toIPv4Address()
        }

        if (
          ipToCheck.kind() === listIp.kind() &&
          ipToCheck.toString() === listIp.toString()
        ) {
          return true
        }
      }
    }

    return false
  } catch (error) {
    console.error('Error al validar IP:', error)
    return false
  }
}
