import { Body, Controller, Get, Post } from '@nestjs/common';
import { Book } from 'src/models/entities/book.entity';
import { CreateBookDto } from '../dto/create-book.dto';
import { BooksService } from '../services/books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post() // TODO: Middlewares segurança
  public async create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.booksService.create(createBookDto);
  }

  @Get()
  public async findAll(): Promise<Book[]> {
    return this.booksService.findAll();
  }

  // TODO: Finalizar crud
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.booksService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
  //   return this.booksService.update(+id, updateBookDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.booksService.remove(+id);
  // }
}
