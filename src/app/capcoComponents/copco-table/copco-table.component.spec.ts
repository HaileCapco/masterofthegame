import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopcoTableComponent } from './copco-table.component';

import { CapcoPagerComponent } from '../capco-pager/capco-pager.component';

import { FormsModule} from '@angular/forms';

import { CapcoFakeEndPointInterceptors} from '../../Interceptors/CapcoFakeEndPoint.intcerptor';


import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {CapcoPagerService} from '../../capcoService/capcopagingservice/pager-service.service';

import {CapcoSampleService} from '../../capcoService/capcoSampledataservice/capco-sample.service';

describe('CopcoTableComponent', () => {
  let component: CopcoTableComponent;
  let fixture: ComponentFixture<CopcoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopcoTableComponent, CapcoPagerComponent ],
      imports: [HttpClientModule, FormsModule],
      providers: [CapcoPagerService,
        CapcoSampleService ,
        {
          provide: HTTP_INTERCEPTORS,
           useClass: CapcoFakeEndPointInterceptors,
           multi: true
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopcoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get total number of sample data', () => {
    // tslint:disable-next-line: no-unused-expression
    component.loadcapcoAllsampledata();
    expect(component.capcoAllsampledata.length).toBe(200);
  });

  it('should get total number of active sample data on the table', () => {
    // tslint:disable-next-line: no-unused-expression
    component.loadcapcoAllsampledata();
    expect(component.selectedSampledata.length).toBeLessThanOrEqual(component.capcoPager.selectedPagesize);
  });

});
