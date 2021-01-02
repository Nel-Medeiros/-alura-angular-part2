import { LoadingType } from './loading-type';
import { Observable } from 'rxjs';
import { LoadingService } from './loading.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: [
        'loading.component.css'
    ]
})
export class LoadingComponent implements OnInit {

    loading$: Observable<string>;

    constructor(private loadinService: LoadingService) {

    }

    ngOnInit(): void {
        this.loading$ = this.loadinService
            .getLoadding()
            .pipe(map(loadingType => loadingType.valueOf()))
    }
}