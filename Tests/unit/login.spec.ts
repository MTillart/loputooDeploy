import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule, 
  MatFormFieldModule, MatRadioModule, MatSelectModule, MatSliderModule, 
  MatSlideToggleModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSortModule, MatTableModule, MatIconModule, MatNativeDateModule, MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
  import {MatDialogModule} from '@angular/material/dialog';
  import { HttpClientModule } from '@angular/common/http';


import { SearchComponent } from 'src/app/search/search.component';
import { AppComponent } from 'src/app/app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimerComponent } from 'src/app/timer/timer.component';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { IsikudComponent } from 'src/app/isikud/isikud.component';
import { DokumendidComponent } from 'src/app/dokumendid/dokumendid.component';
import { ToimikudComponent } from 'src/app/toimikud/toimikud.component';
import { AjaarvestusComponent } from 'src/app/ajaarvestus/ajaarvestus.component';
import { LoginComponent } from 'src/app/login/login.component';
import { RegisterComponent } from 'src/app/register/register.component';
import { IsikuPopUpComponent } from 'src/app/isiku-pop-up/isiku-pop-up.component';
import { LisaIsikPopUpComponent } from 'src/app/lisa-isik-pop-up/lisa-isik-pop-up.component';
import { APP_BASE_HREF } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'src/app/_services/interceptor.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent, AppComponent, DashboardComponent, TimerComponent, IsikudComponent, DokumendidComponent, ToimikudComponent,
        AjaarvestusComponent, LoginComponent, RegisterComponent, IsikudComponent, IsikuPopUpComponent, LisaIsikPopUpComponent, NavbarComponent, SearchComponent 
        
      ],
      imports: [ MatFormFieldModule, MatAutocompleteModule,  MatIconModule, FormsModule, ReactiveFormsModule, AppRoutingModule, MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule, 
        MatFormFieldModule, MatRadioModule, MatSelectModule, MatSliderModule, 
        MatSlideToggleModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
        MatSortModule, MatTableModule, MatIconModule, MatNativeDateModule, MatDialogModule, HttpClientModule],
        providers: [
            {provide: APP_BASE_HREF, useValue: "/", },
            {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
        ]
    })
    .compileComponents().then(()=>{
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;

        de = fixture.debugElement.query(By.css("form"));
        el = de.nativeElement;

    });
  }));

  beforeEach(() => {
    
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should have empty email credentials", ()=>{
    expect(component.credentials.email).toContain("");
  })
  it("should have empty password credentials", ()=>{
    expect(component.credentials.password).toContain("");
  })
  it("should call login method", async(()=>{
      fixture.detectChanges();
      spyOn(component, "login")
      el = fixture.debugElement.query(By.css("button")).nativeElement;
      el.click();
      expect(component.login).toHaveBeenCalledTimes(1);
  }));

});
