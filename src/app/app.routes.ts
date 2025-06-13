import { Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ProfileComponent } from './profile/profile.component';

export const  routes: Routes = [
    { path: 'chat', component: ChatComponent },
    { path: 'profile', component: ProfileComponent }
]