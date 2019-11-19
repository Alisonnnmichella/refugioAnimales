import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotasService } from '../mascotas.service';
import { Mascota } from '../mascota';

@Component({
  selector: 'app-mascotas-tarjeta',
  templateUrl: './mascotas-tarjeta.component.html',
  styleUrls: ['./mascotas-tarjeta.component.css']
})
export class MascotasTarjetaComponent implements OnInit {
  private mascota: Mascota;
  constructor(private route: ActivatedRoute,
    private mascotasService: MascotasService,
    private router: Router) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.mascotasService.getMascota(id).subscribe(data => {
      this.mascota = data;
    });

  }
  volver() {
    this.router.navigate(['/mascotas-adoptar']);
  }

}
