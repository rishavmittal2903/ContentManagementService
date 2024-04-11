import { Module } from '@nestjs/common';
import { ContentManagementService } from './contentManagement.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ContentManagementController } from './contentManagement.controller';
import { ContentManagement, ContentManagementSchema } from 'src/schema/contentManagement.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ContentManagement.name, schema: ContentManagementSchema },
    ]),
  ],
  controllers: [ContentManagementController],
  providers: [ContentManagementService],
  exports: [ContentManagementService],
})
export class ContentManagementModule {}
