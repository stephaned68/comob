import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalService } from './global.service';

export class Dataset {
  dbid: string;
  name: string;
  showAbilities: Array<AbilityType>;
  currency: string;
  colors: Colors;
}

export class Colors {
  title: string;
  text: string;
}

export class AbilityType {
  type: string;
  label: string;
}

@Injectable({
  providedIn: 'root'
})
export class DatasetService {

  private datasetURL: string;

  private resultSet = 'rs';

  constructor(
    private http: HttpClient,
    private global: GlobalService
  ) {
    this.datasetURL = this.global.serviceURL + '/datasets';
  }

  public datasetList: Array<Dataset> = [];

  public selected: Dataset;

  public getDatasetList(): Observable<any> {
    return this.http.get(this.datasetURL).pipe(
      map(results => results[this.resultSet])
    );
  }

  public getTitleColor(): string {
    return this.selected && this.selected.colors && this.selected.colors.title || '#fff';
  }

  public getTextColor(): string {
    return this.selected && this.selected.colors && this.selected.colors.text || '#000';
  }
}
