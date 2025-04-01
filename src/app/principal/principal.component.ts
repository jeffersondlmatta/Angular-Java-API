import {Component, OnInit} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {Cliente} from "../modelo/Cliente";
import {ClienteService} from "../servico/cliente.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  providers: [ClienteService]
})
export class PrincipalComponent implements OnInit {

  //Obj tipo cliente
  cliente = new Cliente();

  btnCadastro: boolean = true;
  clientes: Cliente[] = [];

  constructor(private servico: ClienteService) { }

  selecionar(): void {
    this.servico.selecionar()
      .subscribe(retorno => this.clientes = retorno);
  }

  cadastrar(): void {
    this.servico.cadastrar(this.cliente)
      .subscribe(retorno => {
        this.clientes.push(retorno);
        //this.cliente = new Cliente();
      });
  }

  ngOnInit(): void {
    this.selecionar();
  }
}
