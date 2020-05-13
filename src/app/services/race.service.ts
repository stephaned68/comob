import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalService } from '../services/global.service';
import { DatasetService } from '../services/dataset.service';
import { PathService } from '../services/path.service';
import { AbilityService } from '../services/ability.service';

export class Race {
  race: string;
  intitule: string;
  modFor: number;
  modDex: number;
  modCon: number;
  modInt: number;
  modSag: number;
  modCha: number;
  ageBase: number;
  esperanceVie: number;
  tailleMin: number;
  tailleMax: number;
  poidsMin: number;
  poidsMax: number;
  typeRace: string;
}

export class Trait {
  intitule: string;
  description: string;
}

export class Ability {
  capacite: string;
  description: string;
  limitation: number;
}

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  private raceURL: string;

  private resultSet = 'rs';

  constructor(
    private http: HttpClient,
    private global: GlobalService,
    private datasetService: DatasetService,
    private pathService: PathService,
    private abilityService: AbilityService
  ) {
    this.raceURL = this.global.serviceURL + '/races';
  }

  public getRace(): Observable<any> {
    const url = this.raceURL + `/${this.datasetService.selected.dbid}/${this.pathService.selected.voie}`;

    return this.http.get(url).pipe(
      map(results => results[this.resultSet])
    );
  }

  public getTraitsList(): Observable<any> {
    const url = this.global.serviceURL + '/traits'
    + `/${this.datasetService.selected.dbid}/?race=${this.pathService.selected.voie}`;

    return this.http.get(url).pipe(
      map(results => results[this.resultSet])
    );
  }

  public getAbilityList(): Observable<any> {
    const url = this.abilityService.getAbilityURL()
    + `/${this.datasetService.selected.dbid}/?race=${this.pathService.selected.voie}`;

    return this.http.get(url).pipe(
      map(results => results[this.resultSet])
    );
  }

}
