const { findOne, update } = require('./models/User')
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

// Select All

async function SelectAll(){
    try{
        let users = await User.find()
        console.log(users)
    }catch(err){
        console.log(err)
    }
}

// Select One

async function SelectOne(email){
    try{
        let user = await User.findOne({email: email})
        console.log(user)
    }catch(err){
        console.log(err)
    }
}


// Delete One
async function Delete(email){
    try{
        let user = await User.deleteOne({email:email})
        console.log(user)
    }catch(err){
        console.log(err)
    }
}

// Update one

async function Update(id, data){
    try{
        if(data.name != undefined){
            let updated = await User.updateOne({_id: id}, {$set:{name: data.name}})
            console.log(updated)
        }
    }catch(err){
        console.log(err)
    }
}



// CreateUser(data)
// SelectAll()
// SelectOne('email@email.com')
// Delete('claudio@email.com')
// Update('5f6126b9e3ebd13ae45b2a24', {name: 'Claudio Update 2'})