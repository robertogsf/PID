import { Component } from '@angular/core';
import { AsideMenu } from '@/app/interfaces/aside-menu';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
  imports: [],
})
export class SideMenuComponent {
  menuOptionsList: AsideMenu[] = [
    {
      option: 'Conversaciones',
      svgIcon: '../../../assets/chat.svg',
    },
    {
      option: 'Item de las Ofertas',
      svgIcon: '../../../assets/cloud.svg',
    },
    {
      option: 'Empleados',
      svgIcon: '../../../assets/empl.svg',
    },
    {
      option: 'Control y Seguridad',
      svgIcon: '../../../assets/security.svg',
    },
    {
      option: 'Economía',
      svgIcon: '../../../assets/eco.svg',
    },
    {
      option: 'Comercial',
      svgIcon: '../../../assets/comercial.svg',
    },
    {
      option: 'Mercado',
      svgIcon: '../../../assets/mercado.svg',
    },
    {
      option: 'Operación',
      svgIcon: '../../../assets/operations.svg',
    },
    {
      option: 'Administración',
      svgIcon: '../../../assets/manage_accounts.svg',
    },
    {
      option: 'Otros',
      svgIcon: '../../../assets/group.svg',
    },
    {
      option: 'Jurídico',
      svgIcon: '../../../assets/gavel.svg',
    },
    {
      option: 'Reportes',
      svgIcon: '../../../assets/lab_profile.svg',
    },
    {
      option: 'Aplicaciones',
      svgIcon: '../../../assets/cube.svg',
    },
    {
      option: 'Ajustes',
      svgIcon: '../../../assets/settings.svg',
    },
  ];
}
