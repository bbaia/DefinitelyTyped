// Type definitions for express-myconnection v1.0.4
// Project: https://www.npmjs.org/package/express-myconnection
// Definitions by: Michael Ferris <https://github.com/Cellule>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="express" />
/// <reference types="mysql" />

declare namespace mysql{
  export interface IConnection {}
  export interface IError {}
}

declare namespace Express {

  export interface Request {
    getConnection?: (callback: (err: mysql.IError, connection: mysql.IConnection) => void) => void;
  }
}

declare module "express-myconnection" {
  import express = require('express');
  import mysql = require('mysql');

  function connection(mysql: mysql.IMySql, dbConfig: mysql.IConnectionConfig, strategy: string): express.RequestHandler;

  export = connection;
}

