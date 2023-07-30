"use strict";var mysql=require("mysql2");class PinoMySQLStream{constructor(e){if(!e.dbConfig)throw new Error("dbConfig is required");this.pool=mysql.createPool(e.dbConfig),this.tableName=e.tableName||"logs"}write(e){var e=JSON.parse(e),r=`INSERT INTO ${this.tableName} SET ?`,e={level:e.level,time:new Date(e.time).toLocaleString(),pid:e.pid,hostname:e.hostname,req:JSON.stringify(e.req),res:JSON.stringify(e.res),msg:e.msg,responseTime:e.responseTime};this.pool.query(r,e,e=>{e&&console.error("Error writing log to MySQL:",e)})}}exports.PinoMySQLStream=PinoMySQLStream;