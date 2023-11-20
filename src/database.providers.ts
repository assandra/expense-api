import { DataSource } from 'typeorm';
import { join } from 'path';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      // TODO make these env variables
      const dataSource = new DataSource({
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: '',
        database: 'database',
        entities: [join(__dirname, '**', '*.entity.{ts,js}')],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
