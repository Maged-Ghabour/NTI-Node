const router = require("express").Router()
const userController = require("../app/controller/user.controller")

// routes
router.get("/", userController.home)
// router.get('/users/ahmed', (req,res)=>res.send("ahmed"))
router.get('/users/:id', userController.single)
//req=> params , query, ....  :id    req.params.id
router.get("/add", userController.add)
router.get('/addLogic', userController.addLogicGet)

router.get("/addPostMethod", userController.addPostMethod)
router.post("/addPostMethod", userController.addPostMethodLogic)

router.get("/users/del/:id",userController.delUser)

router.get("/users/edit/:id",userController.editUser)
router.post("/users/edit/:id",userController.editUserLogic)


router.get("/users/trans/:id",userController.transUser)
router.post("/users/trans/:id",userController.transUserLogic)



module.exports = router