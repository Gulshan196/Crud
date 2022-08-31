import pg from 'pg'
const { Client } = pg



const client= new Client({
    host : "localhost",
    port  : 5432,
    user: 'postgres',
    password : 'newpass123@gk',
    database :'postgres'


})



export default client