import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DatasetService } from './dataset.service';
import { GlobalService } from './global.service';

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

  private profileURL: string;

  private resultSet = 'rs';

  public profileList: Array<Profile> = [];

  public selected: Profile;

  constructor(
    private http: HttpClient,
    private global: GlobalService,
    private datasetService: DatasetService
  ) {
    this.profileURL = this.global.serviceURL + '/profiles';
  }

  public getProfileList(familyConfig = {}, hybrid = false): Observable<any> {
    const args = [];

    let filterIn = '';
    for (const family in familyConfig) {
      if (familyConfig[family]) {
        filterIn += ((filterIn === '') ? 'family=' : ',') + encodeURI(family.trim());
      }
    }
    if (filterIn !== '') {
      args.push(filterIn);
    }

    args.push('type=' + ((hybrid) ? '1' : '0'));

    const url = this.profileURL + `/${this.datasetService.selected.dbid}` + '?' + args.join('&');
    console.log(url);
    return this.http.get(url).pipe(
      map(results => results[this.resultSet])
    );
  }
}
