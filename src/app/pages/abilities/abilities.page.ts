import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PathService } from 'src/app/services/path.service';
import { AbilityService } from 'src/app/services/ability.service';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.page.html',
  styleUrls: ['./abilities.page.scss'],
})
export class AbilitiesPage implements OnInit {

  public title: string;

  public notes: string;

  public abilities: Observable<any>;

  constructor(
    private router: Router,
    private pathService: PathService,
    private abilityService: AbilityService
  ) { }

  ngOnInit() {
    this.title = this.pathService.selected.nom;
    this.notes = this.pathService.selected.notes;
    this.getAbilityList();
  }

  getAbilityList() {
    this.abilities = this.abilityService.getAbilityList();
  }

  pathsPage() {
    this.router.navigateByUrl('/paths');
  }

}
