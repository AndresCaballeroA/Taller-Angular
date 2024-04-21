import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { ListarSeriesComponent } from './series/listar-series/listar-series.component';
import { AppComponent } from './app.component';
import { SeriesModule } from './series/series.module';

const routes: Routes = [
    { path: '', component: ListarSeriesComponent }
];

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        SeriesModule
    ],
    bootstrap: [AppComponent] // Agrega AppComponent aquí
})
export class AppModule { }
