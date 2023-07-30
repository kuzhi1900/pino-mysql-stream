# pino-mysql-stream

[![npm][npm-image]][npm-url]
[![MIT License][mit-license-image]][mit-license-url]

[npm-url]: https://www.npmjs.com/package/pino-mysql-stream
[npm-image]: https://img.shields.io/npm/v/pino-mysql-stream.svg?label=npm%20version
[mit-license-url]: LICENSE
[mit-license-image]: https://camo.githubusercontent.com/d59450139b6d354f15a2252a47b457bb2cc43828/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f7365727665726c6573732e737667




## About

Pino.js log to MySQL database.

## Installation

`npm install pino-mysql-stream`

`yarn add pino-mysql-stream`

`pnpm add pino-mysql-stream`

## Usage

1.First, Create a new table in the mysql database
```mysql
CREATE TABLE `logs` (
    `id` INT ( 11 ) NOT NULL AUTO_INCREMENT,
    `level` TINYINT ( 4 ) DEFAULT NULL,
    `time` TIMESTAMP NULL DEFAULT NULL,
    `pid` SMALLINT ( 6 ) DEFAULT NULL,
    `hostname` VARCHAR ( 50 ) DEFAULT NULL,
    `msg` TEXT,
    `req` JSON DEFAULT NULL,
    `res` JSON DEFAULT NULL,
    `responseTime` INT ( 11 ) DEFAULT NULL,
    PRIMARY KEY ( `id` )
) ENGINE = INNODB DEFAULT CHARSET = utf8 COMPRESSION = 'ZLIB';
```

2.Usage as a module
```ecmascript 6
import { PinoMySQLStream } from 'pino-mysql-stream'

const dbConfig = {
  host: <HOST>,
  user: <USER>,
  password: <PASSWORD>, 
  database: <DATABASE>
}
const log = pino(new PinoMySQLStream({ dbConfig }))
log.info("PinoMySQLStream log")
log.error("PinoMySQL Error")

```

## options
```js
{
  dbConfig:dbConfig // database config
  tablename: 'logs' // log table name, defalse 'logs'
}
```
