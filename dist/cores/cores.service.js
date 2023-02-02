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
exports.CoresService = void 0;
const camelcaseKeys = require("camelcase-keys");
const operators_1 = require("rxjs/operators");
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
let CoresService = class CoresService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    findAll() {
        const data = this.httpService.get('/cores').pipe(operators_1.map((res) => res.data), operators_1.map((data) => camelcaseKeys(data, { deep: true })));
        return data;
    }
    findOne(id) {
        const data = this.httpService.get(`/cores/${id}`).pipe(operators_1.map((res) => res.data), operators_1.map((data) => camelcaseKeys(data, { deep: true })));
        return data;
    }
};
CoresService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], CoresService);
exports.CoresService = CoresService;
//# sourceMappingURL=cores.service.js.map