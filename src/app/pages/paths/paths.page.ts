import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { PathService, Path } from 'src/app/services/path.service';

@Component({
  selector: 'app-paths',
  templateUrl: './paths.page.html',
  styleUrls: ['./paths.page.scss'],
})
export class PathsPage implements OnInit {

  public title: string;

  public paths: Observable<any>;

  private pathType: number;

  private pathTypes: string[] = [
    'Profils',
    'Raciales',
    'Prestige'
  ];


  constructor(
    private router: Router,
    private profileService: ProfileService,
    private pathService: PathService
  ) {

    this.pathType = 0;
    if (this.router.getCurrentNavigation().extras.state) {
      this.pathType = this.router.getCurrentNavigation().extras.state.pathType;
    }

  }

  ngOnInit() {
    if (this.profileService.selected !== null) {
      this.title = this.profileService.selected.nom;
    } else {
      this.title = this.pathTypes[this.pathType];
    }
    this.getPathList();
  }

  getPathList() {
    this.paths = this.pathService.getPathList(this.pathType);
  }

  showAbilities(path: Path) {
    this.pathService.selected = path;
    this.router.navigateByUrl('/abilities');
  }

  profilesPage() {
    this.router.navigateByUrl('/profiles');
  }

}
