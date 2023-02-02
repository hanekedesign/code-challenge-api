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
exports.LaunchesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const launch_entity_1 = require("./entities/launch.entity");
const launches_service_1 = require("./launches.service");
let LaunchesResolver = class LaunchesResolver {
    constructor(launchesService) {
        this.launchesService = launchesService;
    }
    findAll() {
        return this.launchesService.findAll();
    }
    findAllPast() {
        return this.launchesService.findAllPast();
    }
    findOne(id) {
        return this.launchesService.findOne(id);
    }
    findLatest() {
        return this.launchesService.findLatest();
    }
    findNext() {
        return this.launchesService.findNext();
    }
};
__decorate([
    graphql_1.Query(() => [launch_entity_1.Launch], { name: 'launches' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LaunchesResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query(() => [launch_entity_1.Launch], { name: 'launchesPast' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LaunchesResolver.prototype, "findAllPast", null);
__decorate([
    graphql_1.Query(() => launch_entity_1.Launch, { name: 'launch' }),
    __param(0, graphql_1.Args('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LaunchesResolver.prototype, "findOne", null);
__decorate([
    graphql_1.Query(() => launch_entity_1.Launch, { name: 'launchLatest' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LaunchesResolver.prototype, "findLatest", null);
__decorate([
    graphql_1.Query(() => launch_entity_1.Launch, { name: 'launchNext' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LaunchesResolver.prototype, "findNext", null);
LaunchesResolver = __decorate([
    graphql_1.Resolver(() => launch_entity_1.Launch),
    __metadata("design:paramtypes", [launches_service_1.LaunchesService])
], LaunchesResolver);
exports.LaunchesResolver = LaunchesResolver;
//# sourceMappingURL=launches.resolver.js.map