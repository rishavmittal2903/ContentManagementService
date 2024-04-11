export interface IField {
    fieldName: string;
    fieldType: string;
    langauges: Record<string, string | Record<string, any>>;
}
export interface IContentManagement {
    contentId: string;
    contentDescription?: string;
    fields: Array<IField>;
    updatedBy: string;
    updatedAt: string;
}
