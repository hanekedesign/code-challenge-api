"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaunchpadsModule = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const env_keys_1 = require("../_utils/constants/env-keys");
const launchpads_resolver_1 = require("./launchpads.resolver");
const launchpads_service_1 = require("./launchpads.service");
let LaunchpadsModule = class LaunchpadsModule {
};
LaunchpadsModule = __decorate([
    common_1.Module({
        imports: [
            axios_1.HttpModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    baseURL: configService.get(env_keys_1.SPACEX_API_URL),
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        providers: [launchpads_resolver_1.LaunchpadsResolver, launchpads_service_1.LaunchpadsService],
    })
], LaunchpadsModule);
exports.LaunchpadsModule = LaunchpadsModule;
//# sourceMappingURL=launchpads.module.js.map