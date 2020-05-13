import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public serviceURL: string;

  constructor() {

    console.log(environment);
    this.serviceURL = environment.serviceURL;

  }
}
