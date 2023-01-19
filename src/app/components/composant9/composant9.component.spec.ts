import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Composant9Component } from './composant9.component';

describe('Composant9Component', () => {
  let component: Composant9Component;
  let fixture: ComponentFixture<Composant9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Composant9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Composant9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
