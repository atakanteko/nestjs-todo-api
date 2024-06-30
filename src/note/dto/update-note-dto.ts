import { IsBoolean, IsOptional, IsString } from "class-validator";

export class UpdateNoteDto {
  @IsString()
  @IsOptional()
  readonly content: string;

  @IsBoolean()
  @IsOptional()
  important: boolean;
}
