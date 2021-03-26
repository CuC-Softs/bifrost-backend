// eslint-disable-next-line @typescript-eslint/no-var-requires
console.log(process.env.DB_HOST);
module.exports = {
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: ['dist/**/*.entity{.ts,.js}'],
  type: 'postgres',
  migrations: ['./src/db/migrations/*.ts'],
  cli: {
    migrationsDir: './src/db/migrations',
  },
};
