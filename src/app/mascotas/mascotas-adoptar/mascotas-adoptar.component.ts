import { Component, OnInit } from '@angular/core';
import { MascotasService } from '../mascotas.service';
import { Mascota } from '../mascota';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mascotas-adoptar',
  templateUrl: './mascotas-adoptar.component.html',
  styleUrls: ['./mascotas-adoptar.component.css']
})
export class MascotasAdoptarComponent implements OnInit {
  private mascotas:Mascota[];
  
  constructor(private mascotasService:MascotasService, private router:Router) { }

  ngOnInit() {
    this.mascotasService.getMascotas().subscribe(data=>
      this.mascotas=data);
  }
  verTarjeta(id:number){
    
     this.router.navigate(['/mascotas-tarjeta', 'id']);

  }

}


