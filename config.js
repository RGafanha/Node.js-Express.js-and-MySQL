const env = process.env;

const config = {
  db: { /* don't expose password or any sensitive info, done only for demo */
    host: env.DB_HOST || 'localhost',
    user: env.DB_USER || 'ragnarok',
    password: env.DB_PASSWORD || 'ragnarok123',
    database: env.DB_NAME || 'banktest',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};


module.exports = config;