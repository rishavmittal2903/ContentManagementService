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
exports.ContentManagementService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ContentManagementService = class ContentManagementService {
    constructor(contentManagementModel) {
        this.contentManagementModel = contentManagementModel;
    }
    async createContentModel(createContentManagementDto) {
        const newCommitee = await new this.contentManagementModel(createContentManagementDto);
        return newCommitee.save();
    }
    async updateContentModal(contentId, updateContentModal) {
        const existingCommitee = await this.contentManagementModel.findOneAndUpdate({ contentId }, updateContentModal, { new: true });
        if (!existingCommitee) {
            throw new common_1.NotFoundException(`Commitee #${contentId} not found`);
        }
        return existingCommitee;
    }
    async getAllContentModals() {
        const Data = await this.contentManagementModel.find();
        if (!Data || Data.length == 0) {
            throw new common_1.NotFoundException('Content Modal data not found!');
        }
        return Data;
    }
    async getContentModalById(contentId) {
        const existingContentModal = await this.contentManagementModel
            .findOne({ contentId: contentId })
            .exec();
        if (!existingContentModal) {
            throw new common_1.NotFoundException(`Content data #${contentId} not found`);
        }
        return existingContentModal;
    }
    async deleteContentModalById(contentId) {
        const deletedContent = await this.contentManagementModel.findOneAndDelete({
            contentId,
        });
        if (!deletedContent) {
            throw new common_1.NotFoundException(`Content Modal #${contentId} not found`);
        }
        return deletedContent;
    }
};
exports.ContentManagementService = ContentManagementService;
exports.ContentManagementService = ContentManagementService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('ContentManagement')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ContentManagementService);
//# sourceMappingURL=contentManagement.service.js.map