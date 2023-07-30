import mysql from 'mysql2'

export class PinoMySQLStream {
  constructor(config) {
    if (!config.dbConfig) {
      throw new Error('dbConfig is required')
    }
    this.pool = mysql.createPool(config.dbConfig)
    this.tableName = config.tableName || 'logs'
  }

  write(data) {
    const logData = JSON.parse(data)
    const query = `INSERT INTO ${this.tableName} SET ?`

    const values = {
      level: logData.level,
      time: new Date(logData.time).toLocaleString(),
      pid: logData.pid,
      hostname: logData.hostname,
      req: JSON.stringify(logData.req),
      res: JSON.stringify(logData.res),
      msg: logData.msg,
      responseTime: logData.responseTime
    }
    this.pool.query(query, values, (error) => {
      if (error) {
        console.error('Error writing log to MySQL:', error)
      }
    })
  }
}
