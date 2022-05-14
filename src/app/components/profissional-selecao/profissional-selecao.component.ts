import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Profissional } from 'src/app/models/profissional';
import { AtendimentoService } from 'src/app/services/atendimento.service';
import { ProfissionalService } from 'src/app/services/profissional.service';

@Component({
  selector: 'app-profissional-selecao',
  templateUrl: './profissional-selecao.component.html',
  styles: [
  ]
})
export class ProfissionalSelecaoComponent implements OnInit {

  constructor(private servicoProfissional: ProfissionalService,
              private servicoAtendimento: AtendimentoService
              ) { }
  
  profissional: Profissional = <Profissional>{};
  profissionais: Profissional[] = Array<Profissional>();

  setFiltro(profissional: Profissional): void{
    let filtroId = profissional.id;
    this.servicoAtendimento.setFiltro(filtroId);
  }

  @Output() eventoFiltro = new EventEmitter();

  filtrar(profissional_id: number): void{
    this.servicoAtendimento.setFiltro(profissional_id);
    this.eventoFiltro.emit(profissional_id);
  }

  @Input() id: number = -1;

  ngOnInit(): void {

    this.servicoProfissional.get().subscribe({
      next: (resposta: Profissional[]) => {
        this.profissionais = resposta;
      }
    })
  }

}
