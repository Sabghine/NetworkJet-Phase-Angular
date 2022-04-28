import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendInvitationComponent } from './send-invitation.component';

describe('SendInvitationComponent', () => {
  let component: SendInvitationComponent;
  let fixture: ComponentFixture<SendInvitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendInvitationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
