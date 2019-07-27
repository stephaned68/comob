import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProfileService } from './profile.service';
import { DatasetService } from './dataset.service';

export class Path {
  voie: string;
  nom: string;
  notes: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class PathService {

  private pathURL = 'http://co-api.alwaysdata.net/voies';

  private resultSet = 'rs';

  public pathList: Array<Path> = [];

  public selected: Path;

  constructor(
    private http: HttpClient,
    private datasetService: DatasetService,
    private profileService: ProfileService
  ) { }

  public getPathList(): Observable<any> {
    const url = this.pathURL + `/${this.datasetService.selected.dbid}/${this.profileService.selected.profil}`;
    return this.http.get(url).pipe(
      map(results => results[this.resultSet])
    );
  }
}
