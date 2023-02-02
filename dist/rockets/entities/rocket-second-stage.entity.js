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
exports.RocketSecondStage = void 0;
const graphql_1 = require("@nestjs/graphql");
const rocket_payload_entity_1 = require("./rocket-payload.entity");
const rocket_thrust_entity_1 = require("./rocket-thrust.entity");
let RocketSecondStage = class RocketSecondStage {
};
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], RocketSecondStage.prototype, "id", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], RocketSecondStage.prototype, "burnTimeSec", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], RocketSecondStage.prototype, "fuelAmountTons", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], RocketSecondStage.prototype, "engines", void 0);
__decorate([
    graphql_1.Field(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], RocketSecondStage.prototype, "reusable", void 0);
__decorate([
    graphql_1.Field(() => rocket_thrust_entity_1.RocketThrust, { nullable: true }),
    __metadata("design:type", rocket_thrust_entity_1.RocketThrust)
], RocketSecondStage.prototype, "thrust", void 0);
__decorate([
    graphql_1.Field(() => rocket_payload_entity_1.RocketPayload, { nullable: true }),
    __metadata("design:type", rocket_payload_entity_1.RocketPayload)
], RocketSecondStage.prototype, "payloads", void 0);
RocketSecondStage = __decorate([
    graphql_1.ObjectType()
], RocketSecondStage);
exports.RocketSecondStage = RocketSecondStage;
//# sourceMappingURL=rocket-second-stage.entity.js.map