import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault: true,
});

export default connection;
//knex ajuda a fazer chamadas ao BD de forma única para diversos bancos diferentes
//knex cria as tabelas do BD tbm gerando um histórico de Migrations