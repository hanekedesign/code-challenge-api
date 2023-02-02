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
exports.Dragon = void 0;
const graphql_1 = require("@nestjs/graphql");
const dragon_diameter_entity_1 = require("./dragon-diameter.entity");
const dragon_heat_shield_entity_1 = require("./dragon-heat-shield.entity");
const dragon_mass_entity_1 = require("./dragon-mass.entity");
const dragon_pressurized_capsule_entity_1 = require("./dragon-pressurized-capsule.entity");
const dragon_thruster_entity_1 = require("./dragon-thruster.entity");
const dragon_trunk_entity_1 = require("./dragon-trunk.entity");
const dragon_volume_entity_1 = require("./dragon-volume.entity");
let Dragon = class Dragon {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], Dragon.prototype, "id", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Dragon.prototype, "type", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Dragon.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Dragon.prototype, "description", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Dragon.prototype, "wikipedia", void 0);
__decorate([
    graphql_1.Field(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], Dragon.prototype, "active", void 0);
__decorate([
    graphql_1.Field(() => [dragon_thruster_entity_1.DragonThruster], { nullable: true }),
    __metadata("design:type", Array)
], Dragon.prototype, "thrusters", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Dragon.prototype, "dryMassLb", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Dragon.prototype, "dryMassKg", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Dragon.prototype, "orbitDurationYr", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Dragon.prototype, "sidewallAngleDeg", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Dragon.prototype, "crewCapacity", void 0);
__decorate([
    graphql_1.Field(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], Dragon.prototype, "flickrImages", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Dragon.prototype, "firstFlight", void 0);
__decorate([
    graphql_1.Field(() => dragon_diameter_entity_1.DragonDiameter, { nullable: true }),
    __metadata("design:type", dragon_diameter_entity_1.DragonDiameter)
], Dragon.prototype, "diameter", void 0);
__decorate([
    graphql_1.Field(() => dragon_diameter_entity_1.DragonDiameter, { nullable: true }),
    __metadata("design:type", dragon_diameter_entity_1.DragonDiameter)
], Dragon.prototype, "heightWTrunk", void 0);
__decorate([
    graphql_1.Field(() => dragon_trunk_entity_1.DragonTrunk, { nullable: true }),
    __metadata("design:type", dragon_trunk_entity_1.DragonTrunk)
], Dragon.prototype, "trunk", void 0);
__decorate([
    graphql_1.Field(() => dragon_pressurized_capsule_entity_1.DragonPressurizedCapsule, { nullable: true }),
    __metadata("design:type", dragon_pressurized_capsule_entity_1.DragonPressurizedCapsule)
], Dragon.prototype, "pressurizedCapsule", void 0);
__decorate([
    graphql_1.Field(() => dragon_volume_entity_1.DragonVolume, { nullable: true }),
    __metadata("design:type", dragon_volume_entity_1.DragonVolume)
], Dragon.prototype, "returnPayloadVol", void 0);
__decorate([
    graphql_1.Field(() => dragon_mass_entity_1.DragonMass, { nullable: true }),
    __metadata("design:type", dragon_mass_entity_1.DragonMass)
], Dragon.prototype, "returnPayloadMass", void 0);
__decorate([
    graphql_1.Field(() => dragon_volume_entity_1.DragonVolume, { nullable: true }),
    __metadata("design:type", dragon_volume_entity_1.DragonVolume)
], Dragon.prototype, "launchPayloadVol", void 0);
__decorate([
    graphql_1.Field(() => dragon_mass_entity_1.DragonMass, { nullable: true }),
    __metadata("design:type", dragon_mass_entity_1.DragonMass)
], Dragon.prototype, "launchPayloadMass", void 0);
__decorate([
    graphql_1.Field(() => dragon_heat_shield_entity_1.DragonHeatShield, { nullable: true }),
    __metadata("design:type", dragon_heat_shield_entity_1.DragonHeatShield)
], Dragon.prototype, "heatShield", void 0);
Dragon = __decorate([
    graphql_1.ObjectType()
], Dragon);
exports.Dragon = Dragon;
//# sourceMappingURL=dragon.entity.js.map