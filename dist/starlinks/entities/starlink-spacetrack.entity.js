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
exports.StarlinkSpaceTrack = void 0;
const graphql_1 = require("@nestjs/graphql");
let StarlinkSpaceTrack = class StarlinkSpaceTrack {
};
__decorate([
    graphql_1.Field(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], StarlinkSpaceTrack.prototype, "longitude", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], StarlinkSpaceTrack.prototype, "latitude", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], StarlinkSpaceTrack.prototype, "heightKm", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], StarlinkSpaceTrack.prototype, "velocityKms", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], StarlinkSpaceTrack.prototype, "CCSDS_OMM_VERS", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], StarlinkSpaceTrack.prototype, "COMMENT", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], StarlinkSpaceTrack.prototype, "CREATION_DATE", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], StarlinkSpaceTrack.prototype, "ORIGINATOR", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], StarlinkSpaceTrack.prototype, "OBJECT_NAME", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], StarlinkSpaceTrack.prototype, "OBJECT_ID", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], StarlinkSpaceTrack.prototype, "CENTER_NAME", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], StarlinkSpaceTrack.prototype, "REF_FRAME", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], StarlinkSpaceTrack.prototype, "TIME_SYSTEM", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], StarlinkSpaceTrack.prototype, "MEAN_ELEMENT_THEORY", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], StarlinkSpaceTrack.prototype, "EPOCH", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], StarlinkSpaceTrack.prototype, "MEAN_MOTION", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], StarlinkSpaceTrack.prototype, "ECCENTRICITY", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], StarlinkSpaceTrack.prototype, "INCLINATION", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], StarlinkSpaceTrack.prototype, "RA_OF_ASC_NODE", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], StarlinkSpaceTrack.prototype, "ARG_OF_PERICENTER", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], StarlinkSpaceTrack.prototype, "MEAN_ANOMALY", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], StarlinkSpaceTrack.prototype, "EPHEMERIS_TYPE", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], StarlinkSpaceTrack.prototype, "CLASSIFICATION_TYPE", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], StarlinkSpaceTrack.prototype, "NORAD_CAT_ID", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], StarlinkSpaceTrack.prototype, "ELEMENT_SET_NO", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], StarlinkSpaceTrack.prototype, "REV_AT_EPOCH", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], StarlinkSpaceTrack.prototype, "BSTAR", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], StarlinkSpaceTrack.prototype, "MEAN_MOTION_DOT", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], StarlinkSpaceTrack.prototype, "MEAN_MOTION_DDOT", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], StarlinkSpaceTrack.prototype, "SEMIMAJOR_AXIS", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], StarlinkSpaceTrack.prototype, "PERIOD", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], StarlinkSpaceTrack.prototype, "APOAPSIS", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], StarlinkSpaceTrack.prototype, "PERIAPSIS", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], StarlinkSpaceTrack.prototype, "OBJECT_TYPE", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], StarlinkSpaceTrack.prototype, "RCS_SIZE", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], StarlinkSpaceTrack.prototype, "COUNTRY_CODE", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], StarlinkSpaceTrack.prototype, "LAUNCH_DATE", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], StarlinkSpaceTrack.prototype, "SITE", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], StarlinkSpaceTrack.prototype, "DECAY_DATE", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], StarlinkSpaceTrack.prototype, "DECAYED", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], StarlinkSpaceTrack.prototype, "FILE", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], StarlinkSpaceTrack.prototype, "GP_ID", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], StarlinkSpaceTrack.prototype, "TLE_LINE0", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], StarlinkSpaceTrack.prototype, "TLE_LINE1", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], StarlinkSpaceTrack.prototype, "TLE_LINE2", void 0);
StarlinkSpaceTrack = __decorate([
    graphql_1.ObjectType()
], StarlinkSpaceTrack);
exports.StarlinkSpaceTrack = StarlinkSpaceTrack;
//# sourceMappingURL=starlink-spacetrack.entity.js.map