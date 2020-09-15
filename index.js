const User = require('./models/User')

let data = {
    name: 'Dall',
    email: 'email2@email.com',
    password: '123'
}

// Create User
async function  CreateUser(data){
    try{
        let {name, email, password} = data
        const user = await User.create({name, email, password})
        console.log(user)
    }catch(err){
        console.log(err)
    }
}

CreateUser(data)