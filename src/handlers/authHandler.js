const ctrl = require('../controllers/authCtrl')


module.exports = {
    login: async (req, res)=>{
        const {email, password} = req.body
        try {
            const aux = await ctrl.login(email,password)
            res.json(aux)
        } catch (error) {
            res.json({message:error.message})
        }
        
    },
    register:async(req, res)=>{
        const {username,email, password} = req.body
        try {
            const aux = await ctrl.register(username,email,password)
            res.json(aux)
        } catch (error) {
            res.json({message:error.message})
        }
    },
    logout:async(req, res)=>{
        try {
            const aux = await ctrl.logout()
            res.json(aux)
        } catch (error) {
            res.json({message:error.message})
        }
    },
    profile:async(req, res)=>{
        try {
            const aux = await ctrl.profile()
            res.json(aux)
        } catch (error) {
            res.json({message:error.message})
        }
    },
    verifyToken:async(req, res)=>{
        try {
            const aux = await ctrl.verifyToken()
            res.json(aux)
        } catch (error) {
            res.json({message:error.message})
        }
    },
}