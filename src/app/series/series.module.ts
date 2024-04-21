import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarSeriesComponent } from './listar-series/listar-series.component';

import { SeriesHttpService } from './series-http.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [       
        CommonModule,
        FormsModule
    ],
    declarations: [ListarSeriesComponent],
    providers: [SeriesHttpService],
    exports:[ListarSeriesComponent]
})
export class SeriesModule {}
