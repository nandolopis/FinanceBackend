const BillingCycle = require('./billingCycle.js')

//criando serviços rast 
BillingCycle.methods(['get', 'post', 'put', 'delete'])

module.exports = BillingCycle

