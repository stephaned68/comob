import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { DatasetService } from 'src/app/services/dataset.service';
import { ProfileService, Profile } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
})
export class ProfilesPage implements OnInit {

  private configKey = `config.${this.datasetService.selected.dbid}`;

  public title: string;

  public profiles: Observable<any>;

  public familyConfig: {};

  constructor(
    private router: Router,
    private storage: Storage,
    private datasetService: DatasetService,
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.title = this.datasetService.selected.name;
    this.storage.get(this.configKey)
      .then((value) => {
        this.familyConfig = value;
        this.getProfileList();
      });
  }

  getProfileList() {
    this.profiles = this.profileService.getProfileList(this.familyConfig);
  }

  showProfilePaths(profile: Profile) {
    this.profileService.selected = profile;
    this.router.navigateByUrl('/paths');
  }

  showOtherPaths(type: number) {
    this.profileService.selected = null;
    const navExtras: NavigationExtras = {
      state: {
        pathType: type
      }
    };
    this.router.navigateByUrl('/paths', navExtras);
  }

  showConfig() {
    this.router.navigateByUrl('/config');
  }

  homePage() {
    this.router.navigateByUrl('/home');
  }

}
