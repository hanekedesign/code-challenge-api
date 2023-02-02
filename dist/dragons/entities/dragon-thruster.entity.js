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
exports.DragonThruster = void 0;
const graphql_1 = require("@nestjs/graphql");
const dragon_thrust_entity_1 = require("./dragon-thrust.entity");
let DragonThruster = class DragonThruster {
};
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], DragonThruster.prototype, "type", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], DragonThruster.prototype, "amount", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], DragonThruster.prototype, "pods", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], DragonThruster.prototype, "isp", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], DragonThruster.prototype, "fuel1", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], DragonThruster.prototype, "fuel2", void 0);
__decorate([
    graphql_1.Field(() => dragon_thrust_entity_1.DragonThrust, { nullable: true }),
    __metadata("design:type", dragon_thrust_entity_1.DragonThrust)
], DragonThruster.prototype, "thrust", void 0);
DragonThruster = __decorate([
    graphql_1.ObjectType()
], DragonThruster);
exports.DragonThruster = DragonThruster;
//# sourceMappingURL=dragon-thruster.entity.js.map