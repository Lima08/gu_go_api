import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateBookDto } from 'src/dto/update-book.dto';
import { BookCreateError } from 'src/errors/books/BookCreateError';
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
      throw new BookCreateError({
        path: 'Book create services',
        error,
      });
    }
  }

  public async findAll(): Promise<Book[] | void> {
    // TODO: Tratamento de erro
    try {
      const response = await this.booksRepository.find();
      return response;
    } catch (error) {
      // TODO: Tratamento de erro
      return console.log('caiu no erro --->', { error });
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
      return console.log('caiu no erro --->', { error });
    }
  }

  public async update(id: number, updateBookDto: UpdateBookDto) {
    try {
      const response = await this.booksRepository.update(
        { id },
        { ...updateBookDto },
      );
      return response;
    } catch (error) {
      // TODO: Tratamento de erro
      return console.log('caiu no erro --->', { error });
    }
  }

  // public async remove(id: number) {
  //   try {
  //     const response: Book = await this.booksRepository.findOne({
  //       where: { id },
  //     });
  //     return response;
  //   } catch (error) {
  //     // TODO: Tratamento de erro
  //     return console.log(error);
  //   }
  // }
}
