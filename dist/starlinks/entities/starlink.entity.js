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
exports.Starlink = void 0;
const graphql_1 = require("@nestjs/graphql");
const starlink_spacetrack_entity_1 = require("./starlink-spacetrack.entity");
let Starlink = class Starlink {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], Starlink.prototype, "id", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Starlink.prototype, "version", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Starlink.prototype, "launch", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], Starlink.prototype, "longitude", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], Starlink.prototype, "latitude", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], Starlink.prototype, "heightKm", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], Starlink.prototype, "velocityKms", void 0);
__decorate([
    graphql_1.Field(() => starlink_spacetrack_entity_1.StarlinkSpaceTrack, { nullable: true }),
    __metadata("design:type", starlink_spacetrack_entity_1.StarlinkSpaceTrack)
], Starlink.prototype, "spaceTrack", void 0);
Starlink = __decorate([
    graphql_1.ObjectType()
], Starlink);
exports.Starlink = Starlink;
//# sourceMappingURL=starlink.entity.js.map