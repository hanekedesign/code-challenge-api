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
exports.Launchpad = void 0;
const graphql_1 = require("@nestjs/graphql");
const launchpad_image_entity_1 = require("./launchpad-image.entity");
let Launchpad = class Launchpad {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], Launchpad.prototype, "id", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Launchpad.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Launchpad.prototype, "fullName", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Launchpad.prototype, "details", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Launchpad.prototype, "type", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Launchpad.prototype, "locality", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Launchpad.prototype, "region", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], Launchpad.prototype, "latitude", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], Launchpad.prototype, "longitude", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Launchpad.prototype, "landingAttempts", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Launchpad.prototype, "landingSuccesses", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Launchpad.prototype, "wikipedia", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Launchpad.prototype, "status", void 0);
__decorate([
    graphql_1.Field(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], Launchpad.prototype, "launches", void 0);
__decorate([
    graphql_1.Field(() => launchpad_image_entity_1.LaunchpadImage, { nullable: true }),
    __metadata("design:type", launchpad_image_entity_1.LaunchpadImage)
], Launchpad.prototype, "images", void 0);
Launchpad = __decorate([
    graphql_1.ObjectType()
], Launchpad);
exports.Launchpad = Launchpad;
//# sourceMappingURL=launchpad.entity.js.map