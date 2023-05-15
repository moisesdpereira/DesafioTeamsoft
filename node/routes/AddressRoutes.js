const router = require('express').Router()

const AddressController = require('../controllers/AddressController')

router.post('/create', AddressController.create)
router.get('/show/:cnpj', AddressController.show)
router.get('/show-all', AddressController.showAll)
router.patch('/update/:id', AddressController.update)
router.delete('/delete/:id', AddressController.delete)

module.exports = router