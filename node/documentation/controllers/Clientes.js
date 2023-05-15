'use strict';

var utils = require('../utils/writer.js');
var Clientes = require('../service/ClientesService');

module.exports.apiClientsCreatePOST = function apiClientsCreatePOST (req, res, next, body) {
  Clientes.apiClientsCreatePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiClientsDeleteCnpjDELETE = function apiClientsDeleteCnpjDELETE (req, res, next, cnpj) {
  Clientes.apiClientsDeleteCnpjDELETE(cnpj)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiClientsShowCnpjGET = function apiClientsShowCnpjGET (req, res, next, cnpj) {
  Clientes.apiClientsShowCnpjGET(cnpj)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiClientsShow_allGET = function apiClientsShow_allGET (req, res, next) {
  Clientes.apiClientsShow_allGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiClientsUpdateCnpjPATCH = function apiClientsUpdateCnpjPATCH (req, res, next, body, cnpj) {
  Clientes.apiClientsUpdateCnpjPATCH(body, cnpj)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
