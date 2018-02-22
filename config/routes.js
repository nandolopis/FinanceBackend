const express = require('express')

module.exports = function(server){
    //api de rotas
    const router = express.Router()
    server.use( '/api', router)

   //rotas da api
    const billingCycleService = require('../api/billingCycle/billingCycleService.js')
    billingCycleService.register(router, '/billingCycles')

}
