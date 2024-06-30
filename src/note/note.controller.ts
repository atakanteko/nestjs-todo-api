import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { CreateNoteDto } from "./dto/create-note.dto";
import { Note } from "./schemas/note.schema";
import { NoteService } from "./note.service";
import { UpdateNoteDto } from "./dto/update-note-dto";

@Controller("note")
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post("new")
  async createNote(@Body() note: CreateNoteDto): Promise<Note> {
    return this.noteService.create(note);
  }

  @Get()
  async findAllNotes(): Promise<Note[]> {
    return this.noteService.findAll();
  }

  @Get(":id")
  async findNote(@Param("id") id: string): Promise<Note> {
    return this.noteService.findNoteByID(id);
  }

  @Put(":id")
  async updateNote(
    @Param("id") id: string,
    @Body() note: UpdateNoteDto
  ): Promise<Note> {
    return this.noteService.updateById(id, note);
  }

  @Delete(":id")
  async deleteNote(@Param("id") id: string): Promise<Note> {
    return this.noteService.deleteById(id);
  }
}
