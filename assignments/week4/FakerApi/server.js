const express = require('express');
const app = express()
const PORT = 8000

const { faker } = require('@faker-js/faker');

app.listen(PORT,()=>{
    console.log(`YAY! Server is running on port ${PORT}`)
})

const createUser = () => {
    return{
        _id:faker.datatype.uuid(),
        first_name:faker.name.firstName(),
        last_name:faker.name.lastName(),
        phone:faker.phone.number(),
        email:faker.internet.email(),
        password:faker.internet.password()
    }
}

const createCompany = () => {
    return{
        _id:faker.datatype.uuid(),
        name:faker.company.companyName(),
        address:{
            street:faker.address.street(),
            city:faker.address.city(),
            state:faker.address.state(),
            zip:faker.address.zipCode(),
            country:faker.address.country()
        }
    }
}

app.get('/user', (req,res)=>{
    const user = createUser()
    res.json(user)
})

app.get('/company', (req,res)=>{
    const company = createCompany()
    res.json(company)
})

app.get('/api/users/new', (req, res)=>{
    const user = createUser()
    res.json(user)
})

app.get('/api/companies/new', (req, res)=>{
    const company = createCompany()
    res.json(company)
})

app.get('/api/user/company', (req, res)=>{
    const user = createUser()
    const company = createCompany()
    const userCompany = {
        user,
        company
    }
    res.json(userCompany)
})