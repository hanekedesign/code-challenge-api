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
exports.LaunchLinks = void 0;
const graphql_1 = require("@nestjs/graphql");
const launch_links_flickr_entity_1 = require("./launch-links-flickr.entity");
const launch_links_patch_entity_1 = require("./launch-links-patch.entity");
const launch_links_reddit_entity_1 = require("./launch-links-reddit.entity");
let LaunchLinks = class LaunchLinks {
};
__decorate([
    graphql_1.Field(() => launch_links_patch_entity_1.LaunchLinksPatch, { nullable: true }),
    __metadata("design:type", launch_links_patch_entity_1.LaunchLinksPatch)
], LaunchLinks.prototype, "patch", void 0);
__decorate([
    graphql_1.Field(() => launch_links_reddit_entity_1.LaunchLinksReddit, { nullable: true }),
    __metadata("design:type", launch_links_reddit_entity_1.LaunchLinksReddit)
], LaunchLinks.prototype, "reddit", void 0);
__decorate([
    graphql_1.Field(() => launch_links_flickr_entity_1.LaunchLinksFlickr, { nullable: true }),
    __metadata("design:type", launch_links_flickr_entity_1.LaunchLinksFlickr)
], LaunchLinks.prototype, "flickr", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], LaunchLinks.prototype, "presskit", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], LaunchLinks.prototype, "webcast", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], LaunchLinks.prototype, "youtubeId", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], LaunchLinks.prototype, "article", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], LaunchLinks.prototype, "wikipedia", void 0);
LaunchLinks = __decorate([
    graphql_1.ObjectType()
], LaunchLinks);
exports.LaunchLinks = LaunchLinks;
//# sourceMappingURL=launch-links.entity.js.map