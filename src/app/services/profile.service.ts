import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DatasetService } from './dataset.service';

export class Profile {
  profil: string;
  nom: string;
  famille: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profileURL = 'http://co-api.alwaysdata.net/profiles';

  private resultSet = 'rs';

  public profileList: Array<Profile> = [];

  public selected: Profile;

  constructor(
    private http: HttpClient,
    private datasetService: DatasetService
  ) { }

  public getProfileList(familyConfig = {}, hybrid = false): Observable<any> {
    let filterIn = '';
    for (const family in familyConfig) {
      if (familyConfig[family]) {
        filterIn += ((filterIn === '') ? 'family=' : ',') + encodeURI(family.trim());
      }
    }

    const type = 'type=' + ((hybrid) ? '1' : '0');

    const args = [
      filterIn,
      type
    ].join('&');

    const url = this.profileURL + `/${this.datasetService.selected.dbid}` + '?' + args;
    console.log(url);
    return this.http.get(url).pipe(
      map(results => results[this.resultSet])
    );
  }
}
