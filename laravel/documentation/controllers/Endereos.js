'use strict';

var utils = require('../utils/writer.js');
var Endereos = require('../service/EndereosService');

module.exports.apiAddressesGET = function apiAddressesGET (req, res, next) {
  Endereos.apiAddressesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiAddressesIdDELETE = function apiAddressesIdDELETE (req, res, next, id) {
  Endereos.apiAddressesIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiAddressesIdGET = function apiAddressesIdGET (req, res, next, id) {
  Endereos.apiAddressesIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiAddressesIdPATCH = function apiAddressesIdPATCH (req, res, next, body, id) {
  Endereos.apiAddressesIdPATCH(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiAddressesPOST = function apiAddressesPOST (req, res, next, body) {
  Endereos.apiAddressesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
