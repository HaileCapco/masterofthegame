import {Injectable} from '@angular/core';
import {HttpRequest, HttpResponse, HttpHandler, HttpInterceptor} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import { Capcosampledata } from '../CapcoSampleData/capcosampledata.data';
import { Icapcosampledata } from '../modelInterface/Icapcosampledata.interface';

export class CapcoFakeEndPointInterceptors implements HttpInterceptor {

  constructor() {

  }

intercept(request: HttpRequest<any>, next: HttpHandler) {

  let samplepapco = new Capcosampledata();

  // tslint:disable-next-line: prefer-const
  let capcosampledata: Icapcosampledata[] = samplepapco.getcapcosampledata() || [];


  if (request.url.endsWith('/capcoapi/sampledata') &&  request.method === 'GET') {
  return of(new HttpResponse({status: 200, body: capcosampledata}));
}


  if (request.url.endsWith('/capcoapi/submit') &&  request.method === 'POST') {

    // tslint:disable-next-line: prefer-const
    let newcapco = request.body;
    capcosampledata.push(newcapco);

    return of(new HttpResponse({status: 200, body: capcosampledata }));
}

  return next.handle(request);
}

}
