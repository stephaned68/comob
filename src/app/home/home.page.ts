import { Component, OnInit } from '@angular/core';
import { DatasetService, Dataset } from 'src/app/services/dataset.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public datasets: Observable<any>;

  constructor(
    public datasetService: DatasetService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getDatasetList();
  }

  getDatasetList() {
    this.datasets = this.datasetService.getDatasetList();
  }

  showProfiles(dataset: Dataset) {
    this.datasetService.selected = dataset;
    this.router.navigateByUrl('/profiles');
  }

}
