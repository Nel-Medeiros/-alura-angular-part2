import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        UserListComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class UserListModule {

}