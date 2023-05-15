'use strict';


/**
 * Recupera os dados de todos os endereços
 *
 * returns List
 **/
exports.apiAddressesGET = function() {
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
  "id" : 0,
  "client_id" : 6,
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
  "id" : 0,
  "client_id" : 6,
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
 * Deleta um endereço
 *
 * id String 
 * returns inline_response_204
 **/
exports.apiAddressesIdDELETE = function(id) {
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
 * id String 
 * returns List
 **/
exports.apiAddressesIdGET = function(id) {
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
  "client" : 1,
  "id" : 6,
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
  "client" : 1,
  "id" : 6,
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
 * body Addresses_id_body 
 * id String 
 * returns inline_response_201_2
 **/
exports.apiAddressesIdPATCH = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "cidade" : "cidade",
    "estado" : "estado",
    "complemento" : "complemento",
    "numero" : "numero",
    "logradouro" : "logradouro",
    "bairro" : "bairro",
    "latitude" : "latitude",
    "id" : 0,
    "client_id" : 6,
    "cep" : "cep",
    "longitude" : "longitude"
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


/**
 * Insere os dados de um endereço
 *
 * body Api_addresses_body 
 * returns List
 **/
exports.apiAddressesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "data" : [ {
    "telefone" : "telefone",
    "enderecos" : [ {
      "cidade" : "cidade",
      "estado" : "estado",
      "complemento" : "complemento",
      "numero" : "numero",
      "logradouro" : "logradouro",
      "bairro" : "bairro",
      "latitude" : "latitude",
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
      "cep" : "cep",
      "longitude" : "longitude"
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
      "latitude" : "latitude",
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
      "cep" : "cep",
      "longitude" : "longitude"
    } ],
    "razao_social" : "razao_social",
    "cnpj" : "cnpj",
    "nome_contato" : "nome_contato"
  } ],
  "message" : "message"
}, {
  "data" : [ {
    "telefone" : "telefone",
    "enderecos" : [ {
      "cidade" : "cidade",
      "estado" : "estado",
      "complemento" : "complemento",
      "numero" : "numero",
      "logradouro" : "logradouro",
      "bairro" : "bairro",
      "latitude" : "latitude",
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
      "cep" : "cep",
      "longitude" : "longitude"
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
      "latitude" : "latitude",
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
      "cep" : "cep",
      "longitude" : "longitude"
    } ],
    "razao_social" : "razao_social",
    "cnpj" : "cnpj",
    "nome_contato" : "nome_contato"
  } ],
  "message" : "message"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

