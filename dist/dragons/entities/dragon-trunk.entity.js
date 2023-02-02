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
exports.DragonTrunk = void 0;
const graphql_1 = require("@nestjs/graphql");
const dragon_cargo_entity_1 = require("./dragon-cargo.entity");
const dragon_volume_entity_1 = require("./dragon-volume.entity");
let DragonTrunk = class DragonTrunk {
};
__decorate([
    graphql_1.Field(() => dragon_volume_entity_1.DragonVolume, { nullable: true }),
    __metadata("design:type", dragon_volume_entity_1.DragonVolume)
], DragonTrunk.prototype, "trunkVolume", void 0);
__decorate([
    graphql_1.Field(() => dragon_cargo_entity_1.DragonCargo, { nullable: true }),
    __metadata("design:type", dragon_cargo_entity_1.DragonCargo)
], DragonTrunk.prototype, "cargo", void 0);
DragonTrunk = __decorate([
    graphql_1.ObjectType()
], DragonTrunk);
exports.DragonTrunk = DragonTrunk;
//# sourceMappingURL=dragon-trunk.entity.js.map