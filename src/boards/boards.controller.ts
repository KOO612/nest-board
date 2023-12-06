import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './boards.model';
import { CreateBoardDto } from './dto/CreateBoard.dto';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  // 모든 게시물을 가져오는 handler
  @Get()
  getAllTask(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post()
  createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    return this.boardsService.createBoard(createBoardDto);
  }
}
