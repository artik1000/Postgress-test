// const {pool,Client} = require('pg')
// const connectionString = 'postgressql://postgres:321456@localhost:5432/banco'

// const client  = new Client({
//     connectionString:connectionString
// })
// client.connect();

// client.query('select * from users',(err,res) =>{
//     console.log(err,res)
//     client.end();
// })

const pg = require('pg');

const config = {
    host: 'localhost', 
    user: 'postgres',     
    password: '321456',
    database: 'banco',
    port: 5432,
    ssl: true
};

const client = new pg.Client(config);

client.connect(err => {
    if (err) throw err;
    else { queryDatabase(); }
});

function queryDatabase() {
  
    console.log(`Running query to PostgreSQL server: ${config.host}`);

    const query = 'SELECT * FROM users;';

    client.query(query)
        .then(res => {
            const rows = res.rows;

            rows.map(row => {
                console.log(`Read: ${JSON.stringify(row)}`);
            });

            process.exit();
        })
        .catch(err => {
            console.log(err);
        });
}