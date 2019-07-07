import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'profiles', loadChildren: './pages/profiles/profiles.module#ProfilesPageModule' },
  { path: 'paths', loadChildren: './pages/paths/paths.module#PathsPageModule' },
  { path: 'abilities', loadChildren: './pages/abilities/abilities.module#AbilitiesPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
