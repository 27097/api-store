

module.exports = {
    login:(email,password)=>{
        return `Logiando al user ${email}, y password ${password}`
    },
    register:(username,email,password)=>{
        return `Logiando al user ${email}, password ${password} y nombre ${username}`
    },
    logout:()=>{
        return "cerrando seccion"
    },
    profile:()=>{
        return "ver perfil"
    },
    verifyToken:()=>{
        return "verficar token"
    },
}