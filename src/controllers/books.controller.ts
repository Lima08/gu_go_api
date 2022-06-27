import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Book } from 'src/models/entities/book.entity';
import { CreateBookDto } from '../dto/create-book.dto';
import { BooksService } from '../services/books.service';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Post() // TODO: Middlewares segurança
  public async create(
    @Body() createBookDto: CreateBookDto,
  ): Promise<Book | void> {
    return this.booksService.create(createBookDto);
  }

  @Get()
  public async findAll(): Promise<Book[] | void> {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Book | void> {
    return this.booksService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
  //   return this.booksService.update(+id, updateBookDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.booksService.remove(+id);
  // }
}
