"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const utility_1 = require("./common/utility/utility");
const contentManagement_schema_1 = require("./schema/contentManagement.schema");
const contentManagement_module_1 = require("./contentManagement/contentManagement.module");
const contentManagement_service_1 = require("./contentManagement/contentManagement.service");
const contentManagement_controller_1 = require("./contentManagement/contentManagement.controller");
const config_2 = require("./config/config");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [config_2.config],
                envFilePath: [
                    '.env.development.local',
                    '.env.local',
                    '.env.production.local',
                    '.env.test.local',
                ],
                isGlobal: true,
            }),
            mongoose_1.MongooseModule.forRoot(utility_1.mongoDbConnection, { dbName: 'flagManagement' }),
            mongoose_1.MongooseModule.forFeature([{ name: 'ContentManagement', schema: contentManagement_schema_1.ContentManagementSchema }]),
            contentManagement_module_1.ContentManagementModule
        ],
        controllers: [contentManagement_controller_1.ContentManagementController],
        providers: [contentManagement_service_1.ContentManagementService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map