import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DatasetService } from 'src/app/services/dataset.service';
import { CategoryService, Category } from 'src/app/services/category.service';
import { EquipmentService } from 'src/app/services/equipment.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  public title: string;

  public subCategories: Observable<any>;

  constructor(
    private router: Router,
    public datasetService: DatasetService,
    public categoryService: CategoryService,
    public equipmentService: EquipmentService
  ) { }

  ngOnInit() {
    this.title = this.categoryService.selected.libelle;
    this.getSubCategoryList();
  }

  getSubCategoryList() {
    this.subCategories = this.categoryService.getCategoryList(true);
  }

  showEquipmentList(subCategory: Category) {
    this.equipmentService.subCategory = subCategory;
    this.router.navigateByUrl('/equipment');
  }

  profilesPage() {
    this.categoryService.selected = null;
    this.router.navigateByUrl('/profiles');
  }

}
