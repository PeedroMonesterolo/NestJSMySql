import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: '127.0.0.1',
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
      database: 'inventario',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
  },
];