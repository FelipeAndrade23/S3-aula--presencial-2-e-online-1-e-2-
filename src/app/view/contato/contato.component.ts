import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
onSubmit(form:NgForm ){
  let dados=`
  Nome: ${form.value.nome}
  Email: ${form.value.email}
  Telefone: ${form.value.email}
  Mensagem> ${form.value.email}` ;


}
}

