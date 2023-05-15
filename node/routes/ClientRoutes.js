const router = require('express').Router()

const ClientController = require('../controllers/ClientController')

router.post('/create', ClientController.create)
router.get('/show/:cnpj', ClientController.show)
router.get('/show-all', ClientController.showAll)
router.patch('/update/:cnpj', ClientController.update)
router.delete('/delete/:cnpj', ClientController.delete)

module.exports = router