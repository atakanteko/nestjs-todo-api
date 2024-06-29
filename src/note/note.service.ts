import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Note } from "./schemas/note.schema";
import { Model } from "mongoose";
import { CreateNoteDto } from "./dto/create-note.dto";

@Injectable()
export class NoteService {
  constructor(@InjectModel(Note.name) private noteModel: Model<Note>) {}

  async create(book: Note): Promise<Note> {
    const res = await this.noteModel.create(book);
    return res;
  }
}
