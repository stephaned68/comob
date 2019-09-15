import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatasetService } from './dataset.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalService } from './global.service';

export class Family {
  famille: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  private familyURL: string;

  private resultSet = 'rs';

  public familyList: Array<Family> = [];

  constructor(
    private http: HttpClient,
    private global: GlobalService,
    private datasetService: DatasetService,
  ) {
    this.familyURL = this.global.serviceURL + '/families';
  }

  public getFamilyList(): Observable<any> {
    const url = this.familyURL + `/${this.datasetService.selected.dbid}`;
    return this.http.get(url).pipe(
      map(results => results[this.resultSet])
    );
  }
}
