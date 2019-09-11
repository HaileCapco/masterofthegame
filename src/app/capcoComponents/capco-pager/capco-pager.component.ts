import { Component, OnInit, Input } from '@angular/core';
import { IcapcoPager} from '../../modelInterface/Icapcopager.interface';
import { CapcoPagerService } from '../../capcoService/capcopagingservice/pager-service.service';

@Component({
  selector: 'app-capco-pager',
  templateUrl: './capco-pager.component.html',
  styleUrls: ['./capco-pager.component.scss']
})
export class CapcoPagerComponent implements OnInit {
  @Input() totalcapcosampledata: number;
  capcoPager: IcapcoPager;
  capcoPageSizes = [10, 25, 50, 100, 300];
  selectedPageSize: number;

  constructor(private pagerService: CapcoPagerService) {
pagerService.capcoPager.subscribe(pager => {
  this.capcoPager = pager;
});

  }

  ngOnInit() {
 this.selectedPageSize = this.capcoPageSizes[0];
 this.updatecapcoPage(1);
  }


  setcapcoPage(pagenumber: number) {
    if (pagenumber < 1 || pagenumber > this.capcoPager.totalPagesCount) {
      return;
    }
    this.updatecapcoPage(pagenumber);
 }

 updatecapcoPage(pagenumber: number) {

   this.pagerService.configurePager(this.totalcapcosampledata, pagenumber, this.selectedPageSize);
 }

setPagesize(pagesize: number) {
  this.selectedPageSize = pagesize;
  this.updatecapcoPage(1);
}
}
