import { Routes, RouterModule } from '@angular/router';

import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';


const routes: Routes =  [
    
    {path: '', component: HomeComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'services', component: ServicesComponent}
];

export const routing = RouterModule.forRoot(routes);
