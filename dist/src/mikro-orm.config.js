"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const sql_highlighter_1 = require("@mikro-orm/sql-highlighter");
const reflection_1 = require("@mikro-orm/reflection");
const logger = new common_1.Logger('MikroORM');
const config = {
    entities: ['dist/**/*.entity.js'],
    entitiesTs: ['src/**/*.entity.ts'],
    dbName: process.env.DBNAME || 'movie-review',
    type: 'postgresql',
    host: 'localhost',
    password: process.env.DBPASSWORD || 'wRPh4l?y5JZpQ1',
    port: process.env.DBPORT || 5432,
    highlighter: new sql_highlighter_1.SqlHighlighter(),
    debug: true,
    logger: logger.log.bind(logger),
    metadataProvider: reflection_1.TsMorphMetadataProvider,
    migrations: {
        tableName: 'mikro_orm_migrations',
        path: './migrations',
        pattern: /^[\w-]+\d+\.ts$/,
        transactional: true,
        disableForeignKeys: true,
        allOrNothing: true,
        dropTables: true,
        safe: true,
        emit: 'ts',
    }
};
exports.default = config;
//# sourceMappingURL=mikro-orm.config.js.map