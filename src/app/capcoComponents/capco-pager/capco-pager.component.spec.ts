import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {FormsModule} from '@angular/forms';

import { CapcoPagerComponent } from './capco-pager.component';

import { CapcoPagerService } from '../../capcoService/capcopagingservice/pager-service.service';

describe('CapcoPagerComponent', () => {
  let component: CapcoPagerComponent;
  let fixture: ComponentFixture<CapcoPagerComponent>;
  let service: CapcoPagerService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ CapcoPagerComponent ],
      providers: [CapcoPagerComponent, CapcoPagerService]
    })
    .compileComponents();

    component = TestBed.get(CapcoPagerComponent);
    service = TestBed.get(CapcoPagerService);

  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(CapcoPagerComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
