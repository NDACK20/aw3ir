export interface MeteoItem {
    id: number;
    name: string;
    weather: any
    // debut du fichier
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// <--  Ajouter les références ici

import { AppComponent } from './app.component';
import { MeteoComponent } from './meteo/meteo.component';

@NgModule({
 declarations: [
   AppComponent,
   MeteoComponent
 ],
 imports: [
   BrowserModule,
   FormsModule, ReactiveFormsModule //<-- Ajouter les références ici aussi
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }
}
