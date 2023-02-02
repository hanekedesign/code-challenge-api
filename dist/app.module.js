"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const graphql_1 = require("@nestjs/graphql");
const env_keys_1 = require("./_utils/constants/env-keys");
const env_validation_1 = require("./_utils/env.validation");
const capsules_module_1 = require("./capsules/capsules.module");
const company_module_1 = require("./company/company.module");
const cores_module_1 = require("./cores/cores.module");
const crews_module_1 = require("./crews/crews.module");
const dragons_module_1 = require("./dragons/dragons.module");
const landpads_module_1 = require("./landpads/landpads.module");
const launches_module_1 = require("./launches/launches.module");
const launchpads_module_1 = require("./launchpads/launchpads.module");
const payloads_module_1 = require("./payloads/payloads.module");
const roadster_module_1 = require("./roadster/roadster.module");
const rockets_module_1 = require("./rockets/rockets.module");
const ships_module_1 = require("./ships/ships.module");
const starlinks_module_1 = require("./starlinks/starlinks.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                cache: true,
                validate: env_validation_1.validateEnvVars,
            }),
            graphql_1.GraphQLModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    debug: configService.get(env_keys_1.NODE_ENV) === 'development',
                    autoSchemaFile: true,
                }),
                inject: [config_1.ConfigService],
            }),
            capsules_module_1.CapsulesModule,
            company_module_1.CompanyModule,
            cores_module_1.CoresModule,
            crews_module_1.CrewsModule,
            dragons_module_1.DragonsModule,
            landpads_module_1.LandpadsModule,
            launches_module_1.LaunchesModule,
            launchpads_module_1.LaunchpadsModule,
            payloads_module_1.PayloadsModule,
            roadster_module_1.RoadsterModule,
            rockets_module_1.RocketsModule,
            ships_module_1.ShipsModule,
            starlinks_module_1.StarlinksModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map