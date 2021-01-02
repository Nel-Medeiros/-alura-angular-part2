import { LoadingType } from './loading-type';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { startWith } from 'rxjs/operators';

//esse servço será utilizado pelo 'interceptor' para iniciar e parar o componente de 'loading'
@Injectable({
    providedIn: 'root'
})
export class LoadingService {

    loadingSubject = new Subject<LoadingType>();

    getLoadding() {
        return this.loadingSubject.asObservable()
            .pipe(startWith(LoadingType.STOPPED));
    }

    start() {
        this.loadingSubject.next(LoadingType.LOADING);
    }

    stop() {
        this.loadingSubject.next(LoadingType.STOPPED);
    }
}