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
exports.Launch = void 0;
const graphql_1 = require("@nestjs/graphql");
const launch_core_entity_1 = require("./launch-core.entity");
const launch_failure_entity_1 = require("./launch-failure.entity");
const launch_fairing_entity_1 = require("./launch-fairing.entity");
const launch_links_entity_1 = require("./launch-links.entity");
let Launch = class Launch {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], Launch.prototype, "id", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Launch.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Launch.prototype, "details", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Launch.prototype, "flightNumber", void 0);
__decorate([
    graphql_1.Field(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], Launch.prototype, "upcoming", void 0);
__decorate([
    graphql_1.Field(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], Launch.prototype, "success", void 0);
__decorate([
    graphql_1.Field(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], Launch.prototype, "tbd", void 0);
__decorate([
    graphql_1.Field(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], Launch.prototype, "net", void 0);
__decorate([
    graphql_1.Field(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], Launch.prototype, "autoUpdate", void 0);
__decorate([
    graphql_1.Field(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], Launch.prototype, "ships", void 0);
__decorate([
    graphql_1.Field(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], Launch.prototype, "capsules", void 0);
__decorate([
    graphql_1.Field(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], Launch.prototype, "payloads", void 0);
__decorate([
    graphql_1.Field(() => [launch_core_entity_1.LaunchCore], { nullable: true }),
    __metadata("design:type", Array)
], Launch.prototype, "cores", void 0);
__decorate([
    graphql_1.Field(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], Launch.prototype, "crew", void 0);
__decorate([
    graphql_1.Field(() => [launch_failure_entity_1.LaunchFailure], { nullable: true }),
    __metadata("design:type", Array)
], Launch.prototype, "failures", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Launch.prototype, "staticFireDateUtc", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], Launch.prototype, "staticFireDateUnix", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Launch.prototype, "dateUtc", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], Launch.prototype, "dateUnix", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Launch.prototype, "dateLocal", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Launch.prototype, "datePrecision", void 0);
__decorate([
    graphql_1.Field(() => launch_links_entity_1.LaunchLinks, { nullable: true }),
    __metadata("design:type", launch_links_entity_1.LaunchLinks)
], Launch.prototype, "links", void 0);
__decorate([
    graphql_1.Field(() => launch_fairing_entity_1.LaunchFairings, { nullable: true }),
    __metadata("design:type", launch_fairing_entity_1.LaunchFairings)
], Launch.prototype, "fairings", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Launch.prototype, "window", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Launch.prototype, "rocket", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Launch.prototype, "launchpad", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Launch.prototype, "launchLibraryId", void 0);
Launch = __decorate([
    graphql_1.ObjectType()
], Launch);
exports.Launch = Launch;
//# sourceMappingURL=launch.entity.js.map