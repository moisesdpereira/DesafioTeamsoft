'use strict';


/**
 * Deleta os dados de um cliente
 *
 * cnpj String 
 * returns inline_response_204
 **/
exports.apiClientsCnpjDELETE = function(cnpj) {
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
exports.apiClientsCnpjGET = function(cnpj) {
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
  } ],
  "razao_social" : "razao_social",
  "id" : 0,
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
  } ],
  "razao_social" : "razao_social",
  "id" : 0,
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
 * body Clients_cnpj_body 
 * cnpj String 
 * returns inline_response_201_1
 **/
exports.apiClientsCnpjPATCH = function(body,cnpj) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "telefone" : "telefone",
    "razao_social" : "razao_social",
    "id" : "id",
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


/**
 * Recupera os dados de todos os clientes
 *
 * returns List
 **/
exports.apiClientsGET = function() {
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
  } ],
  "razao_social" : "razao_social",
  "id" : 0,
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
  } ],
  "razao_social" : "razao_social",
  "id" : 0,
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
 * body Api_clients_body 
 * returns List
 **/
exports.apiClientsPOST = function(body) {
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

