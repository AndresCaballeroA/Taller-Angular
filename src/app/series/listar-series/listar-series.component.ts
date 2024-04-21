import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie.model';
import { SeriesHttpService } from '../series-http.service';


@Component({
  selector: 'app-listar-series',
  templateUrl: './listar-series.component.html',
  styleUrls: ['./listar-series.component.css']
})
export class ListarSeriesComponent implements OnInit {

  series: Serie[] = [];

  /**
     * Constructor for the component
     * @param seriesService The author's services provider
     */
  constructor(private seriesService: SeriesHttpService) { }

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe(series => {
      this.series = series;
    });
  }

  calcularPromedioTemporadas(): number {
    const totalSeasons = this.series.reduce((total, serie) => total + serie.seasons, 0);
    return totalSeasons / this.series.length;
  }

}
