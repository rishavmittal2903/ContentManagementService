declare class IContentField {
    fieldName?: string;
    fieldType: string;
    langauges: any;
}
export declare class CreateContentModalDto {
    readonly contentId: string;
    readonly contentDescription: string;
    readonly updatedBy: string;
    readonly updatedAt: string;
    readonly fields: Array<IContentField>;
}
export declare class UpdateContentModalDto {
    readonly contentId: string;
    readonly contentDescription: string;
    readonly updatedBy: string;
    readonly updatedAt: string;
    readonly fields: Array<IContentField>;
}
export {};
