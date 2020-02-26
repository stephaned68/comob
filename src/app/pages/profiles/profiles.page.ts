import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { DatasetService, AbilityType } from 'src/app/services/dataset.service';
import { ProfileService, Profile } from 'src/app/services/profile.service';
import { PathService, PathType } from 'src/app/services/path.service';
import { CategoryService, Category } from 'src/app/services/category.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
})
export class ProfilesPage implements OnInit {

  private configKey = `comob.config.${this.datasetService.selected.dbid}.families`;

  public title: string;

  public profiles: Observable<any>;

  public hybrids: Observable<any>;
  public hybridList: Observable<any>;

  public pathTypes: Observable<any>;
  public pathTypeList: Observable<any>;

  public categories: Observable<any>;

  public familyConfig: {};

  constructor(
    private router: Router,
    private storage: Storage,
    public datasetService: DatasetService,
    public profileService: ProfileService,
    public pathService: PathService,
    public categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.title = this.datasetService.selected.name;
    this.storage.get(this.configKey)
      .then((value) => {
        this.familyConfig = value;
        this.getProfileList();
        this.getHybridList();
      });
    this.getPathTypes();
    this.getCategoryList();
  }

  getProfileList() {
    this.profiles = this.profileService.getProfileList(this.familyConfig);
  }

  getHybridList() {
    this.hybrids = this.profileService.getProfileList(this.familyConfig, true);
  }

  getPathTypes() {
    this.pathTypes = this.pathService.getPathTypes();
  }

  getCategoryList() {
    this.categories = this.categoryService.getCategoryList();
  }

  showProfilePaths(profile: Profile) {
    this.profileService.selected = profile;
    this.router.navigateByUrl('/paths');
  }

  showOtherPaths(type: PathType) {
    this.profileService.selected = null;
    const navExtras: NavigationExtras = {
      state: {
        pathType: type
      }
    };
    this.router.navigateByUrl('/paths', navExtras);
  }

  showOtherAbilities(type: AbilityType) {
    this.profileService.selected = null;
    this.pathService.selected = null;
    const navExtras: NavigationExtras = {
      state: {
        abilityType: type,
        backButton: 'Profils',
        navBack: '/profiles'
      }
    };
    this.router.navigateByUrl('/abilities', navExtras);
  }

  showSubCategories(parent: Category) {
    this.categoryService.selected = parent;
    this.router.navigateByUrl('/categories');
  }

  showConfig() {
    this.router.navigateByUrl('/config');
  }

  homePage() {
    this.router.navigateByUrl('/home');
  }

}
