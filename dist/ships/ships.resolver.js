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
exports.ShipsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const ship_entity_1 = require("./entities/ship.entity");
const ships_service_1 = require("./ships.service");
let ShipsResolver = class ShipsResolver {
    constructor(shipsService) {
        this.shipsService = shipsService;
    }
    findAll() {
        return this.shipsService.findAll();
    }
    findOne(id) {
        return this.shipsService.findOne(id);
    }
};
__decorate([
    graphql_1.Query(() => [ship_entity_1.Ship], { name: 'ships' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ShipsResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query(() => ship_entity_1.Ship, { name: 'ship' }),
    __param(0, graphql_1.Args('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShipsResolver.prototype, "findOne", null);
ShipsResolver = __decorate([
    graphql_1.Resolver(() => ship_entity_1.Ship),
    __metadata("design:paramtypes", [ships_service_1.ShipsService])
], ShipsResolver);
exports.ShipsResolver = ShipsResolver;
//# sourceMappingURL=ships.resolver.js.map