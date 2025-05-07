import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  empresa: any = {};
  
  tiposEmpresa = [
    'Empresa Individual',
    'Sociedade Comercial',
    'Sociedade por Ações (S/A)',
    'Sociedade Civil (Simples)',
    'Empresa/Sociedade Estrangeira no País'
  ];

  onSubmit() {
    console.log('Dados enviados:', this.empresa);
    // Adicione lógica de envio aqui
  }
}