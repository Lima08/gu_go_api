import { IsInt, IsString, MaxLength } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @MaxLength(80)
  title: string;

  @IsString()
  @MaxLength(255)
  description: string;

  @IsString()
  @MaxLength(30)
  ISBN: string;

  @IsInt()
  publisherId: number;

  @IsInt()
  releaseYear: number;
}
