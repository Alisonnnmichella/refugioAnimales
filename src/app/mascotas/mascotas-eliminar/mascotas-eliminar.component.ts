
import { Component, OnInit } from '@angular/core';
import { MascotasService } from '../mascotas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Mascota } from '../mascota';

@Component({
  selector: 'app-mascotas-eliminar',
  templateUrl: './mascotas-eliminar.component.html',
  styleUrls: ['./mascotas-eliminar.component.css']
})
export class MascotasEliminarComponent implements OnInit {
  private mascota:Mascota;
  constructor(   private route: ActivatedRoute,
    private mascotasService: MascotasService,
    private router: Router) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.mascotasService.getMascota(id).subscribe(data => {
      this.mascota=data;
    })
  }


  borrar():void{
    this.mascotasService.borrarMascota(this.mascota.id).subscribe( data=>
    {
      this.router.navigate(['/mascotas-listar']); 
      
    });
}
cancelar(){
  this.router.navigate(['/mascotas-listar']);

}

}