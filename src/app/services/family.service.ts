import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatasetService } from './dataset.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class Family {
  famille: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  private familyURL = 'http://co-api.alwaysdata.net/families';

  private resultSet = 'rs';

  public familyList: Array<Family> = [];

  constructor(
    private http: HttpClient,
    private datasetService: DatasetService,
  ) { }

  public getFamilyList(): Observable<any> {
    const url = this.familyURL + `/${this.datasetService.selected.dbid}`;
    return this.http.get(url).pipe(
      map(results => results[this.resultSet])
    );
  }
}
