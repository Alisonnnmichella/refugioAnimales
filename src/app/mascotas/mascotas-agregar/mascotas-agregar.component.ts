import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MascotasService } from '../mascotas.service';
import { Mascota } from '../mascota';
import { Router } from '@angular/router';



@Component({
  selector: 'app-mascotas-agregar',
  templateUrl: './mascotas-agregar.component.html',
  styleUrls: ['./mascotas-agregar.component.css']
})
export class MascotasAgregarComponent implements OnInit {
  
  constructor(private fb: FormBuilder,private mascotasService: MascotasService,private router: Router) { }
 profileForm = this.fb.group({
    nombre: ['',Validators.required],
    tipo: ['',Validators.required],
    descripcion:['',Validators.required],
    edad:['',[Validators.pattern('[0-9]*'),Validators.max(80),Validators.required]],
    url:['https://images.all-free-download.com/images/graphiclarge/16_pet_vector_silhouettes_120110.jpg',Validators.required]

    });
  ngOnInit() {
   
  }
  onSubmit(){

    console.log(this.profileForm.value)
    this.mascotasService.addMascota(this.profileForm.value).subscribe(data => {
      this.router.navigate(['/mascotas-listar']);
});
    
  }

  limpiar(){
    this.profileForm.reset();
  }
  cancelar(){
    this.router.navigate(['/mascotas-listar']);
  }




}
