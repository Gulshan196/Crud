import pg from 'pg'
const { Client } = pg

const client= new Client({
    host : "localhost",
    port  : 5432,
    user: 'postgres',
    password : '1234',
    database :'CRUD'
})



export default client