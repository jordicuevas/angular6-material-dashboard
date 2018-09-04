import {
  Component,
  ViewChild ,
  OnInit,
  ChangeDetectionStrategy,
  TemplateRef
} from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormsModule, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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
import { ReactiveFormsModule } from '@angular/forms';

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
  styleUrls: ['./programming.component.scss'],

})
export class ProgrammingComponent   implements OnInit {
   scheduleForm: FormGroup; // define the form group

  /** A label for the cancel button */
  cancelBtnLabel = 'Anular';

  /** A label for the set button */
  setBtnLabel = 'Confirmar';

  @ViewChild('modalContent') modalContent: TemplateRef<any>;
  public flagProgram;
  public programColumns = false;
  public colForm = 5 ;
  public colCalendar = 7;
  public animation = 'zoomIn';
  public offset = 5;
  public flagPlantilla; // para ocultar o mostrar el select con las plantillas guardadas
  public checked = true;
  public hoursOfLabor: any =  [];
  view: string = 'month';
  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

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
  constructor( private fb: FormBuilder ,  public toastr: ToastrService  ) {
     this.flagProgram = false;
     this.scheduleForm = fb.group({
       date_to:   ['', Validators.required],
       date_from:   ['08/08/2018', Validators.required],
       size:       [10, Validators.required],
       targets:     ['', Validators.required],
       lunes:      [true],
       martes:     [true],
       miercoles:  [true],
       jueves:     [true],
       viernes:    [true],
       sabado:     [true],
       domingo:    [true],
       location:    [''],
       hour_end :  [''],
       hour_start :  [''],
       fechaExFin: [''],
       horExIni:   [''],
       horExFin:   [''],
       fechaExIni: [''],
       capacity:   ['', Validators.required],
       config_default : [1, Validators.required],
       account: [],
       description: []
       // orangeFormEmail: ['', [Validators.required, Validators.email]],
     // orangeFormPass: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit() {
     this.flagPlantilla = false; // inicializamos la plantilla en false
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
    this.colForm = 6; //default 4
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
  /*
  * form logic
  * */
  programmEvent(formValue, isValid) {
   // console.log(formValue.date_from);
   if( isValid ) {
      let fechaInicio = (this.reorderDate(formValue.date_from));
      let fechaFin    = (this.reorderDate(formValue.date_to));
      let days = [
       {'0': formValue.domingo},
       {'1': formValue.lunes},
       {'2': formValue.martes},
       {'3': formValue.miercoles},
       {'4' : formValue.jueves},
       {'5': formValue.viernes},
       {'6': formValue.sabado}
     ];
     console.log( days );
   } else {
     this.toastr.error('complete los campos requeridos')
   }
  }
  getTemplateValue(templateValue) {
    console.log(templateValue);
    switch (templateValue) {
      case 1:
        this.flagPlantilla = false;
        break;
      case 2:
        this.flagPlantilla = true;

        this.scheduleForm.controls['capacity'].setValue(25);
        this.scheduleForm.controls['date_to'].setValue(new Date('11/10/1981'));

        break;
      default:
        this.flagPlantilla = false;
        break;
    }
  }
  setTargetValue(targetValue) {
    console.log(targetValue);
  }
  /*
  * Add labor hours to array
  * */
  addLaborHour(horDesde, horHasta, fechaDesde, fechaHasta ) {
    console.log(horDesde.value)
    if ( horDesde.value === null || horHasta.value === null || fechaDesde.value === null || fechaHasta.value === null ) {
      this.toastr.error('Los campos de la sección excepciones son obligatorios  ')
       return false;
    } else {
      console.log(fechaDesde)
      /// REORDENAMOS LAS FECHAS
      let fechaD = this.reorderDate(fechaDesde);
      let fechaH = this.reorderDate(fechaHasta);
      /// CAPTURAMOS EL VALOR DE LOS CONTROLES HORA
      let horaDesde = horDesde.value;
      let horaHasta = horHasta.value;
      /// CONVERTIMOS LOS VALORES EN ARRAY Y ASIGNAMOS AL ARRAY  HOURSOFLABOR A GUARDAR
      let arrayElement =  this.makeArrayElement(fechaD, horaDesde, fechaH, horaHasta);
      this.hoursOfLabor.push(arrayElement);
      localStorage.setItem('arrayHoras', JSON.stringify(this.hoursOfLabor));
    }

}
makeArrayElement (fechaInicio , horaInicio, fechaFin, horaFin) {
    let element = [fechaInicio + ' ' + horaInicio + ' , ' + fechaFin + ' ' + horaFin ];
    return element;
}
/*
* @FUNTION : deleteLabourHour
* @PARAMS : ID: id of the element of the array
* */
  deleteLabourHour(id) {
      this.hoursOfLabor.splice( id , 1);
  }
  /*
* @FUNTION : reorderDate
* @PARAMS : dateToOrder: value of datepicker
* */
  reorderDate( dateToOrder) {
        let day   = dateToOrder['_i'].date;
        day = (day < 10) ? '0' + day : day;
        let month = dateToOrder['_i'].month;
        month = (month < 10 ) ? '0' + month : month;
        let year = dateToOrder['_i'].year;
        let newDate = day + '-'  + month + '-' + year;
    return newDate;
  }

}
