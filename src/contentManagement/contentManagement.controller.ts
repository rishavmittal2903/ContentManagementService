import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ContentManagementService } from './contentManagement.service';
import { CreateContentModalDto, UpdateContentModalDto } from 'src/dto/contentManagement.dto';
@Controller('ContentManagement')
@ApiTags('ContentManagement')
export class ContentManagementController {
  constructor(private readonly contentManagementService: ContentManagementService) {}
  @Post('create')
  async createContentModal(
    @Res() response,
    @Body() createContentModalDto: CreateContentModalDto,
  ) {
    try {
      const newCommitee =
        await this.contentManagementService.createContentModel(createContentModalDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Content Modal has been created successfully',
        newCommitee,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Content Modal not created!',
        error: err,
      });
    }
  }
  @Put('/:id')
  async updateCommitee(
    @Res() response,
    @Param('id') contentId: string,
    @Body() updateContentModalDto: UpdateContentModalDto,
  ) {
    try {
      const existingCommitee = await this.contentManagementService.updateContentModal(
        contentId,
        updateContentModalDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Content modal has been successfully updated',
        existingCommitee,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Get()
  async getAllContentModals(@Res() response) {
    try {
      const contentData = await this.contentManagementService.getAllContentModals();
      return response.status(HttpStatus.OK).json({
        message: 'All content data found successfully',
        contentData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Get('/:id')
  async getContentModalById(@Res() response, @Param('id') contentId: string) {
    try {
      const existingData =
        await this.contentManagementService.getContentModalById(contentId);
      return response.status(HttpStatus.OK).json({
        message: 'Data found successfully',
        existingData,
      });
    } catch (err) {
      console.log(err);
      return response.status(err.status).json(err.response);
    }
  }
  @Delete('/:id')
  async deleteContentModalById(@Res() response, @Param('id') contentId: string) {
    try {
      const deletedData =
        await this.contentManagementService.deleteContentModalById(contentId);
      return response.status(HttpStatus.OK).json({
        message: 'Data deleted successfully',
        deletedData,
      });
    } catch (err) {
      console.log(err);
      return response.status(err.status).json(err.response);
    }
  }
}
