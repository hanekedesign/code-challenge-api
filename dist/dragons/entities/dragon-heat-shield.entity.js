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
exports.DragonHeatShield = void 0;
const graphql_1 = require("@nestjs/graphql");
let DragonHeatShield = class DragonHeatShield {
};
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], DragonHeatShield.prototype, "material", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], DragonHeatShield.prototype, "sizeMeters", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], DragonHeatShield.prototype, "tempDegrees", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], DragonHeatShield.prototype, "devPartner", void 0);
DragonHeatShield = __decorate([
    graphql_1.ObjectType()
], DragonHeatShield);
exports.DragonHeatShield = DragonHeatShield;
//# sourceMappingURL=dragon-heat-shield.entity.js.map