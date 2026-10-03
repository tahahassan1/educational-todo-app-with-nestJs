import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 512)
  title: string;

  constructor(title: string) {
    this.title = title;
  }
}
