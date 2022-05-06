import { Component, OnInit } from '@angular/core';
import { Atendimento } from 'src/app/models/atendimento';
import { IComponentList } from '../i-component-list';

@Component({
  selector: 'app-agenda-list',
  templateUrl: './agenda-list.component.html',
  styles: [
  ]
})
export class AgendaListComponent implements OnInit, IComponentList<Atendimento> {

  constructor() { }

  registros: Atendimento[] = Array<Atendimento>();

  get(termoBusca?: string): void {
    throw new Error('Method not implemented.');
  }
  delete(id: number): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}