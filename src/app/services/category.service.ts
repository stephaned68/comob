import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatasetService } from './dataset.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalService } from './global.service';

export class Category {
  code: string;
  libelle: string;
  parent: string;
  sequence: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryURL: string;

  private resultSet = 'rs';

  public selected: Category;

  constructor(
    private http: HttpClient,
    private global: GlobalService,
    private datasetService: DatasetService,
  ) {
    this.categoryURL = this.global.serviceURL + '/categories';
  }

  public getCategoryList(listSelected: boolean = false): Observable<any> {
    let url = this.categoryURL + `/${this.datasetService.selected.dbid}`;
    if (listSelected) {
      url += `/${this.selected.code}`;
    }
    return this.http.get(url).pipe(
      map(results => results[this.resultSet])
    );
  }
}
