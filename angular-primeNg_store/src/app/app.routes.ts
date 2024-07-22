import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "user",
        component: UserComponent
    },
    {
        path: "**",
        component: NotFoundComponent
    }
];
