'use strict';

var utils = require('../utils/writer.js');
var Endereos = require('../service/EndereosService');

module.exports.apiAddressesCreatePOST = function apiAddressesCreatePOST (req, res, next, body) {
  Endereos.apiAddressesCreatePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiAddressesDeleteIdDELETE = function apiAddressesDeleteIdDELETE (req, res, next, id) {
  Endereos.apiAddressesDeleteIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiAddressesShowCnpjGET = function apiAddressesShowCnpjGET (req, res, next, cnpj) {
  Endereos.apiAddressesShowCnpjGET(cnpj)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiAddressesShow_allGET = function apiAddressesShow_allGET (req, res, next) {
  Endereos.apiAddressesShow_allGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiAddressesUpdateIdPATCH = function apiAddressesUpdateIdPATCH (req, res, next, body, id) {
  Endereos.apiAddressesUpdateIdPATCH(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
