import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { AppComponent } from './app.component';
import {TabViewModule} from 'primeng/tabview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { NotasListagemComponent } from './notas-listagem/notas-listagem.component';
import { NotasService } from './notas-listagem/notas.service';
import { NotasCadastroComponent } from './notas-cadastro/notas-cadastro.component';
import { PanelHeaderComponent } from './panel-header/panel-header.component';


@NgModule({
  declarations: [
    AppComponent,
    NotasListagemComponent,
    NotasCadastroComponent,
    PanelHeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    BrowserAnimationsModule,
    ButtonModule,
    TabViewModule,
    InputTextModule
  ],
  providers: [NotasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
