import { Component, OnInit } from '@angular/core';
import { DatasetService } from 'src/app/services/dataset.service';
import { Observable } from 'rxjs';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
})
export class ProfilesPage implements OnInit {

  public title: string;

  public profiles: Observable<any>;

  constructor(
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
}
