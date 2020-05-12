import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { KalenderPopUpComponent } from '../kalender-pop-up/kalender-pop-up.component';
import { To_Do } from '../_models/to_do'
import { isNgTemplate, ThrowStmt } from '@angular/compiler';
import { CalendarDate } from '../_models/calendarDate';
import { element } from 'protractor';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

})
export class DashboardComponent implements OnInit {

  isAddTask: boolean;
  form: FormGroup;

  newTask: To_Do;



  dataSource1 = DASH_DATA1;
  calendarData: CalendarDate[];

  newCalendarDates;

  columnsToDisplay = ['Task'];

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {


    //this.sortArray()
    console.log("The sorted dates are: ");
    //this.sortObjects(this.calendarData);

    this.isAddTask = false;

    this.form = this.fb.group({
      toDoTask: ['', Validators.required],

    });
  }
  get toDoTask() { return this.form.get('toDoTask'); }

  openAddTask() {
    this.isAddTask = !this.isAddTask;


  }
  saveAddTask() {
    this.form.get("toDoTask").value;
    this.newTask = {
      Task: this.form.get("toDoTask").value,
      isDone: false
    }
    this.isAddTask = !this.isAddTask;
    console.log(this.newTask);

    // send API CALL

  }
  closeAddTask() {
    this.isAddTask = !this.isAddTask;
    this.form.reset();
  }

  // Open pop-up and configur it. Send data
  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.height = "600px";
    dialogConfig.width = "600px";
    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'calendarBox';
    //dialogConfig.autoFocus = true;

    //   dialogConfig.data = {
    //     id: 1,
    //     title: 'Kalender'
    // };
    //dialogConfig.data = DASH_DATA;

    this.dialog.open(KalenderPopUpComponent, dialogConfig);
  }



  // constructor(
  //   newDate: Date,
  //   newTask: string,
  //   newTime: string) {
  //   this.eventDate = newDate;
  //   this.desc = [
  //     {
  //       task: newTask,
  //       time: newTime
  //     }
  //   ]

  // }

}
// const calenderDates: CalendarDate[] = [
//   {
//     calDate: new Date,
//     Task: "Comand the Normandy",
//     Time: "08:00"
//   },
//   {
//     calDate: new Date(2020, 0o0, 13),
//     Task: "Shoot disks with Vak",
//     Time: "11:50"
//   },
//   {
//     calDate: new Date(2020, 0o5, 10),
//     Task: "Protheans art",
//     Time: "15:15"
//   },
//   {
//     calDate: new Date(2020, 0o5, 10),
//     Task: "Poems with Wrex",
//     Time: "8.30"
//   },
// ]


export interface To_Do1 {
  Task: string;
  isDone: boolean;
}

const DASH_DATA1: To_Do1[] = [
  {
    Task: "Esita dokument A",
    isDone: false
  }, {
    Task: "Esita dokument B",
    isDone: false
  },
  {
    Task: "Saada email",
    isDone: true
  },
  {
    Task: "Korrasta sahtleid",
    isDone: false
  },
  {
    Task: "Toimik 59 ülevaadata",
    isDone: true
  },
  {
    Task: "Tõnu Tõru?",
    isDone: false
  },
  {
    Task: "Tõnu Tõru?",
    isDone: false
  },
  {
    Task: "Tõnu Tõru?",
    isDone: false
  },
  {
    Task: "Tõnu Tõru?",
    isDone: false
  },

];