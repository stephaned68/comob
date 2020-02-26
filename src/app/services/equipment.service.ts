import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatasetService } from './dataset.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalService } from './global.service';
import { Category } from './category.service';

export class Equipment {
  code: string;
  designation: string;
  categorie: string;
  prix: number;
  notes: string;
  props: string;
}

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  private equipmentURL: string;

  private resultSet = 'rs';

  public subCategory: Category;

  constructor(
    private http: HttpClient,
    private global: GlobalService,
    private datasetService: DatasetService,
  ) {
    this.equipmentURL = this.global.serviceURL + '/equipments';
  }

  public getEquipmentList(): Observable<any> {
    const url = this.equipmentURL + `/${this.datasetService.selected.dbid}/${this.subCategory.code}`;
    return this.http.get(url).pipe(
      map(results => results[this.resultSet])
    );
  }
}
