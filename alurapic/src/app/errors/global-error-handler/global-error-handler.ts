import { Router } from '@angular/router';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import * as StackTrace from 'stacktrace-js';

import { ServerLogService } from './server-log.service';
import { UserService } from './../../core/user/user.service';
import { environment } from './../../../environments/environment';


@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(private injector: Injector) {

    }

    handleError(error: any): void {
        console.log('passei pelo handler');

        const location = this.injector.get(LocationStrategy);
        const userService = this.injector.get(UserService);
        const serverLogService = this.injector.get(ServerLogService);
        const router = this.injector.get(Router);

        const url = location instanceof PathLocationStrategy
            ? location.path()
            : ''
            ;

        const message = error.message ? error.message : error.toString();

        if (environment.production) router.navigate(['/error']);
        StackTrace
            .fromError(error)
            .then(stackFrames => {
                const stackAsString = stackFrames
                    .map(sf => sf.toString())
                    .join('\n')
                    ;

                console.log('Error Message --> ' + message);
                console.log('StackTrace Log --> ' + stackAsString);

                console.log('Dados que serão enviados para o servidor:')
                serverLogService.log(
                    {
                        message,
                        url,
                        userName: userService.getUserName(),
                        stack: stackAsString
                    }
                ).subscribe(
                    () => console.log('Error logged on server successfuly.'),
                    err => {
                        console.log(err);
                        console.log('Failed to send error log to server.');
                    }
                );
            });

    }

}