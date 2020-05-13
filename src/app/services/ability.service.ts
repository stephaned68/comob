import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PathService } from './path.service';
import { DatasetService, AbilityType } from './dataset.service';
import { GlobalService } from './global.service';

export class Ability {
  rang: string;
  capacite: string;
  nom: string;
  limitee: number;
  sort: number;
  type: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class AbilityService {

  private abilityURL: string;

  private resultSet = 'rs';

  public pathList: Array<Ability> = [];

  public selected: Ability;

  constructor(
    private http: HttpClient,
    private global: GlobalService,
    private datasetService: DatasetService,
    private pathService: PathService
  ) {
    this.abilityURL = this.global.serviceURL + '/abilities';
  }

  public getAbilityURL(): string {
    return this.abilityURL;
  }

  public getAbilityList(abilityType: AbilityType): Observable<any> {
    let url: string;
    if (abilityType == null) {
      url = this.abilityURL + `/${this.datasetService.selected.dbid}/${this.pathService.selected.voie}`;
    } else {
      url = this.abilityURL + `/${this.datasetService.selected.dbid}?type=${abilityType.type}`;
    }
    return this.http.get(url).pipe(
      map(results => results[this.resultSet])
    );
  }

}
