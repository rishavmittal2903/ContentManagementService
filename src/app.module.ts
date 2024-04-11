import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoDbConnection } from './common/utility/utility';
import { ContentManagementSchema } from './schema/contentManagement.schema';
import { ContentManagementModule } from './contentManagement/contentManagement.module';
import { ContentManagementService } from './contentManagement/contentManagement.service';
import { ContentManagementController } from './contentManagement/contentManagement.controller';
import { config } from './config/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      envFilePath: [
        '.env.development.local',
        '.env.local',
        '.env.production.local',
        '.env.test.local',
      ],
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      mongoDbConnection,
      { dbName: 'flagManagement' },
    ),
    MongooseModule.forFeature([{name:'ContentManagement', schema: ContentManagementSchema}]),
    ContentManagementModule
  ],
  controllers: [ContentManagementController],
  providers: [ContentManagementService],
})
export class AppModule {}
