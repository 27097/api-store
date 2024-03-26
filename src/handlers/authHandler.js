


module.exports = {
    login:(req, res)=>{
        
        res.send(`nos logeamos`)
    },
    register:(req, res)=>{
        res.send('creamos user')
    },
    logout:(req, res)=>{
        res.send('salimos')
    },
    profile:(req, res)=>{
        res.send('vemos perfil')
    },
    verifyToken:(req, res)=>{
        res.send('verificamos toquen')
    },
}