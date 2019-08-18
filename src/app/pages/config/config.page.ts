import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { DatasetService } from 'src/app/services/dataset.service';
import { FamilyService, Family } from 'src/app/services/family.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

  private configKey = `comob.config.${this.datasetService.selected.dbid}.families`;

  public families: Observable<any>;

  public familyList: Family[];

  public familyConfig: {};

  constructor(
    private router: Router,
    private storage: Storage,
    private datasetService: DatasetService,
    private familyService: FamilyService
  ) {

    this.storage.get(this.configKey)
      .then((value) => {
        this.familyConfig = value;
      });

  }

  ngOnInit() {
    this.getFamilyList();
  }

  getFamilyList() {
    this.families = this.familyService.getFamilyList();
    this.families
      .subscribe(families => {
        this.familyList = families as Family[];
      });
  }

  ionViewDidEnter() {
    if (!this.familyConfig) {
      this.familyConfig = {};
      for (const family of this.familyList) {
        this.familyConfig[`${family.famille}`] = true;
      }
    }
  }

  profilesPage() {
    this.router.navigateByUrl('/profiles');
  }

  saveConfig() {
    this.storage.set(this.configKey, this.familyConfig).then(() => {
      this.router.navigateByUrl('/home');
    });
  }

}
