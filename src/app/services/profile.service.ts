import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DatasetService } from './dataset.service';

export class Profile {
  profil: string;
  nom: string;
  famille: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profileURL = 'http://co-api.alwaysdata.net/profils';

  private resultSet = 'rs';

  public profileList: Array<Profile> = [];

  public selected: Profile;

  constructor(
    private http: HttpClient,
    private datasetService: DatasetService
  ) { }

  public getProfileList(): Observable<any> {
    const url = this.profileURL + `/${this.datasetService.selected.dbid}`;
    return this.http.get(url).pipe(
      map(results => results[this.resultSet])
    );
  }
}
