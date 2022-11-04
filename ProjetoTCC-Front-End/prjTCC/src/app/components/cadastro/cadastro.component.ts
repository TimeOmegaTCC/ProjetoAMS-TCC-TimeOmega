import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public singupForm !: FormGroup
  constructor(private router: Router, private formBuilder : FormBuilder, private http : HttpClient) { }

  ngOnInit(): void {
    this.singupForm = this.formBuilder.group({
      nome:['',Validators.required],
      cpf:['',Validators.required],
      email:['',Validators.required],
      senha:['',Validators.required],
      telefone:['',Validators.required],
    })
  }

  singUp(){
    this.http.post<any>("https://localhost:7119/api/Client/", this.singupForm.value)
    .subscribe(res=>{
      alert("Cadastrado com sucesso");
      this.singupForm.reset();
      this.router.navigate(["/login"]);

    },err=>{
      alert("Não foi possivel comcluir o cadastro")
    })
  }

  login(){
    this.router.navigate(["/login"])
  }
}
