'use strict';


/**
 * Insere os dados de um todos os cliente
 *
 * body Clients_create_body 
 * returns List
 **/
exports.apiClientsCreatePOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "telefone" : "telefone",
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
  "razao_social" : "razao_social",
  "cnpj" : "cnpj",
  "nome_contato" : "nome_contato"
}, {
  "telefone" : "telefone",
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
  "razao_social" : "razao_social",
  "cnpj" : "cnpj",
  "nome_contato" : "nome_contato"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Insere os dados de um todos os cliente
 *
 * cnpj String 
 * returns inline_response_204
 **/
exports.apiClientsDeleteCnpjDELETE = function(cnpj) {
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
 * Recupera todos os dados de um clientes
 *
 * cnpj String 
 * returns List
 **/
exports.apiClientsShowCnpjGET = function(cnpj) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "telefone" : "telefone",
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
  } ],
  "razao_social" : "razao_social",
  "_id" : "_id",
  "cnpj" : "cnpj",
  "nome_contato" : "nome_contato"
}, {
  "telefone" : "telefone",
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
  } ],
  "razao_social" : "razao_social",
  "_id" : "_id",
  "cnpj" : "cnpj",
  "nome_contato" : "nome_contato"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Recupera os dados de todos os clientes
 *
 * returns List
 **/
exports.apiClientsShow_allGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "telefone" : "telefone",
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
  } ],
  "razao_social" : "razao_social",
  "_id" : "_id",
  "cnpj" : "cnpj",
  "nome_contato" : "nome_contato"
}, {
  "telefone" : "telefone",
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
  } ],
  "razao_social" : "razao_social",
  "_id" : "_id",
  "cnpj" : "cnpj",
  "nome_contato" : "nome_contato"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Insere os dados de um todos os cliente
 *
 * body Update_cnpj_body 
 * cnpj String 
 * returns inline_response_201_1
 **/
exports.apiClientsUpdateCnpjPATCH = function(body,cnpj) {
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

