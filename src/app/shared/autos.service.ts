import { Injectable } from "@angular/core";
import { Auto } from "../datos/auto";

@Injectable({
    providedIn: "root"
})

export class AutosService{
    listaAutos: Auto[] = [];

    obtenListaAutos(): Auto[] {
        if ( this.listaAutos.length == 0) {
            this.listaAutos = this._determinaListaAutos();
        }
        return this.listaAutos;
    }

    obtenAuto( id: number ): Auto | undefined {
        if ( this.listaAutos.length == 0) {
            this.listaAutos = this._determinaListaAutos();
        }
        return this.listaAutos.find( auto => auto.id == id );
    }

    private _determinaListaAutos(): Auto[] {
        return this.listaAutos = [
            {
                id: 1,
                marca: "Porsche",
                modelo: "Taycan",
                anio: 2022,
                color: "Azul Claro",
                kilometros: 0,
                calificacion: 5,
                precio: 140345,
                imagenUrl: "../assets/1_Porsche_Taycan.webp"
            },
            {
                id: 2,
                marca: "Tesla",
                modelo: "Model 3",
                anio: 2022,
                color: "Blanco",
                kilometros: 0,
                calificacion: 4.5,
                precio: 56490,
                imagenUrl: "../assets/2_Tesla_Model3.webp"
            },
            {
                id: 3,
                marca: "Hyundai",
                modelo: "Ioniq 5",
                anio: 2022,
                color: "Verde Oscuro",
                kilometros: 10000,
                calificacion: 4.4,
                precio: 54545,
                imagenUrl: "../assets/3_Hyundai_Ioniq5.webp"
            },
            {
                id: 4,
                marca: "Audi",
                modelo: "e-tron GT",
                anio: 2020,
                color: "Azul Negro",
                kilometros: 30000,
                calificacion: 3.5,
                precio: 33302,
                imagenUrl: "../assets/4_Audi_etronGT.webp"
            },
            {
                id: 5,
                marca: "Ford",
                modelo: "Mustang Mach-E",
                anio: 2021,
                color: "Azul Claro",
                kilometros: 0,
                calificacion: 2,
                precio: 21359,
                imagenUrl: "../assets/9_Ford_Mustang_MachE.webp"
            }
        ];
    }
}