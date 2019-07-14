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

  constructor(
    private router: Router,
    private profileService: ProfileService,
    private pathService: PathService
  ) { }

  ngOnInit() {
    this.title = this.profileService.selected.nom;
    this.getPathList();
  }

  getPathList() {
    this.paths = this.pathService.getPathList();
  }

  showAbilities(path: Path) {
    this.pathService.selected = path;
    this.router.navigateByUrl('/abilities');
  }

  profilesPage() {
    this.router.navigateByUrl('/profiles');
  }

}
