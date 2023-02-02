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
exports.CrewsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const crews_service_1 = require("./crews.service");
const crew_entity_1 = require("./entities/crew.entity");
let CrewsResolver = class CrewsResolver {
    constructor(crewsService) {
        this.crewsService = crewsService;
    }
    findAll() {
        return this.crewsService.findAll();
    }
    findOne(id) {
        return this.crewsService.findOne(id);
    }
};
__decorate([
    graphql_1.Query(() => [crew_entity_1.Crew], { name: 'crews' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CrewsResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query(() => crew_entity_1.Crew, { name: 'crew' }),
    __param(0, graphql_1.Args('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CrewsResolver.prototype, "findOne", null);
CrewsResolver = __decorate([
    graphql_1.Resolver(() => crew_entity_1.Crew),
    __metadata("design:paramtypes", [crews_service_1.CrewsService])
], CrewsResolver);
exports.CrewsResolver = CrewsResolver;
//# sourceMappingURL=crews.resolver.js.map