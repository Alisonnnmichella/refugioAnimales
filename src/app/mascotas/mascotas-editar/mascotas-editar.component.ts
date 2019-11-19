import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MascotasService } from '../mascotas.service';
import { Mascota } from '../mascota';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-mascotas-editar',
  templateUrl: './mascotas-editar.component.html',
  styleUrls: ['./mascotas-editar.component.css']
})
export class MascotasEditarComponent implements OnInit {
  private mascota: Mascota;
  private profileForm: FormGroup = this.fb.group({
    id: [''],
    nombre: ['', Validators.required],
    tipo: ['', Validators.required],
    descripcion: ['', Validators.required],
    edad: ['', [Validators.pattern('[0-9]*'), Validators.max(80), Validators.required]],
    url: ['',Validators.required]
  });

  constructor(
    private route: ActivatedRoute,
    private mascotasService: MascotasService,
    private fb: FormBuilder,
    private router: Router
  ) { }


  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.mascotasService.getMascota(id).subscribe(data => {
      this.profileForm.setValue(data);
    })
  }
  onSubmit() {

    console.log(this.profileForm.value)
    this.mascotasService.editarMascota(this.profileForm.value).subscribe(data => {
      this.router.navigate(['/mascotas-listar']);
    });

  }
  cancelar() {
    this.router.navigate(['/mascotas-listar']);
  }


}
