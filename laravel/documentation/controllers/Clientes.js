'use strict';

var utils = require('../utils/writer.js');
var Clientes = require('../service/ClientesService');

module.exports.apiClientsCnpjDELETE = function apiClientsCnpjDELETE (req, res, next, cnpj) {
  Clientes.apiClientsCnpjDELETE(cnpj)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiClientsCnpjGET = function apiClientsCnpjGET (req, res, next, cnpj) {
  Clientes.apiClientsCnpjGET(cnpj)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiClientsCnpjPATCH = function apiClientsCnpjPATCH (req, res, next, body, cnpj) {
  Clientes.apiClientsCnpjPATCH(body, cnpj)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiClientsGET = function apiClientsGET (req, res, next) {
  Clientes.apiClientsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiClientsPOST = function apiClientsPOST (req, res, next, body) {
  Clientes.apiClientsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
