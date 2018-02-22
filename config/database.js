const mongoose =  require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_finance')
//module.exports = mongoose.connect('mongodb://ususario:senha@localhost:port/db_finance')

//tratamento erro do required
mongoose.Error.messages.general.required = "O atributo '{PATH}' É Obrigatório."