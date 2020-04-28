export interface Medico {
  id: Number;
  nome: String;
  crm: String;
  endereco: Endereco;
}

export interface Endereco {
  id: Number;
  cidade: String;
  pais: String;
  estado: String;
  bairro: String;
  numero: String;
  cep: String;
  logradouro: String;
}
