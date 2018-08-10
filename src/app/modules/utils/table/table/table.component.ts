import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { FormComponent } from '../../form/form/form.component';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { MatPaginatorIntl} from '@angular/material';

import * as $ from 'jquery';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}
/** Constants used to fill up our data base. */
const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

/**
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},

]; */
export const UserData = [
  {id: 1, name: 'Hydrogen', progress: 1.0079, color: 'H'},
  {id: 2, name: 'Helium', progress: 4.0026, color: 'He'},
  {id: 3, name: 'Lithium', progress: 6.941, color: 'Li'},
  {id: 4, name: 'Beryllium', progress: 9.0122, color: 'Be'},
  {id: 5, name: 'Boron', progress: 10.811, color: 'B'},
  {id: 6, name: 'Carbon', progress: 12.0107, color: 'C'},
  {id: 7, name: 'Nitrogen', progress: 14.0067, color: 'N'},
  {id: 8, name: 'Oxygen', progress: 15.9994, color: 'O'},
  {id: 9, name: 'Fluorine', progress: 18.9984, color: 'F'},
  {id: 10, name: 'Neon', progress: 20.1797, color: 'Ne'},

];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent extends MatPaginatorIntl implements OnInit {
  array = Object.keys(UserData[0]);
  displayedColumns: string[] = this.array;
  columnsToDisplay: string[] = this.displayedColumns.slice();
  dataSource: MatTableDataSource<UserData>;

  values: any;
  keys: string[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private route: ActivatedRoute, private bottomSheet: MatBottomSheet) {
    super();
    let data: any = this.route.snapshot.data;
    this.values = new data.model();
    this.keys = [];
      Object.keys(this.values.data).forEach(key => {
        this.keys.push(this.values.data[key].title);
      });
      console.log(this.keys);
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
   this.dataSource.paginator = this.paginator;
   this.dataSource.sort = this.sort;
   $.material.init();

  }

  openBottomSheet(): void {
    this.bottomSheet.open(FormComponent, {
      data: {
        values: this.values.data
      }
    });
  }
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
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}
