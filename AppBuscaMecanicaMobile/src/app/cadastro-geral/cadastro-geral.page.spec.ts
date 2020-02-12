import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroGeralPage } from './cadastro-geral.page';

describe('CadastroGeralPage', () => {
  let component: CadastroGeralPage;
  let fixture: ComponentFixture<CadastroGeralPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroGeralPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroGeralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
