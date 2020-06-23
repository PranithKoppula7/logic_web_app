import { NgModule } from "@angular/core";
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    FormsModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatRadioModule,
    MatDialogModule
  ],
  exports: [
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    FormsModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatRadioModule,
    MatDialogModule
  ]
})
export class ThirdPartyModule{}
