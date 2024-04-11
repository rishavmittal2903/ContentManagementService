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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentManagementResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const contentManagement_service_1 = require("./contentManagement.service");
const contentManagement_schema_1 = require("../schema/contentManagement.schema");
const contentManagement_dto_1 = require("../dto/contentManagement.dto");
let ContentManagementResolver = class ContentManagementResolver {
    constructor(contentManagementService) {
        this.contentManagementService = contentManagementService;
    }
    async getAllContentModals() {
        return this.contentManagementService.getAllContentModals();
    }
    async getContentModalById(id) {
        return this.contentManagementService.getContentModalById(id);
    }
    async deleteContentModalById(id) {
        return this.contentManagementService.deleteContentModalById(id);
    }
    async createContentModel(contentData) {
        return this.contentManagementService.createContentModel(contentData);
    }
    async updateContentModal(updateContentModal, id) {
        return this.contentManagementService.updateContentModal(id, updateContentModal);
    }
};
exports.ContentManagementResolver = ContentManagementResolver;
__decorate([
    (0, graphql_1.Query)(() => [contentManagement_schema_1.ContentManagement]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContentManagementResolver.prototype, "getAllContentModals", null);
__decorate([
    (0, graphql_1.Query)(() => contentManagement_schema_1.ContentManagement),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContentManagementResolver.prototype, "getContentModalById", null);
__decorate([
    (0, graphql_1.Query)(() => contentManagement_schema_1.ContentManagement),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContentManagementResolver.prototype, "deleteContentModalById", null);
__decorate([
    (0, graphql_1.Mutation)(() => contentManagement_schema_1.ContentManagement),
    __param(0, (0, graphql_1.Args)('contentData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contentManagement_dto_1.CreateContentModalDto]),
    __metadata("design:returntype", Promise)
], ContentManagementResolver.prototype, "createContentModel", null);
__decorate([
    (0, graphql_1.Mutation)(() => contentManagement_schema_1.ContentManagement),
    __param(0, (0, graphql_1.Args)('updateContentModal')),
    __param(1, (0, graphql_1.Args)('contentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contentManagement_dto_1.UpdateContentModalDto, String]),
    __metadata("design:returntype", Promise)
], ContentManagementResolver.prototype, "updateContentModal", null);
exports.ContentManagementResolver = ContentManagementResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [contentManagement_service_1.ContentManagementService])
], ContentManagementResolver);
//# sourceMappingURL=contentManagement.resolver.js.map