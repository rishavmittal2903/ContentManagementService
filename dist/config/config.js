"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const config = () => ({
    port: parseInt(process.env.PORT, 10) || 8080,
    api: {
        apiUrl: process.env.API_URL,
        httpTimeout: 1000,
    },
    mongodb: {
        database: {
            connectionString: process.env.MONGODB_CONNECTION_STRING || '',
            databaseName: process.env.DB_NAME || '',
        },
    },
    token: {
        accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
        refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
    },
});
exports.config = config;
//# sourceMappingURL=config.js.map