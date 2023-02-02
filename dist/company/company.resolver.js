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
exports.CompanyResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const company_service_1 = require("./company.service");
const company_entity_1 = require("./entities/company.entity");
let CompanyResolver = class CompanyResolver {
    constructor(companyService) {
        this.companyService = companyService;
    }
    find() {
        return this.companyService.find();
    }
};
__decorate([
    graphql_1.Query(() => company_entity_1.Company, { name: 'company' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CompanyResolver.prototype, "find", null);
CompanyResolver = __decorate([
    graphql_1.Resolver(() => company_entity_1.Company),
    __metadata("design:paramtypes", [company_service_1.CompanyService])
], CompanyResolver);
exports.CompanyResolver = CompanyResolver;
//# sourceMappingURL=company.resolver.js.map