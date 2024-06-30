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

  async findAll(): Promise<Note[]> {
    const res = await this.noteModel.find();
    return res;
  }

  async findNoteByID(id: string): Promise<Note> {
    const res = await this.noteModel.findById(id);
    return res;
  }

  async updateById(id: string, note: Note): Promise<Note> {
    const res = await this.noteModel.findByIdAndUpdate(id, note, {
      new: true,
      runValidators: true,
    });
    return res;
  }

  async deleteById(id: string): Promise<Note> {
    const res = await this.noteModel.findByIdAndDelete(id);
    return res;
  }
}
