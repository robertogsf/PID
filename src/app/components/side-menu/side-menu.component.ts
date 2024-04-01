import { Component } from '@angular/core';
import { AsideMenu } from '@/app/interfaces/aside-menu';

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
      svgIcon: '@/assets/apps.svg',
    },
    {
      option: 'Item de las Ofertas',
      svgIcon: '@/assets/apps.svg',
    },
    {
      option: 'Empleados',
      svgIcon: '@/assets/apps.svg',
    },
    {
      option: 'Control y Seguridad',
      svgIcon: '@/assets/apps.svg',
    },
    {
      option: 'Economía',
      svgIcon: '@/assets/apps.svg',
    },
    {
      option: 'Comercial',
      svgIcon: '@/assets/apps.svg',
    },
    {
      option: 'Mercado',
      svgIcon: '@/assets/apps.svg',
    },
    {
      option: 'Operación',
      svgIcon: '@/assets/apps.svg',
    },
    {
      option: 'Administración',
      svgIcon: '@/assets/apps.svg',
    },
    {
      option: 'Otros',
      svgIcon: '@/assets/apps.svg',
    },
    {
      option: 'Jurídico',
      svgIcon: '@/assets/apps.svg',
    },
    {
      option: 'Reportes',
      svgIcon: '@/assets/apps.svg',
    },
    {
      option: 'Aplicaciones',
      svgIcon: '@/assets/apps.svg',
    },
    {
      option: 'Ajustes',
      svgIcon: '@/assets/apps.svg',
    },
  ];
}
