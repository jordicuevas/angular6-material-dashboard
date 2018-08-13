
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { FormComponent } from '../../form/form/form.component';
import { UserData } from '../../../../models/clients/clients.model';


/** Constants used to fill up our data base. */
const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray', 'brown'];
const NAMES: string[] = ['Mariale', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Jordi', 'John', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  // displayedColumns: string[] = this.array;
  // columnsToDisplay: string[] = this.displayedColumns.slice();
  displayedColumns: string[];
  columnsToDisplay: string[];
  // we passed the structure of the model class
  dataSource: MatTableDataSource<UserData>;
  values: any;
  keys: string[];
  public catalogTitle;
  public catalogIcon;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private route: ActivatedRoute, private bottomSheet: MatBottomSheet) {
    // passing route data with activatedroute (data = ClientsModule)
    const data: any = this.route.snapshot.data;

    // get data model
    this.values = new data.model();
    this.catalogTitle = this.values.catalogTitle;
    this.catalogIcon = this.values.catalogIcon;
    console.log(this.values)
    // get the object keys of data model
    this.keys = [];
    Object.keys(this.values.data).forEach(key => {
      this.keys.push(this.values.data[key].title);
    });
    // we passed the keys to table header
    this.displayedColumns = this.keys;
    this.columnsToDisplay = this.displayedColumns.slice();

    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    // "here comes the json of API or import from model"
    this.dataSource = new MatTableDataSource(users);
  }
  // we called button function
  openBottomSheet(): void {
    this.bottomSheet.open(FormComponent, {
      data: {
        values: this.values.data
      }
    });
  }

  ngOnInit() {
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
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    Notificaciones: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}


