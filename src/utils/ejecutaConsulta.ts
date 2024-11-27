import { Connection, ConnectionConfiguration, Request } from 'tedious'
import { Column } from '../interfaces/types'
import { DataType } from 'tedious/lib/data-type'

type QueryResult = Promise<Record<string, any>[]>

export type ParametroSQL = {
  name: string // Nombre del parámetro (sin @)
  type: DataType // Tipo de dato de 'tedious' (e.g., TYPES.NVarChar)
  value: string | number // Valor del parámetro
}

export const ejecutaConsulta = (
  sqlQuery: string,
  parametros: ParametroSQL[] = [],
  configuracion: ConnectionConfiguration
): QueryResult => {
  return new Promise((resolve, reject) => {
    const connection = new Connection(configuracion)

    connection.on('connect', (err) => {
      if (err) {
        reject(new Error('Error al conectar a la base de datos.'))
      } else {
        const rows: Record<string, any>[] = []

        const request = new Request(sqlQuery, (error, rowCount) => {
          if (error) {
            reject(new Error(`Error en la consulta SQL: ${error.message}`))
          } else if (rowCount && rowCount > 0) {
            resolve(rows)
          } else {
            resolve([])
          }
          connection.close()
        })

        // Añadir los parámetros a la solicitud
        parametros.forEach((param) => {
          request.addParameter(param.name, param.type, param.value)
        })

        request.on('row', (columns: Column[]) => {
          const row: Record<string, any> = {}
          columns.forEach((column) => {
            row[column.metadata.colName] = column.value
          })
          rows.push(row)
        })

        connection.execSql(request)
      }
    })

    connection.connect()
  })
}
