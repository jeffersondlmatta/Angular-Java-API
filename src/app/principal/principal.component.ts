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

  //visibilidade da tabela
  tabela:boolean = true;

  constructor(private servico: ClienteService) { }

  selecionar(): void {
    this.servico.selecionar()
      .subscribe(retorno => this.clientes = retorno);
  }

  cadastrar(): void {
    this.servico.cadastrar(this.cliente)
      .subscribe(retorno => {

        //cadastra cliente no vetor
        this.clientes.push(retorno);

        //limpa o formulario
        this.cliente = new Cliente();

        alert("cliente cadastrado com sucesso");
      });
  }

  //seleciona um
  selecionarCliente(posicao:number): void {

    //selecionar cliente no vetor
    this.cliente = this.clientes[posicao];

    //visibilidade dos botoes
    this.btnCadastro = false;
    this.tabela = false;
  }

  //editar cliente
  editar(): void {
    this.servico.editar(this.cliente)
      .subscribe(retorno => {

        //obtem posicao do vetor
        let posicao = this.clientes.findIndex(cliente =>{
          return cliente.id  == retorno.id;
        })
        //alterar os dados no vetor
        this.clientes[posicao] = retorno;

        //limpa form
        this.cliente = new Cliente();

        //visibilidade dos btns
        this.btnCadastro = true;
        this.tabela = true;
        alert("cliente editado com sucesso");
      });
  }

  //remover
  remover():void {
    this.servico.remover(this.cliente.id)
      .subscribe( retorno => {

        //obtem posicao do vetor
        let posicao = this.clientes.findIndex(cliente =>{
          return cliente.id  === this.cliente.id;
        })

        //remover cliente do votor
        this.clientes.splice(posicao, 1);

        //limpa form
        this.cliente = new Cliente();

        //visibilidade dos btns
        this.btnCadastro = true;
        this.tabela = true;
        alert("cliente removido com sucesso");
      });
  }

  //cancelar
  cancelar():void {
    this.cliente = new Cliente();
    this.btnCadastro = true;
    this.tabela = true;
  }



  ngOnInit(): void {
    this.selecionar();
  }
}
