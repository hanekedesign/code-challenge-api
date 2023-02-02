"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEnvVars = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
var NodeEnvironment;
(function (NodeEnvironment) {
    NodeEnvironment["development"] = "development";
    NodeEnvironment["production"] = "production";
})(NodeEnvironment || (NodeEnvironment = {}));
class EnvironmentVariables {
}
__decorate([
    class_validator_1.IsEnum(NodeEnvironment),
    __metadata("design:type", String)
], EnvironmentVariables.prototype, "NODE_ENV", void 0);
__decorate([
    class_validator_1.IsUrl(),
    __metadata("design:type", String)
], EnvironmentVariables.prototype, "SPACEX_API_URL", void 0);
function validateEnvVars(config) {
    const validatedConfig = class_transformer_1.plainToClass(EnvironmentVariables, config, {
        enableImplicitConversion: true,
    });
    const errors = class_validator_1.validateSync(validatedConfig, {
        skipMissingProperties: false,
    });
    if (errors.length > 0) {
        throw new Error(errors.toString());
    }
    return validatedConfig;
}
exports.validateEnvVars = validateEnvVars;
//# sourceMappingURL=env.validation.js.map