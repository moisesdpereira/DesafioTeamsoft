'use strict';


/**
 * Insere os dados de um endereço junto ao cliente
 *
 * body Addresses_create_body 
 * returns List
 **/
exports.apiAddressesCreatePOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "enderecos" : [ {
    "cidade" : "cidade",
    "estado" : "estado",
    "complemento" : "complemento",
    "numero" : "numero",
    "logradouro" : "logradouro",
    "bairro" : "bairro",
    "cep" : "cep"
  }, {
    "cidade" : "cidade",
    "estado" : "estado",
    "complemento" : "complemento",
    "numero" : "numero",
    "logradouro" : "logradouro",
    "bairro" : "bairro",
    "cep" : "cep"
  } ],
  "cnpj" : "cnpj"
}, {
  "enderecos" : [ {
    "cidade" : "cidade",
    "estado" : "estado",
    "complemento" : "complemento",
    "numero" : "numero",
    "logradouro" : "logradouro",
    "bairro" : "bairro",
    "cep" : "cep"
  }, {
    "cidade" : "cidade",
    "estado" : "estado",
    "complemento" : "complemento",
    "numero" : "numero",
    "logradouro" : "logradouro",
    "bairro" : "bairro",
    "cep" : "cep"
  } ],
  "cnpj" : "cnpj"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deleta um endereço
 *
 * id String 
 * returns inline_response_204
 **/
exports.apiAddressesDeleteIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Recupera todos os endereços de um clientes
 *
 * cnpj String 
 * returns List
 **/
exports.apiAddressesShowCnpjGET = function(cnpj) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "addresses" : [ {
    "cidade" : "cidade",
    "estado" : "estado",
    "complemento" : "complemento",
    "numero" : "numero",
    "logradouro" : "logradouro",
    "bairro" : "bairro",
    "latitude" : "latitude",
    "__v" : "__v",
    "client" : "client",
    "_id" : "_id",
    "cep" : "cep",
    "longitude" : "longitude"
  }, {
    "cidade" : "cidade",
    "estado" : "estado",
    "complemento" : "complemento",
    "numero" : "numero",
    "logradouro" : "logradouro",
    "bairro" : "bairro",
    "latitude" : "latitude",
    "__v" : "__v",
    "client" : "client",
    "_id" : "_id",
    "cep" : "cep",
    "longitude" : "longitude"
  } ]
}, {
  "addresses" : [ {
    "cidade" : "cidade",
    "estado" : "estado",
    "complemento" : "complemento",
    "numero" : "numero",
    "logradouro" : "logradouro",
    "bairro" : "bairro",
    "latitude" : "latitude",
    "__v" : "__v",
    "client" : "client",
    "_id" : "_id",
    "cep" : "cep",
    "longitude" : "longitude"
  }, {
    "cidade" : "cidade",
    "estado" : "estado",
    "complemento" : "complemento",
    "numero" : "numero",
    "logradouro" : "logradouro",
    "bairro" : "bairro",
    "latitude" : "latitude",
    "__v" : "__v",
    "client" : "client",
    "_id" : "_id",
    "cep" : "cep",
    "longitude" : "longitude"
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Recupera os dados de todos os endereços
 *
 * returns List
 **/
exports.apiAddressesShow_allGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "cidade" : "cidade",
  "estado" : "estado",
  "complemento" : "complemento",
  "numero" : "numero",
  "logradouro" : "logradouro",
  "bairro" : "bairro",
  "latitude" : "latitude",
  "__v" : "__v",
  "client" : "client",
  "_id" : "_id",
  "cep" : "cep",
  "longitude" : "longitude"
}, {
  "cidade" : "cidade",
  "estado" : "estado",
  "complemento" : "complemento",
  "numero" : "numero",
  "logradouro" : "logradouro",
  "bairro" : "bairro",
  "latitude" : "latitude",
  "__v" : "__v",
  "client" : "client",
  "_id" : "_id",
  "cep" : "cep",
  "longitude" : "longitude"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualiza um endereço
 *
 * body Update_id_body 
 * id String 
 * returns inline_response_201_1
 **/
exports.apiAddressesUpdateIdPATCH = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "client" : {
    "telefone" : "telefone",
    "addresses" : [ "addresses", "addresses" ],
    "__v" : 0,
    "razao_social" : "razao_social",
    "_id" : "_id",
    "cnpj" : "cnpj",
    "nome_contato" : "nome_contato"
  },
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

