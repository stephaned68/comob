import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { PathService, Path, PathType } from 'src/app/services/path.service';
import { EquipmentBaseService } from 'src/app/services/equipmentbase.service';

@Component({
  selector: 'app-paths',
  templateUrl: './paths.page.html',
  styleUrls: ['./paths.page.scss'],
})
export class PathsPage implements OnInit {

  public title: string;

  public paths: Observable<any>;

  private pathType: PathType;

  public equipments: Observable<any>;

  constructor(
    private router: Router,
    public profileService: ProfileService,
    private pathService: PathService,
    public EquipmentBaseService: EquipmentBaseService
  ) {

    this.pathType = null;
    if (this.router.getCurrentNavigation().extras.state) {
      this.pathType = this.router.getCurrentNavigation().extras.state.pathType;
    }

  }

  ngOnInit() {
    if (this.profileService.selected !== null) {
      this.title = this.profileService.selected.nom;
      this.getEquipmentList();
    } else {
      this.title = this.pathType.type_voie_intitule;
    }
    this.getPathList();
  }

  getPathList() {
    let type = '';
    if (this.pathType) {
      type = this.pathType.type_voie;
    }
    this.paths = this.pathService.getPathList(type);
  }

  getEquipmentList() {
    this.EquipmentBaseService.profile = this.profileService.selected.profil;
    this.equipments = this.EquipmentBaseService.getEquipmentList();
  }

  showAbilities(path: Path) {
    this.pathService.selected = path;
    this.router.navigateByUrl('/abilities');
  }

  profilesPage() {
    this.router.navigateByUrl('/profiles');
  }

}
