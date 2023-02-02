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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RocketsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const rocket_entity_1 = require("./entities/rocket.entity");
const rockets_service_1 = require("./rockets.service");
let RocketsResolver = class RocketsResolver {
    constructor(rocketsService) {
        this.rocketsService = rocketsService;
    }
    findAll() {
        return this.rocketsService.findAll();
    }
    findOne(id) {
        return this.rocketsService.findOne(id);
    }
};
__decorate([
    graphql_1.Query(() => [rocket_entity_1.Rocket], { name: 'rockets' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RocketsResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query(() => rocket_entity_1.Rocket, { name: 'rocket' }),
    __param(0, graphql_1.Args('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RocketsResolver.prototype, "findOne", null);
RocketsResolver = __decorate([
    graphql_1.Resolver(() => rocket_entity_1.Rocket),
    __metadata("design:paramtypes", [rockets_service_1.RocketsService])
], RocketsResolver);
exports.RocketsResolver = RocketsResolver;
//# sourceMappingURL=rockets.resolver.js.map