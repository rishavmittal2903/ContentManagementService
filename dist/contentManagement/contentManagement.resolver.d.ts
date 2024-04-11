import { ContentManagementService } from './contentManagement.service';
import { CreateContentModalDto, UpdateContentModalDto } from 'src/dto/contentManagement.dto';
export declare class ContentManagementResolver {
    private readonly contentManagementService;
    constructor(contentManagementService: ContentManagementService);
    getAllContentModals(): Promise<import("../interface/IContentManagement").IContentManagement[]>;
    getContentModalById(id: string): Promise<import("../interface/IContentManagement").IContentManagement>;
    deleteContentModalById(id: string): Promise<any>;
    createContentModel(contentData: CreateContentModalDto): Promise<import("../interface/IContentManagement").IContentManagement>;
    updateContentModal(updateContentModal: UpdateContentModalDto, id: string): Promise<import("../interface/IContentManagement").IContentManagement>;
}
