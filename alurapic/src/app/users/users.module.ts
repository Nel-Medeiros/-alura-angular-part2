import { UserListModule } from './user-list/user-list.module';
import { UserDetailsModule } from './user-details/user-details.module';
import { UserModule } from './user/user.module';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        UserModule,
        UserDetailsModule,
        UserListModule
    ]
})
export class UsersModule {

}