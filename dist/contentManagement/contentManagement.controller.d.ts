import { ContentManagementService } from './contentManagement.service';
import { CreateContentModalDto, UpdateContentModalDto } from 'src/dto/contentManagement.dto';
export declare class ContentManagementController {
    private readonly contentManagementService;
    constructor(contentManagementService: ContentManagementService);
    createContentModal(response: any, createContentModalDto: CreateContentModalDto): Promise<any>;
    updateCommitee(response: any, contentId: string, updateContentModalDto: UpdateContentModalDto): Promise<any>;
    getAllContentModals(response: any): Promise<any>;
    getContentModalById(response: any, contentId: string): Promise<any>;
    deleteContentModalById(response: any, contentId: string): Promise<any>;
}
