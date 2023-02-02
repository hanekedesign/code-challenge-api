declare enum NodeEnvironment {
    development = "development",
    production = "production"
}
declare class EnvironmentVariables {
    NODE_ENV: NodeEnvironment;
    SPACEX_API_URL: string;
}
export declare function validateEnvVars(config: Record<string, unknown>): EnvironmentVariables;
export {};
