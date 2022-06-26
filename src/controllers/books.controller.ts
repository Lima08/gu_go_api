import { Controller, Get, Post, Body } from '@nestjs/common';
import { Book } from 'src/models/entities/book.entity';
import { BooksService } from '../services/books.service';
import { CreateBookDto } from '../dto/create-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  public async create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    console.log('sadfasdfasdffsd');
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
