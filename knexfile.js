module.exports = {
  client: 'postgresql',
  connection: {
    host: 'localhost',
    port: 5432,
    database: 'tasks',
    user: 'postgres',
    password: 'postgres'
  },
  migrations: {
    tableName: 'tasks_migrations'
  }
}
