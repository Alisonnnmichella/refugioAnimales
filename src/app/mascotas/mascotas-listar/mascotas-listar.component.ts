import { Component, OnInit } from '@angular/core';
import { MascotasService } from '../mascotas.service';
import { Mascota } from '../mascota';
import { Router} from '@angular/router';
@Component({
  selector: 'app-mascotas-listar',
  templateUrl: './mascotas-listar.component.html',
  styleUrls: ['./mascotas-listar.component.css']
})
export class MascotasListarComponent implements OnInit {
public mascotas:Array<Mascota> = [];
  

constructor(private mascotasService: MascotasService,private router:Router) { }

  ngOnInit() {
   this.obtenerMascotas();
  }
  obtenerMascotas():void{
    this.mascotasService.getMascotas().subscribe((data)=>{
      this.mascotas = data; })
  }
  borrar(id:number):void{
    this.mascotasService.borrarMascota(id).subscribe( data=>
    {
      this.obtenerMascotas();
      this.router.navigate(['/mascotas-listar']);
    });
    
 }


}
