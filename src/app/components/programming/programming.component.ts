import {
  Component,
  ViewChild ,
  OnInit,
  ChangeDetectionStrategy,
  TemplateRef
} from '@angular/core';
import { Validators } from '@angular/forms';
import { FieldConfig } from 'src/app/interfaces/field.interface';
import { DynamicFormComponent } from 'src/app/utils/component/dynamic-form/dynamic-form.component';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};
declare var $: any;
@Component({
  selector: 'app-test',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './programming.component.html',
  styleUrls: ['./programming.component.scss']
})
export class ProgrammingComponent implements OnInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  @ViewChild('modalContent') modalContent: TemplateRef<any>;
  public flagProgram;
  public programColumns = false;
  public colForm = 4 ;
  public colCalendar = 7;
  public animation = 'zoomIn';
  public offset = 5;
  view: string = 'month';

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };
  regConfig: FieldConfig[] = [

    {
      type: 'date',
      label: 'Fecha Inicio',
      name: 'fecIni',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'ingresa fecha inicio teetime'
        }
      ]
    },{
      type: 'date',
      label: 'Fecha Fin',
      name: 'fecFin',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'ingrese fecha fin teetime'
        }
      ]
    },
    {
      id:   'plantilla',
      type: 'select',
      label: 'Plantilla',
      name: 'plantilla',
      value: 'existente',
      options: ['existente', 'nueva']

    },

    {
      type: 'button',
      label: 'Programar',
      function: 'mostrarNombre'
    }
  ];
  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
       // this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
       // this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: colors.red,
      actions: this.actions
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: colors.yellow,
      actions: this.actions
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: colors.blue
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: new Date(),
      title: 'A draggable and resizable event',
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];

  activeDayIsOpen: boolean = false;
  constructor(  ) {
     this.flagProgram = false;
  }

  ngOnInit() {
    console.log();
  }
   showAlert() {

  }
  submit(value) {
    this.flagProgram = true;
    this.programColumns = true;
    this.colForm = 2;
    this.colCalendar = 9;
    this.animation = 'slideInRight';
    this.offset = 2;
   }
  resizeView () {
    this.colForm = 4;
    this.colCalendar = 7;
    this.programColumns = false;
    this.animation = 'slideInLeft';
    this.offset= 4;

  }
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  eventTimesChanged({
                      event,
                      newStart,
                      newEnd
                    }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
   // this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }



  addEvent(): void {
    this.events.push({
      title: 'New event',
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    });
    this.refresh.next();
  }
}
