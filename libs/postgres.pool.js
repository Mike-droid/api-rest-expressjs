const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'mike',
  password: 'ADMIN1998',
  database: 'my_store'
});

module.exports = pool;
