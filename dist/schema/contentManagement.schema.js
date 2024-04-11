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
exports.ContentManagementSchema = exports.ContentManagement = exports.ContentField = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const graphql_1 = require("@nestjs/graphql");
let ContentField = class ContentField {
};
exports.ContentField = ContentField;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ContentField.prototype, "fieldName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ContentField.prototype, "fieldType", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ContentField.prototype, "langauges", void 0);
exports.ContentField = ContentField = __decorate([
    (0, graphql_1.ObjectType)()
], ContentField);
let ContentManagement = class ContentManagement {
};
exports.ContentManagement = ContentManagement;
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ContentManagement.prototype, "contentId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: false }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ContentManagement.prototype, "contentDescription", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ContentField]),
    (0, mongoose_1.Prop)({ required: true, unique: false }),
    __metadata("design:type", Array)
], ContentManagement.prototype, "fields", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, mongoose_1.Prop)({ required: false, unique: false }),
    __metadata("design:type", String)
], ContentManagement.prototype, "updatedBy", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, mongoose_1.Prop)({ required: false, unique: false }),
    __metadata("design:type", String)
], ContentManagement.prototype, "updatedAt", void 0);
exports.ContentManagement = ContentManagement = __decorate([
    (0, mongoose_1.Schema)(),
    (0, graphql_1.ObjectType)()
], ContentManagement);
exports.ContentManagementSchema = mongoose_1.SchemaFactory.createForClass(ContentManagement);
//# sourceMappingURL=contentManagement.schema.js.map