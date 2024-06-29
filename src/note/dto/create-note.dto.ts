import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateNoteDto {
  @IsString()
  @IsNotEmpty()
  readonly content: string;

  @IsBoolean()
  @IsNotEmpty()
  important: boolean;
}
