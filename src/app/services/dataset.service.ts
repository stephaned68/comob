import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

export class Dataset {
  dbid: string;
  name: string;
  font: string;
  colors: any;
}

@Injectable({
  providedIn: 'root'
})
export class DatasetService {

  private datasetURL = 'http://co-api.alwaysdata.net/datasets';

  private resultSet = 'rs';

  constructor(private http: HttpClient) { }

  public datasetList: Array<Dataset> = [];

  public selected: Dataset;

  public getDatasetList(): Observable<any> {
    return this.http.get(this.datasetURL).pipe(
      map(results => results[this.resultSet])
    );
  }
}
