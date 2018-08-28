
import { Component, OnInit, ViewChild, Input, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { FormComponent } from '../../form/form/form.component';
import { UserData } from '../../../../models/clients/clients.model';
import { LeftbarService } from '../../../../services/leftbar.service';
import { LeftbarComponent } from '../../../dashboard/leftbar/leftbar.component';
import { HttpClient } from '@angular/common/http';
import { Observable, interval, pipe } from 'rxjs';
import { map, first } from 'rxjs/operators';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit , AfterViewInit {
   // displayedColumns: string[] = this.array;
  // columnsToDisplay: strinsidenavg[] = this.displayedColumns.slice();
  displayedColumns: string[];
  columnsToDisplay: string[];
  // we passed the structure of the model class
  dataSource: MatTableDataSource<UserData>;
  values: any;
  keys: string[];
  public catalogTitle;
  public catalogIcon;
  public endpoint;
  public toggleActive: any = false;
  public data = []
  public dataTable  ;
   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort;
  constructor(public _http: HttpClient, private route: ActivatedRoute, private bottomSheet: MatBottomSheet, private sidenav: LeftbarService) {
    // passing route data with activatedroute (data = ClientsModule)
    const data: any = this.route.snapshot.data;

    // we get data model
    this.values = new data.model();
    this.catalogTitle = this.values.catalogTitle;
    this.catalogIcon = this.values.catalogIcon;
    this.endpoint = this.values.endpoint;
     // get the object keys of data model
    this.keys = [];
    Object.keys(this.values.data).forEach(key => {
       if (this.values.data[key].key === 'catalogName' || this.values.data[key].key === 'endpoint') {
         return;
       } else {
         this.keys.push(this.values.data[key].title);
       }
    });

    // Assign the data to the data source for the table to render
    // "here comes the json of API or import from model"
  }

// para cargar el boton flotante

  toggleLeftSidenav() {
    this.toggleActive = !this.toggleActive;
    this.sidenav.toggle();

    console.log('Clicked');
  }
  // boton flotante
  ngOnInit() {
    this.getDatatable();

    this.dataSource = new MatTableDataSource(this.dataTable);

    // we passed the keys to table header
    this.displayedColumns = this.keys;
    this.columnsToDisplay = this.displayedColumns.slice();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  // filter input
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getDatatable () {


    }
    ngAfterViewInit() {
      return   this._http.get(this.endpoint).subscribe(data => {
          this.dataTable = data;

        }
      );
    }

}



