import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public serviceURL: string;

  constructor() {

    this.serviceURL = 'http://co-api.alwaysdata.net';
    // this.serviceURL = 'http://localhost:8800';

  }
}
