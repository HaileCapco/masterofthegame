import { Injectable } from '@angular/core';
import { IcapcoPager} from '../../modelInterface/Icapcopager.interface';
import { Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CapcoPagerService {

  capcoPager = new Subject<IcapcoPager>();

  constructor() { }

 configurePager(totalsampledata: number, activepage: number = 1, selectedPageSize: number = 5)  {

  // tslint:disable-next-line: prefer-const
  let totalPages = Math.ceil(totalsampledata / selectedPageSize);

  // tslint:disable-next-line: prefer-const
  let startcapcoIndex = (activepage - 1) * selectedPageSize;

  // tslint:disable-next-line: prefer-const
  let endcapcoIndex = Math.min(startcapcoIndex + selectedPageSize - 1, totalsampledata);

  let currentcapcoPager: IcapcoPager =
   // tslint:disable-next-line: one-line
   {
    // tslint:disable-next-line: object-literal-shorthand
    totalsampledata: totalsampledata,
    // tslint:disable-next-line: object-literal-shorthand
    activepage: activepage,
    selectedPagesize: selectedPageSize,
    totalPagesCount: totalPages,
    activepageIndex: startcapcoIndex,
    currentendIndex: endcapcoIndex
  };

  this.capcoPager.next(currentcapcoPager);

 }
}
