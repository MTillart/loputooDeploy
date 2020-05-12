import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule, 
  MatFormFieldModule, MatRadioModule, MatSelectModule, MatSliderModule, 
  MatSlideToggleModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule, MatTableModule, MatIconModule, MatNativeDateModule, MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';


import { KalenderPopUpComponent } from './kalender-pop-up.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule,MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule, 
    MatFormFieldModule, MatRadioModule, MatSelectModule, MatSliderModule, 
    MatSlideToggleModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
    MatSortModule, MatTableModule, MatIconModule, MatNativeDateModule, ReactiveFormsModule
  ],
  declarations: [KalenderPopUpComponent],
  exports: [KalenderPopUpComponent],
  bootstrap: [KalenderPopUpComponent],
  entryComponents: [
    KalenderPopUpComponent,
  ],
})
export class NgbdTimepickerBasicModule {
  
}
