import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public tituloNav: string = "Angular";
  public opciones: any[] = [
    {path: '/home', name: 'home'},
    {path: '/depositos', name: 'Opciones'},
    {path: '/prestamos', name: 'Prestamos'},
    {path: '/giros', name: 'Giros'},
    {path: '/cta{-corriente', name: 'Cuenta Corriente'},
  ];
}
