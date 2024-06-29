import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateNoteDto } from "./dto/create-note.dto";
import { Note } from "./schemas/note.schema";
import { NoteService } from "./note.service";

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
}
