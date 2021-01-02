import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../../environments/environment';
import { ServerLog } from './server-log';

const API = environment.serverLog;

@Injectable({
    providedIn: 'root'
})
export class ServerLogService {

    constructor(private httpCliente: HttpClient) {

    }

    log(serverLog: ServerLog) {
        return this.httpCliente.post(API + '/infra/log', serverLog);
    }
}   