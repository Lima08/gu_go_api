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

  public async create(createBookDto: CreateBookDto): Promise<Book | void> {
    try {
      const response = await this.booksRepository.save(createBookDto);
      return response;
    } catch (error) {
      // TODO: Tratamento de erro
      return console.log(error);
    }
  }

  public async findAll(): Promise<Book[] | void> {
    try {
      const response = await this.booksRepository.find();
      return response;
    } catch (error) {
      // TODO: Tratamento de erro
      return console.log(error);
    }
  }

  public async findOne(id: number): Promise<Book | void> {
    try {
      const response: Book = await this.booksRepository.findOne({
        where: { id },
      });
      return response;
    } catch (error) {
      // TODO: Tratamento de erro
      return console.log(error);
    }
  }

  // update(id: number, updateBookDto: UpdateBookDto) {
  //   return `This action updates a #${id} book`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} book`;
}
