import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { ContentManagementService } from './contentManagement.service';
import { ContentManagement } from 'src/schema/contentManagement.schema';
import { CreateContentModalDto, UpdateContentModalDto } from 'src/dto/contentManagement.dto';
@Resolver()
export class ContentManagementResolver {
  constructor(private readonly contentManagementService: ContentManagementService) {}
  @Query(() => [ContentManagement])
  async getAllContentModals() {
    return this.contentManagementService.getAllContentModals();
  }
  @Query(() => ContentManagement)
  async getContentModalById(@Args('id', { type: () => String }) id: string) {
    return this.contentManagementService.getContentModalById(id);
  }
  @Query(() => ContentManagement)
  async deleteContentModalById(@Args('id', { type: () => String }) id: string) {
    return this.contentManagementService.deleteContentModalById(id);
  }
  @Mutation(() => ContentManagement)
  async createContentModel(@Args('contentData') contentData: CreateContentModalDto) {
    return this.contentManagementService.createContentModel(contentData);
  }

  @Mutation(() => ContentManagement)
  async updateContentModal(
    @Args('updateContentModal') updateContentModal: UpdateContentModalDto,
    @Args('contentId') id: string,
  ) {
    return this.contentManagementService.updateContentModal(id, updateContentModal);
  }
}
