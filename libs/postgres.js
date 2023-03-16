const { Client } = require('pg');

const getConnection = async () => {
  const client = new Client({
    host: process.env.PSQL_HOST || '0.0.0.0',
    port: 5432,
    user: 'mike',
    password: 'ADMIN1998',
    database: 'my_store'
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
