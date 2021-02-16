import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DatasetService, AbilityType } from 'src/app/services/dataset.service';
import { PathService } from 'src/app/services/path.service';
import { AbilityService } from 'src/app/services/ability.service';
import { RaceService } from 'src/app/services/race.service';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.page.html',
  styleUrls: ['./abilities.page.scss'],
})
export class AbilitiesPage implements OnInit {

  public title: string;

  public backButton: string;

  public notes: string;

  public abilityType: AbilityType;

  public abilities$: Observable<any>;

  public race$: Observable<any>;

  public traits$: Observable<any>;

  public racials$: Observable<any>;

  public navBack: string;

  constructor(
    private router: Router,
    public datasetService: DatasetService,
    private pathService: PathService,
    private abilityService: AbilityService,
    private raceService: RaceService
  ) {

    this.abilityType = null;
    this.backButton = 'Voies';
    this.navBack = '/paths';
    if (this.router.getCurrentNavigation().extras.state) {
      this.abilityType = this.router.getCurrentNavigation().extras.state.abilityType;
      this.backButton = this.router.getCurrentNavigation().extras.state.backButton || this.backButton;
      this.navBack = this.router.getCurrentNavigation().extras.state.navBack || this.navBack;
    }

   }

  ngOnInit() {
    if (this.pathService.selected != null) {
      this.title = this.pathService.selected.nom;
      this.notes = this.pathService.selected.notes;
    } else if (this.abilityType != null) {
      this.title = this.abilityType.label;
    }
    this.getAbilityList();
    this.getRace();
    this.getRacialTraits();
    this.getRacialAbilities();
  }

  getAbilityList() {
    this.abilities$ = this.abilityService.getAbilityList(this.abilityType);
  }

  getRace() {
    this.race$ = this.raceService.getRace();
  }

  getRacialTraits() {
    if (this.race$ !== null) {
      this.traits$ = this.raceService.getTraitsList();
    }
  }

  getRacialAbilities() {
    if (this.race$ !== null) {
      this.racials$ = this.raceService.getAbilityList();
    }
  }

  backPage() {
    this.router.navigateByUrl(this.navBack);
  }

}
