import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UpdateBookDto } from 'src/dto/update-book.dto';
import { Book } from 'src/models/entities/book.entity';
import { CreateBookDto } from '../dto/create-book.dto';
import { BooksService } from '../services/books.service';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Post() // TODO: Middlewares segurança + tratamento das respostas em caso de erro
  @HttpCode(500)
  public async create(
    @Body() createBookDto: CreateBookDto,
  ): Promise<Book | void> {
    try {
      const response = await this.booksService.create(createBookDto);
      return response;
    } catch (error) {
      console.log({ error });
      return error;
      // PAREI AQUI: Como fazer um tratamento de erro para a resposta? https://stackoverflow.com/questions/51112952/what-is-the-nestjs-error-handling-approach-business-logic-error-vs-http-error
    }
  }

  @Get()
  public async findAll(): Promise<Book[] | void> {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Book | void> {
    return this.booksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(+id, updateBookDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.booksService.remove(+id);
  // }
}
