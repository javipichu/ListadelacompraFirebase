import { Component, OnInit } from '@angular/core';
import {ServicioDeAutentService} from '../servicio-de-autent.service'

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos: any[];

  constructor(public authComponent: ServicioDeAutentService) {
    const pruducto1 = {
      nombre: 'Fairy Eroski',
      descripcion: 'Jabon para lavar los platos.',
      comprado: false,
    };
    const pruducto2 = {
      nombre: 'Patatas fritas ',
      descripcion: 'Patatillas envasadas en recipiente, media bolsa vacia',
      comprado: false,
    };
    const pruducto3 = {
      nombre: 'Detergente',
      descripcion: 'Jabon que se usa para lavar la ropa',
      comprado: false,
    };
    const pruducto4 = {
      nombre: 'Chocolate Eroski',
      descripcion: 'Chocolate con leche 90% chocolate ',
      comprado: false,
    };
    const pruducto5 = {
      nombre: 'Agua Eroski ',
      descripcion: 'Agua',
      comprado: false,
    };
    const pruducto6 = {
      nombre: 'Donuts Eroski ',
      descripcion: 'Estan muy buenos los condenados ',
      comprado: false,
    };
    const pruducto7 = {
      nombre: 'Lacasitos ',
      descripcion: 'Estan buenos ',
      comprado: false,
    };
    const pruducto8 = {
      nombre: 'Galletas',
      descripcion: 'Bolletia realizado en el horno en el momento ',
      comprado: false,
    };
    const pruducto9 = {
      nombre: 'Solomillo',
      descripcion: 'Pieza de carne que sirbe para comer  ',
      comprado: false,
    };
    const pruducto10 = {
      nombre: 'Chorizo',
      descripcion: 'Alimento realizado a base de sobras de las demas piezas de carne.',
      comprado: false,
    };
    this.productos = [];
    this.productos.push(pruducto1);
    this.productos.push(pruducto2);
    this.productos.push(pruducto3);
    this.productos.push(pruducto4);
    this.productos.push(pruducto5);
    this.productos.push(pruducto6);
    this.productos.push(pruducto7);
    this.productos.push(pruducto8);
    this.productos.push(pruducto9);
    this.productos.push(pruducto10);
  }
  ngOnInit() {
  }

  onClickMe(i) {
    this.productos[i].comprado = true;
  }
  onClickMe2(i) {
    this.productos[i].comprado = false;
  }
}
