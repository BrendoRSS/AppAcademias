import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvaliacoesFisicaPage } from './avaliacoes-fisica.page';

describe('AvaliacoesFisicaPage', () => {
  let component: AvaliacoesFisicaPage;
  let fixture: ComponentFixture<AvaliacoesFisicaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliacoesFisicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
