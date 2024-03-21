import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Logs } from '../core/interfaces/logs';
import { LogsService } from '../core/service/logs.service';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { takeWhile } from 'rxjs';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-log',
  standalone: true,
  imports: [NavbarComponent, NgFor],
  templateUrl: './log.component.html',
  styleUrl: './log.component.css'
})
export class LogComponent implements OnInit {
  logList: Logs[] = [];

  constructor(
    private logsService: LogsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getLogs();

    // Establecer un intervalo para realizar consultas periódicas
    setInterval(() => {
      this.getLogs();
    }, 2000); // Intervalo de 5 segundos (ajusta según tus necesidades)
  }

  getLogs() {
    this.logsService.getlog().subscribe({
      next: (result) => {
        this.logList = result.data;
      },
      error: (err) => {
        console.log(err);
        if (err.status === 401) {
          this.router.navigate(['/login']);
        }
      }
    });
  }
}