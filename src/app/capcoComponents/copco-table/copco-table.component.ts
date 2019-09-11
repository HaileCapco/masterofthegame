import { Component, OnInit } from '@angular/core';
import { CapcoSampleService } from '../../capcoService/capcoSampledataservice/capco-sample.service';
import { CapcoPagerService } from '../../capcoService/capcopagingservice/pager-service.service';
import { Icapcosampledata } from '../../modelInterface/Icapcosampledata.interface';
import { IcapcoPager} from '../../modelInterface/Icapcopager.interface';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-copco-table',
  templateUrl: './copco-table.component.html',
  styleUrls: ['./copco-table.component.scss']
})
export class CopcoTableComponent implements OnInit {
  capcoAllsampledata: Array<Icapcosampledata>;
  totalcapcosampledata: number;
  capcoPager: IcapcoPager;

  selectedSampledata: Array<Icapcosampledata>;

  columns: Array<string> = ['name', 'phone', 'email',
    'company', 'date_entry', 'org_num', 'address_1',
    'city', 'zip', 'geo', 'pan', 'pin', 'id', 'status', 'fee', 'guid',
    'date_exit', 'date_first' , 'date_recent',  'url'];

  constructor(private sampleservice: CapcoSampleService, private pagerService: CapcoPagerService) {
    pagerService.capcoPager.subscribe(pager => {
      this.capcoPager = pager;
      this.selectedSampledata = this.capcoAllsampledata.slice(this.capcoPager.activepageIndex, this.capcoPager.currentendIndex + 1);
    });
  }

  ngOnInit() {
    this.loadcapcoAllsampledata();
  }

  loadcapcoAllsampledata() {
       this.sampleservice.getcapcosampledata().pipe(map((capcodata) => capcodata)).subscribe((sampledata) => {
       this.capcoAllsampledata = sampledata;
       this.totalcapcosampledata = this.capcoAllsampledata.length;
     });
  }

  submit(selectedItem: Icapcosampledata) {
    this.sampleservice.submitcapcosampledata(selectedItem);
    console.log(selectedItem.id + '  ' + selectedItem.status);
  }

}
