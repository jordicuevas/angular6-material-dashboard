import { Component, OnInit, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';

 @Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  keys: any;
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private bottomSheetRef: MatBottomSheetRef<FormComponent>) {
    this.keys = [];
    Object.keys(this.data.values).forEach(key => {
      this.keys.push(key);
    });
  }
  ngOnInit() {
  }

}
