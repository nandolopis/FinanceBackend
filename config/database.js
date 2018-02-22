const mongoose =  require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_finance')
//module.exports = mongoose.connect('mongodb://ususario:senha@localhost:port/db_finance')

//tratamento erro
mongoose.Error.messages.general.required = "O atributo '{PATH}' É Obrigatório."
mongoose.Error.messages.Number.min = " O '{VALUE}' informado é menor que o limite minimo permitido, que é de '{MIN}'!"
mongoose.Error.messages.Number.max = " O '{VALUE}' informado é menor que o limite maximo permitido, que é de '{MAX}'!"
mongoose.Error.messages.String.enum = " O '{VALUE}' não é valido para o atributo '{PATH}'."