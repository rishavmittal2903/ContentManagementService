interface ApiConfigProps {
    apiUrl: string;
    httpTimeout: number;
}
interface MongodbConfigProps {
    connectionString: string;
    databaseName: string;
}
interface TokenProps {
    accessTokenSecret: string;
    refreshTokenSecret: string;
}
export interface ConfigProps {
    port: number;
    api: ApiConfigProps;
    mongodb: {
        database: MongodbConfigProps;
    };
    token: TokenProps;
}
export {};
