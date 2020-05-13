import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public serviceURL: string;

  constructor() {

    this.serviceURL = environment.serviceURL;

  }
}
