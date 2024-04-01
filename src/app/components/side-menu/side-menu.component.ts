import { Component } from '@angular/core';
import { AsideMenu } from '../../interfaces/aside-menu';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {
  menuOptionsList: AsideMenu[] = [
    {
      option: 'Conversaciones',
      svgIcon: '',
    },
    {
      option: 'Item de las Ofertas',
      svgIcon: '',
    },
    {
      option: 'Empleados',
      svgIcon: '',
    },
    {
      option: 'Control y Seguridad',
      svgIcon: '',
    },
    {
      option: 'Economía',
      svgIcon: '',
    },
    {
      option: 'Comercial',
      svgIcon: '',
    },
    {
      option: 'Mercado',
      svgIcon: '',
    },
    {
      option: 'Operación',
      svgIcon: '',
    },
    {
      option: 'Administración',
      svgIcon: '',
    },
    {
      option: 'Otros',
      svgIcon: '',
    },
    {
      option: 'Jurídico',
      svgIcon: '',
    },
    {
      option: 'Reportes',
      svgIcon: '',
    },
    {
      option: 'Aplicaciones',
      svgIcon: '',
    },
    {
      option: 'Ajustes',
      svgIcon: '',
    },
  ];
}
