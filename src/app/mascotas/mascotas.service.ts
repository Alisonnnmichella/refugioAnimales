import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mascota } from './mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {
  private baseUrl: String = "http://localhost:8090/mascotas";

  constructor(private httpClient: HttpClient) { }

  public getMascotas() {
    return this.httpClient.get<Array<Mascota>>(`${this.baseUrl}`);
  }

  public addMascota(mascota: Mascota) {
    return this.httpClient.post<Mascota>(`${this.baseUrl}`, mascota);
  }

  public getMascota(id: number) {
    return this.httpClient.get<Mascota>(`${this.baseUrl}/${id}`);
  }

  public editarMascota(mascota: Mascota) {
    return this.httpClient.put<Mascota>(`${this.baseUrl}`, mascota);
  }

  public borrarMascota(id: number) {
    return this.httpClient.delete<Mascota>(`${this.baseUrl}/${id}`);
  }

}
