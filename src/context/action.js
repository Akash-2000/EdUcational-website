export const LoginStart = (usercredentials)=>({
    type:"LOGIN_START"
})

export const Loginsucess = (user)=>({
    type:"LOGIN_SUCESS",
    payload:user,

})

export const LoginFailure = ()=>({
    type:"LOGIN_FAILURE"
})