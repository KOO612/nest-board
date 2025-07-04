import { IsOptional, MaxLength, MinLength } from 'class-validator';
import { CreateBoardDto } from './create-board.dto';
import { PartialType, PickType } from '@nestjs/swagger';

export class UpdateBoardDto {
  @IsOptional()
  @MinLength(2)
  @MaxLength(20)
  name?: string;

  @IsOptional()
  contents?: string;
}

// export class UpdateBoardDto extends PartialType(CreateBoardDto) {};
// export class UpdateBoardDto extends PickType(CreateBoardDto, ['name']) {}
