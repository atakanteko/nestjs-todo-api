import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateNoteDto } from "./dto/create-note.dto";
import { Note } from "./schemas/note.schema";
import { NoteService } from "./note.service";

@Controller("note")
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post("new")
  async createBook(@Body() note: CreateNoteDto): Promise<Note> {
    return this.noteService.create(note);
  }
}
