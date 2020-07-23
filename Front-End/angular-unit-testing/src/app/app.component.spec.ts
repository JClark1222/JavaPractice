import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angular Unit Testing'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular Unit Testing');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Angular Unit Testing!');
  }));
});

describe('ContactFormComponent', () => {
  let comp: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  beforeEach(async () => {
    TestBed.configureTestingModule({
    declarations: [
      ContactFormComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule
    ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(ContactFormComponent);

      comp = fixture.componentInstance;

      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });
  });

  it('should have a text as \'contact page\'', async(() => {
    expect(comp.text).toEqual('contact page');
  }));

  it('should be set submitted to true', async(() => {
    comp.onSubmit();
    expect(comp.onSubmit).toBeTruthy();
  }));

  it('should call onSubmit method', async(() => {
    fixture.detectChanges();
    spyOn(comp, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(comp.onSubmit).toHaveBeenCalledTimes(0);
  }));

  it(`form should be invalid`, async(() => {
    comp.contactForm.controls.email.setValue('');
    comp.contactForm.controls.name.setValue('');
    comp.contactForm.controls.text.setValue('');
    expect(comp.contactForm.value).toBeFalsy();
  }));

  it(`form should be valid`, async(() => {
    comp.contactForm.controls.email.setValue('qwerty@g.com');
    comp.contactForm.controls.name.setValue('ytrewq');
    comp.contactForm.controls.text.setValue('Hey there');
    expect(comp.contactForm.value).toBeTruthy();
  }));
});
