  import { Routes } from '@angular/router';
  import { LoginComponent } from './Auth/login/login.component';
  import { RegisterComponent } from './Auth/register/register.component';
  import { DashboardComponent } from './dashboard/dashboard.component';
  import { HomeComponent } from './dashboardPages/home/home.component';
import { ModoFamiliarComponent } from './dashboardPages/modo-familiar/modo-familiar.component';
import { AsistenteVirtualComponent } from './dashboardPages/asistente-virtual/asistente-virtual.component';
import { NoticiasComponent } from './dashboardPages/noticias/noticias.component';
import { ConfiguracionComponent } from './dashboardPages/configuracion/configuracion.component';
import { SoporteComponent } from './dashboardPages/soporte/soporte.component';

  export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
  {
      path: 'dashboard',
      component: DashboardComponent,
      children: [
        { path: 'home', component: HomeComponent },
        { path: 'modofamiliar', component: ModoFamiliarComponent },
        { path: 'asistente', component: AsistenteVirtualComponent },
        { path: 'noticias', component: NoticiasComponent },
        { path: 'configuracion', component: ConfiguracionComponent },
        { path: 'soporte', component: SoporteComponent },
        { path: '', redirectTo: 'home', pathMatch: 'full' },
      ],
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
  ];
