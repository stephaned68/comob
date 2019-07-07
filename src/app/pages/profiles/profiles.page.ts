import { Component, OnInit } from '@angular/core';
import { DatasetService } from 'src/app/services/dataset.service';
import { Observable } from 'rxjs';
import { ProfileService, Profile } from 'src/app/services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
})
export class ProfilesPage implements OnInit {

  public title: string;

  public profiles: Observable<any>;

  constructor(
    private router: Router,
    private datasetService: DatasetService,
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.title = this.datasetService.selected.name;
    this.getProfileList();
  }

  getProfileList() {
    this.profiles = this.profileService.getProfileList();
  }

  showPaths(profile: Profile) {
    this.profileService.selected = profile;
    this.router.navigateByUrl('/paths');
  }

  homePage() {
    this.router.navigateByUrl('/home');
  }
}
