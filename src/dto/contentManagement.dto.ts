import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

class IContentField{
  @ApiProperty()
  fieldName?:string;
  @ApiProperty()
  fieldType:string;
  @ApiProperty()
  langauges:any;
}

export class CreateContentModalDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly contentId: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly contentDescription: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly updatedBy: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly updatedAt: string;
  @IsArray()
  @ApiProperty()
  readonly fields: Array<IContentField>;
}


export class UpdateContentModalDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly contentId: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly contentDescription: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly updatedBy: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly updatedAt: string;
  @IsNotEmpty()
  @ApiProperty()
  readonly fields: Array<IContentField>;
}
