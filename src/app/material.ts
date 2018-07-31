import {
    MatButtonModule,
    MatCheckboxModule
} from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatMenuModule, MatListModule, MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatIconModule ],
    exports: [MatMenuModule, MatListModule, MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatIconModule ],
})

export class MaterialModule {}

