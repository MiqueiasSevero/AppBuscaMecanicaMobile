import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescricaoServicoPage } from './descricao-servico.page';

describe('DescricaoServicoPage', () => {
  let component: DescricaoServicoPage;
  let fixture: ComponentFixture<DescricaoServicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescricaoServicoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescricaoServicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
