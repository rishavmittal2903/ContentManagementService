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
exports.ContentManagementController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const contentManagement_service_1 = require("./contentManagement.service");
const contentManagement_dto_1 = require("../dto/contentManagement.dto");
let ContentManagementController = class ContentManagementController {
    constructor(contentManagementService) {
        this.contentManagementService = contentManagementService;
    }
    async createContentModal(response, createContentModalDto) {
        try {
            const newCommitee = await this.contentManagementService.createContentModel(createContentModalDto);
            return response.status(common_1.HttpStatus.CREATED).json({
                message: 'Content Modal has been created successfully',
                newCommitee,
            });
        }
        catch (err) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Content Modal not created!',
                error: err,
            });
        }
    }
    async updateCommitee(response, contentId, updateContentModalDto) {
        try {
            const existingCommitee = await this.contentManagementService.updateContentModal(contentId, updateContentModalDto);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Content modal has been successfully updated',
                existingCommitee,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async getAllContentModals(response) {
        try {
            const contentData = await this.contentManagementService.getAllContentModals();
            return response.status(common_1.HttpStatus.OK).json({
                message: 'All content data found successfully',
                contentData,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async getContentModalById(response, contentId) {
        try {
            const existingData = await this.contentManagementService.getContentModalById(contentId);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Data found successfully',
                existingData,
            });
        }
        catch (err) {
            console.log(err);
            return response.status(err.status).json(err.response);
        }
    }
    async deleteContentModalById(response, contentId) {
        try {
            const deletedData = await this.contentManagementService.deleteContentModalById(contentId);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Data deleted successfully',
                deletedData,
            });
        }
        catch (err) {
            console.log(err);
            return response.status(err.status).json(err.response);
        }
    }
};
exports.ContentManagementController = ContentManagementController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, contentManagement_dto_1.CreateContentModalDto]),
    __metadata("design:returntype", Promise)
], ContentManagementController.prototype, "createContentModal", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, contentManagement_dto_1.UpdateContentModalDto]),
    __metadata("design:returntype", Promise)
], ContentManagementController.prototype, "updateCommitee", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ContentManagementController.prototype, "getAllContentModals", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ContentManagementController.prototype, "getContentModalById", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ContentManagementController.prototype, "deleteContentModalById", null);
exports.ContentManagementController = ContentManagementController = __decorate([
    (0, common_1.Controller)('ContentManagement'),
    (0, swagger_1.ApiTags)('ContentManagement'),
    __metadata("design:paramtypes", [contentManagement_service_1.ContentManagementService])
], ContentManagementController);
//# sourceMappingURL=contentManagement.controller.js.map