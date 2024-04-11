import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { ObjectType, Field } from '@nestjs/graphql';
export type ContentManagementDocument = ContentManagement & Document;



@ObjectType()
export class ContentField {
  @Field()
  fieldName: string;
  @Field()
  fieldType: string;
  @Field()
  langauges: string;
}

@Schema()
@ObjectType()
export class ContentManagement {
  @Prop({ required: true, unique: true })
  @Field()
  contentId: string;
  @Prop({ required: true, unique: false })
  @Field()
  contentDescription: string;
  @Field(() => [ContentField])
  @Prop({ required: true, unique: false })
  fields: ContentField[];
  @Field()
  @Prop({ required: false, unique: false })
  updatedBy: string;
  @Field()
  @Prop({ required: false, unique: false })
  updatedAt: string;
}

export const ContentManagementSchema = SchemaFactory.createForClass(ContentManagement);
