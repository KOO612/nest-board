import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
  private boards = [
    { name: 'a', contents: 'content 1', id: 1 },
    { name: 'b', contents: 'content 2', id: 2 },
    { name: 'c', contents: 'content 3', id: 3 },
    { name: 'd', contents: 'content 4', id: 4 },
    { name: 'e', contents: 'content 5', id: 5 },
    { name: 'f', contents: 'content 6', id: 6 },
    { name: 'g', contents: 'content 7', id: 7 },
    { name: 'h', contents: 'content 8', id: 8 },
    { name: 'i', contents: 'content 9', id: 9 },
    { name: 'j', contents: 'content 10', id: 10 },
  ];

  findAll() {
    return this.boards;
  }

  find(id: number) {
    // return index = this.boards.find((board) => board.id === id);
    // return this.boards.filter((board) => board.id === id);
    const index = this.boards.findIndex((board) => board.id === id);
    return this.boards[index];
  }

  create(data) {
    const newBoard = { id: this.getNextId(), ...data };
    this.boards.push(newBoard);
    return newBoard;
  }

  getNextId() {
    return this.boards.sort((a, b) => b.id - a.id)[0].id + 1;
  }

  update(id: number, data) {
    const index = this.getBoardId(id);
    if (index > -1) {
      this.boards[index] = {
        ...this.boards[index],
        ...data,
      };
      return this.boards[index];
    }
    return null;
  }

  getBoardId(id: number) {
    // return this.boards.find((board) => board.id === id);
    return this.boards.findIndex((board) => board.id === id);
  }

  delete(id: number) {
    const index = this.getBoardId(id);
    if (index > -1) {
      const deleteBoard = this.boards[index];
      this.boards.splice(index, 1);
      return deleteBoard;
    }
    return null;
  }
}
