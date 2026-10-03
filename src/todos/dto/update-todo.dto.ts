import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class UpdateTodoDto {
  @IsOptional()
  @IsBoolean()
  isDone?: boolean;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @Length(3, 512)
  title?: string;

  constructor(isDone: boolean, title: string) {
    this.isDone = isDone;
    this.title = title;
  }
}
