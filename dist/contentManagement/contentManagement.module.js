"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentManagementModule = void 0;
const common_1 = require("@nestjs/common");
const contentManagement_service_1 = require("./contentManagement.service");
const mongoose_1 = require("@nestjs/mongoose");
const contentManagement_controller_1 = require("./contentManagement.controller");
const contentManagement_schema_1 = require("../schema/contentManagement.schema");
let ContentManagementModule = class ContentManagementModule {
};
exports.ContentManagementModule = ContentManagementModule;
exports.ContentManagementModule = ContentManagementModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: contentManagement_schema_1.ContentManagement.name, schema: contentManagement_schema_1.ContentManagementSchema },
            ]),
        ],
        controllers: [contentManagement_controller_1.ContentManagementController],
        providers: [contentManagement_service_1.ContentManagementService],
        exports: [contentManagement_service_1.ContentManagementService],
    })
], ContentManagementModule);
//# sourceMappingURL=contentManagement.module.js.map