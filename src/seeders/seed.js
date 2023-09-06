const db = require("../utils/database")
const {Buyers, Price, Vehicles, Sales, Users} = require("../models")
const initModels = require("../models/initModels.models")

initModels()

const users = [
    {
        email: "empleado@sincoayf.com",
        password: "1234"
    },       
]

const buyers = [
    {
       nombreCompleto: "Alberto Constructor",
       documento: "CC",
       numeroDocumento: "1023456789"
    },   
]

const vehicles = [
    {
       tipo: "carro",
       fechaRegistro: "07/09/2020",
       modelo: "2024 HR-V",
       color: "gray",
       esNuevo: true,
       kilometraje:0,
       precio:150000000,
       img:"https://urlzs.com/kEFkB"
    },   
    {
       tipo: "moto",
       fechaRegistro: "07/09/2020",
       modelo: "CB 125F 2024",
       color: "red",
       esNuevo: true,
       kilometraje:0,
       precio:7000000,
       cilindraje:354,
       numVelocidades: 4,
       img:"https://urlzs.com/oDAf2"
    },    
]

const sales = [
    {
       vehicleId: 1,
       buyerId: 1,
    },    
    {
       vehicleId: 2,
       buyerId: 1,
    },    
]

const price = [
    {
       modelo: "2024 HR-V",
       precio: 7000000,
    },  
    {
       modelo: "CB 125F 2024",
       precio: 150000000,
    },  
]



db.sync({force:true})
    .then(()=>{
        console.log("sincronizado")
        users.forEach(async (user)=> await Users.create(user))
        setTimeout(() => {
            vehicles.forEach(async (vehicle)=> await Vehicles.create(vehicle))
        }, 100);
        setTimeout(() => {
            price.forEach(async (p)=> await Price.create(p))
        }, 200);
        setTimeout(() => {
            buyers.forEach(async (buyer)=> await Buyers.create(buyer))
        }, 300);
        setTimeout(() => {
            sales.forEach(async (sale)=> await Sales.create(sale))
        }, 400);
    })
