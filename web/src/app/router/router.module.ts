import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterComponent } from './router.component';
import { RouterModule } from '@angular/router';
import { BindingAddModalComponent } from './binding-add-modal/binding-add-modal.component';
import { BindingRemoveModalComponent } from './binding-remove-modal/binding-remove-modal.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [RouterComponent, BindingAddModalComponent, BindingRemoveModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    RouterModule.forChild([{ path: ':name', component: RouterComponent }])
  ]
})
export class HorseRouterModule { }
