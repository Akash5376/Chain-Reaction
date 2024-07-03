import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  board: number[][] =[];
  rows =8;
  cols =8;
  maxCapacity: number[][] = [];


  constructor() {
    this.resetBoard();
   }

   resetBoard() {
    this.board = Array(this.rows).fill(null).map(() => Array(this.cols).fill(0));
    this.maxCapacity = this.calculateMaxCapacity();
  }

  calculateMaxCapacity() {
    let capacity = Array(this.rows).fill(null).map(() => Array(this.cols).fill(3));
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        if ((row === 0 || row === this.rows - 1) && (col === 0 || col === this.cols - 1)) {
          capacity[row][col] = 1;
        } else if (row === 0 || row === this.rows - 1 || col === 0 || col === this.cols - 1) {
          capacity[row][col] = 2;
        }
      }
    }
    return capacity;
  }

  handelCellClick(row: number, col: number) {
    this.board[row][col]++;
    this.checkForExplosions();
  }

  checkForExplosions() {
    let exploded = true;
    while (exploded) {
      exploded = false;
      let newBoard = this.board.map(arr => arr.slice());
      for (let row = 0; row < this.rows; row++) {
        for (let col = 0; col < this.cols; col++) {
          if (this.board[row][col] > this.maxCapacity[row][col]) {
            exploded = true;
            newBoard[row][col] -= (this.maxCapacity[row][col] + 1);
            this.spreadOrbs(row, col, newBoard);
          }
        }
      }
      this.board = newBoard;
    }
  }

  spreadOrbs(row: number, col: number, board: number[][]) {
    if (row > 0) board[row - 1][col]++;
    if (row < this.rows - 1) board[row + 1][col]++;
    if (col > 0) board[row][col - 1]++;
    if (col < this.cols - 1) board[row][col + 1]++;
  }
}