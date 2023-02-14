const { getUserDetails, verifyUser } = require('../controllers/userControllers')

const router = require('express').Router()



router.post('/register',getUserDetails)
router.post('/login',verifyUser)




module.exports  = router