import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../game.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
  animations: [
    trigger('explosion', [
      state('normal', style({
        backgroundColor: 'lightgray',
        transform: 'scale(1)'
      })),
      state('exploded', style({
        backgroundColor: 'red',
        transform: 'scale(1.2)'
      })),
      transition('normal <=> exploded', [
        animate('0.3s')
      ])
    ])
  ]
})
export class GameBoardComponent implements OnInit {
  constructor(public gameService: GameService) { }

  ngOnInit(): void {
  }

  onCellClick(row: number, col: number): void {
    this.gameService.handelCellClick(row, col);
  }

  getState(row: number, col: number): string {
    return this.gameService.board[row][col] > this.gameService.maxCapacity[row][col] ? 'exploded' : 'normal';
  }

  getClass(value: number): string {
    return `ball-${value}`;
  }
}
