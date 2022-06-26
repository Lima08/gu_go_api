import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/models/entities/book.entity';
import { Repository } from 'typeorm';
import { CreateBookDto } from '../dto/create-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  public async create(createBookDto: CreateBookDto): Promise<Book> {
    return this.booksRepository.save(createBookDto);
  }

  public async findAll(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  // TODO: Finalizar crud
  // findOne(id: number) {
  //   return `This action returns a #${id} book`;
  // }

  // update(id: number, updateBookDto: UpdateBookDto) {
  //   return `This action updates a #${id} book`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} book`;
  // }
}
