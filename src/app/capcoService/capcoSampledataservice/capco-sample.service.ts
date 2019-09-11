import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Icapcosampledata } from '../../modelInterface/Icapcosampledata.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CapcoSampleService {

  capcosampledata: Array<Icapcosampledata> = [];

  constructor(private httpclient: HttpClient) {

   }

getcapcosampledata(): Observable<Array<Icapcosampledata>>
{
  let url =  'http://localhost:5000/capcoapi/sampledata';

  return this.httpclient.get<Array<Icapcosampledata>>(url);
}



submitcapcosampledata(capconew: Icapcosampledata): Observable<Array<Icapcosampledata>>
// tslint:disable-next-line: one-line
{
  // tslint:disable-next-line: prefer-const
  let url =  'http://localhost:5000/capcoapi/submit';

  return this.httpclient.post<Array<Icapcosampledata>>(url, {parm: capconew});
}


}
