import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatCalendarCellCssClasses} from "@angular/material";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { To_Do } from '../_models/to_do';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Time } from '../_models/time';
import { group } from 'console';
import { CalendarDate } from '../_models/calendarDate';

@Component({
  selector: 'app-kalender-pop-up',
  templateUrl: './kalender-pop-up.component.html',
  styleUrls: ['./kalender-pop-up.component.scss']
})
export class KalenderPopUpComponent implements OnInit {

  form: FormGroup;
  task: string;
  dataArray: Array<To_Do>;
  time = {hour: 13, minute: 30};

  theDate: Date = new Date();
  theHour: number = 13;
  theMinutes: number = 30;

  eventDate: any;
  eventTime: any;
  testDate: any;
  selectedDate: Date;
  dateToSend: CalendarDate;

  datesToHighlight = ["2020-03-22T18:30:00.000Z", "2020-03-10T18:30:00.000Z", "2020-03-05T18:30:00.000Z", "2020-03-28T18:30:00.000Z", "2020-03-14T18:30:00.000Z", "2020-03-31T18:30:00.000Z", "2020-03-08T18:30:00.000Z", "2020-03-15T18:30:00.000Z"];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<KalenderPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

      

      this.dataArray = data;
      //console.log(this.dataArray);
    
}
  ngOnInit() {

    // this.form = this.fb.group({
    //   task: ['', Validators.required],
    //   eventDate: ['', Validators.required],
    // })
    this.form = new FormGroup({
      task: new FormControl,
      eventDate: new FormControl,
      });
    
  };

  save() {
    const time = this.theHour+":"+this.theMinutes;
    console.log(time);

    // if(this.theDate == null || undefined){
    //   this.theDate = new Date();
    // }
   

    this.dateToSend = new CalendarDate(
      this.theDate,
      this.form.get('task').value,
      time
    )
    
    console.log(this.dateToSend);


    this.dialogRef.close(this.form.value);
   
  }


  close() {
      this.dialogRef.close();
  }


  dateClass() {
    return (date: Date): MatCalendarCellCssClasses => {
      const highlightDate = this.datesToHighlight
        .map(strDate => new Date(strDate))
        .some(d => d.getDate() === date.getDate() && d.getMonth() === date.getMonth() && d.getFullYear() === date.getFullYear());
      
      return highlightDate ? 'special-date' : '';
    };
  }

  getSelectedDate(event){
    //event.setHour(12);


    this.theDate = event;
    
    //this.theDate.setHours(5);

    //this.form.get('eventDate').setValue(event);
  }
  logTime(event){
    this.theHour = event.hour;
    this.theMinutes = event.minute;

  }

}

