const BillingCycle = require('./billingCycle.js')

//criando serviços rast 
BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true})


module.exports = BillingCycle

