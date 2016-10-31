// config/migrations.js
module.exports.migrations = {
  // connection name matches a field from config/connections.js
  connection: 'herokuPostgre', // or MySQL
  table: 'sails_migrations',
  migrationsDir: 'sails_migrations',
  coffeeFile: true
};
