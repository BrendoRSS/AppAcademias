import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GerenciaDeCartoesPage } from './gerencia-de-cartoes.page';

describe('GerenciaDeCartoesPage', () => {
  let component: GerenciaDeCartoesPage;
  let fixture: ComponentFixture<GerenciaDeCartoesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciaDeCartoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
