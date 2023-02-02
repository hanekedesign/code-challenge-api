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
exports.Company = void 0;
const graphql_1 = require("@nestjs/graphql");
const company_headquarter_entity_1 = require("./company-headquarter.entity");
const company_links_entity_1 = require("./company-links.entity");
let Company = class Company {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], Company.prototype, "id", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "summary", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "valuation", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "ctoPropulsion", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "cto", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "ceo", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "coo", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Company.prototype, "testSites", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Company.prototype, "launchSites", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Company.prototype, "vehicles", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Company.prototype, "employees", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Company.prototype, "founded", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "founder", void 0);
__decorate([
    graphql_1.Field(() => company_links_entity_1.CompanyLinks, { nullable: true }),
    __metadata("design:type", company_links_entity_1.CompanyLinks)
], Company.prototype, "links", void 0);
__decorate([
    graphql_1.Field(() => company_headquarter_entity_1.CompanyHeadquarters, { nullable: true }),
    __metadata("design:type", company_headquarter_entity_1.CompanyHeadquarters)
], Company.prototype, "headquarters", void 0);
Company = __decorate([
    graphql_1.ObjectType()
], Company);
exports.Company = Company;
//# sourceMappingURL=company.entity.js.map