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
exports.Rocket = void 0;
const graphql_1 = require("@nestjs/graphql");
const rocket_diameter_entity_1 = require("./rocket-diameter.entity");
const rocket_engines_entity_1 = require("./rocket-engines.entity");
const rocket_first_stage_entity_1 = require("./rocket-first-stage.entity");
const rocket_landing_legs_entity_1 = require("./rocket-landing-legs.entity");
const rocket_mass_entity_1 = require("./rocket-mass.entity");
const rocket_payload_weight_entity_1 = require("./rocket-payload-weight.entity");
const rocket_second_stage_entity_1 = require("./rocket-second-stage.entity");
let Rocket = class Rocket {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], Rocket.prototype, "id", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Rocket.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Rocket.prototype, "type", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Rocket.prototype, "description", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Rocket.prototype, "wikipedia", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Rocket.prototype, "company", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Rocket.prototype, "country", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Rocket.prototype, "firstFlight", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Rocket.prototype, "costPerLaunch", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Rocket.prototype, "successRatePct", void 0);
__decorate([
    graphql_1.Field(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], Rocket.prototype, "active", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Rocket.prototype, "stages", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Rocket.prototype, "boosters", void 0);
__decorate([
    graphql_1.Field(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], Rocket.prototype, "flickrImages", void 0);
__decorate([
    graphql_1.Field(() => rocket_first_stage_entity_1.RocketFirstStage, { nullable: true }),
    __metadata("design:type", rocket_first_stage_entity_1.RocketFirstStage)
], Rocket.prototype, "firstStage", void 0);
__decorate([
    graphql_1.Field(() => rocket_second_stage_entity_1.RocketSecondStage, { nullable: true }),
    __metadata("design:type", rocket_second_stage_entity_1.RocketSecondStage)
], Rocket.prototype, "secondStage", void 0);
__decorate([
    graphql_1.Field(() => rocket_diameter_entity_1.RocketDiameter, { nullable: true }),
    __metadata("design:type", rocket_diameter_entity_1.RocketDiameter)
], Rocket.prototype, "height", void 0);
__decorate([
    graphql_1.Field(() => rocket_diameter_entity_1.RocketDiameter, { nullable: true }),
    __metadata("design:type", rocket_diameter_entity_1.RocketDiameter)
], Rocket.prototype, "diameter", void 0);
__decorate([
    graphql_1.Field(() => rocket_mass_entity_1.RocketMass, { nullable: true }),
    __metadata("design:type", rocket_mass_entity_1.RocketMass)
], Rocket.prototype, "mass", void 0);
__decorate([
    graphql_1.Field(() => rocket_engines_entity_1.RocketEngines, { nullable: true }),
    __metadata("design:type", rocket_engines_entity_1.RocketEngines)
], Rocket.prototype, "engines", void 0);
__decorate([
    graphql_1.Field(() => rocket_landing_legs_entity_1.RocketLandingLegs, { nullable: true }),
    __metadata("design:type", rocket_landing_legs_entity_1.RocketLandingLegs)
], Rocket.prototype, "landingLegs", void 0);
__decorate([
    graphql_1.Field(() => rocket_payload_weight_entity_1.RocketPayloadWeight, { nullable: true }),
    __metadata("design:type", Array)
], Rocket.prototype, "payloadWeights", void 0);
Rocket = __decorate([
    graphql_1.ObjectType()
], Rocket);
exports.Rocket = Rocket;
//# sourceMappingURL=rocket.entity.js.map