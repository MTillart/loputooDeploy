export class CalendarDate {
  eventDate: Date;
  desc: [
    {
      task: string,
      time: string
    }
  ]

  constructor(
    newDate: Date,
    newTask: string,
    newTime: string) {
    this.eventDate = newDate;
    this.desc = [
      {
        task: newTask,
        time: newTime
      }
    ]

  }
  }