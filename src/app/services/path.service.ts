import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DatasetService } from './dataset.service';
import { ProfileService } from './profile.service';

export class Path {
  voie: string;
  nom: string;
  notes: string;
  type: string;
}

export class PathType {
  type_voie: string;
  type_voie_intitule: string;
}

@Injectable({
  providedIn: 'root'
})
export class PathService {

  private pathURL = 'http://co-api.alwaysdata.net/paths';

  private pathTypesURL = 'http://co-api.alwaysdata.net/types/paths';

  private resultSet = 'rs';

  public pathTypes: Array<PathType> = [];

  public pathList: Array<Path> = [];

  public selected: Path;

  constructor(
    private http: HttpClient,
    private datasetService: DatasetService,
    private profileService: ProfileService
  ) { }

  public getPathList(pathType: string): Observable<any> {
    let path = '';
    if (this.profileService.selected !== null) {
      path = `/${this.profileService.selected.profil}`;
    } else {
      path = `/?type=${pathType}`;
    }
    const url = this.pathURL + `/${this.datasetService.selected.dbid}${path}`;
    console.log(url);
    return this.http.get(url).pipe(
      map(results => results[this.resultSet])
    );
  }

  public getPathTypes(): Observable<any> {
    const url = this.pathTypesURL + `/${this.datasetService.selected.dbid}`;
    console.log(url);
    return this.http.get(url).pipe(
      map(results => results[this.resultSet])
    );
  }
}
