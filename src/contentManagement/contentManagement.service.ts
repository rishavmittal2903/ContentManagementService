import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateContentModalDto, UpdateContentModalDto } from 'src/dto/contentManagement.dto';
import { IContentManagement } from 'src/interface/IContentManagement';

@Injectable()
export class ContentManagementService {
  constructor(
    @InjectModel('ContentManagement') private contentManagementModel: Model<IContentManagement>,
  ) {}
  async createContentModel(
    createContentManagementDto: CreateContentModalDto,
  ): Promise<IContentManagement> {
    const newCommitee = await new this.contentManagementModel(createContentManagementDto);
    return newCommitee.save();
  }
  async updateContentModal(
    contentId: string,
    updateContentModal: UpdateContentModalDto,
  ): Promise<IContentManagement> {
    const existingCommitee = await this.contentManagementModel.findOneAndUpdate(
      { contentId },
      updateContentModal,
      { new: true },
    );
    if (!existingCommitee) {
      throw new NotFoundException(`Commitee #${contentId} not found`);
    }
    return existingCommitee;
  }
  async getAllContentModals(): Promise<IContentManagement[]> {
    const Data = await this.contentManagementModel.find();
    if (!Data || Data.length == 0) {
      throw new NotFoundException('Content Modal data not found!');
    }
    return Data;
  }
  async getContentModalById(contentId: string): Promise<IContentManagement> {
    const existingContentModal = await this.contentManagementModel
      .findOne({ contentId: contentId })
      .exec();
    if (!existingContentModal) {
      throw new NotFoundException(`Content data #${contentId} not found`);
    }
    return existingContentModal;
  }
 
  async deleteContentModalById(contentId: string): Promise<any> {
    const deletedContent = await this.contentManagementModel.findOneAndDelete({
      contentId,
    });
    if (!deletedContent) {
      throw new NotFoundException(`Content Modal #${contentId} not found`);
    }
    return deletedContent;
  }
}
