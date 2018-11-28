import { Component, OnInit } from '@angular/core';
import { NotasService } from './notas.service';

@Component({
  selector: 'app-notas-listagem',
  templateUrl: './notas-listagem.component.html',
  styleUrls: ['./notas-listagem.component.css']
})
export class NotasListagemComponent implements OnInit {

  notas: Array<any>;
  value: Date;

  constructor(private notasService: NotasService) {

   }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.notasService.listar()
        .subscribe(response => this.notas = response);
  }
}
