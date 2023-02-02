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
exports.RoadsterResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const roadster_entity_1 = require("./entities/roadster.entity");
const roadster_service_1 = require("./roadster.service");
let RoadsterResolver = class RoadsterResolver {
    constructor(roadsterService) {
        this.roadsterService = roadsterService;
    }
    find() {
        return this.roadsterService.find();
    }
};
__decorate([
    graphql_1.Query(() => roadster_entity_1.Roadster, { name: 'roadster' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoadsterResolver.prototype, "find", null);
RoadsterResolver = __decorate([
    graphql_1.Resolver(() => roadster_entity_1.Roadster),
    __metadata("design:paramtypes", [roadster_service_1.RoadsterService])
], RoadsterResolver);
exports.RoadsterResolver = RoadsterResolver;
//# sourceMappingURL=roadster.resolver.js.map