import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FamilyService } from 'src/app/services/family.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

  public families: Observable<any>;

  constructor(
    private router: Router,
    private familyService: FamilyService
  ) { }

  ngOnInit() {
    this.getFamilyList();
  }

  getFamilyList() {
    this.families = this.familyService.getFamilyList();
  }

  profilesPage() {
    this.router.navigateByUrl('/profiles');
  }

}
