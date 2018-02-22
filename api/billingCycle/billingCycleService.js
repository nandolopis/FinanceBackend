const BillingCycle = require('./billingCycle.js')

//criando serviços rast 
BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true})


module.exports = BillingCycle

