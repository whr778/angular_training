import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieComponent } from './components/movie/movie.component';

const moviesRoutes: Routes = [
    { path: 'movies', component: MoviesListComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(moviesRoutes)    
    ],
    exports: [
        RouterModule    
    ]
})

export class MoviesRoutingModule { }