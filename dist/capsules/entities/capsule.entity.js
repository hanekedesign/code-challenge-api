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
exports.Capsule = void 0;
const graphql_1 = require("@nestjs/graphql");
let Capsule = class Capsule {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], Capsule.prototype, "id", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Capsule.prototype, "type", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Capsule.prototype, "status", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Capsule.prototype, "serial", void 0);
__decorate([
    graphql_1.Field(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], Capsule.prototype, "launches", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Capsule.prototype, "lastUpdate", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Capsule.prototype, "landLandings", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Capsule.prototype, "waterLandings", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Capsule.prototype, "reuseCount", void 0);
Capsule = __decorate([
    graphql_1.ObjectType()
], Capsule);
exports.Capsule = Capsule;
//# sourceMappingURL=capsule.entity.js.map