import { Component, OnInit } from '@angular/core';
import { NotasService } from '../notas-listagem/notas.service';
import { Nota } from './nota';

@Component({
  selector: 'app-notas-cadastro',
  templateUrl: './notas-cadastro.component.html',
  styleUrls: ['./notas-cadastro.component.css']
})
export class NotasCadastroComponent implements OnInit {

  nota: Nota;
  notas: any;
  constructor(private notaService: NotasService) {
    this.nota = new Nota();
  }

  ngOnInit() {
  }

  listar(){
    this.notaService.listar()
        .subscribe(response => this.notas = response);
  }

  adicionar() {
    this.notaService.adicionar(this.nota).subscribe((response) => {
        this.nota = new Nota();
    }), () => {
      this.listar() ;
    }
  }

}
