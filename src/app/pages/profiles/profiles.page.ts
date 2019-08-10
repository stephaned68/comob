import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  showPaths(profile: Profile) {
    this.profileService.selected = profile;
    this.router.navigateByUrl('/paths');
  }

  homePage() {
    this.router.navigateByUrl('/home');
  }

  showConfig() {
    this.router.navigateByUrl('/config');
  }
}
