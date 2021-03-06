import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import { Image } from '../app/models/image';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ImagesService } from '../app/services/images.service';

export class ImagesDataSource implements DataSource<Image> {

    private imagesSubject = new BehaviorSubject<Image[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(public imagesServices: ImagesService) {}

    connect(): Observable<Image[]> {
        return this.imagesSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.imagesSubject.complete();
        this.loadingSubject.complete();
    }

    loadImages(pageIndex = 0, pageSize = 5): any {

        this.loadingSubject.next(true);

        this.imagesServices.getImages(pageIndex , pageSize = 5).pipe(
            finalize(() => this.loadingSubject.next(false))
        )
        .subscribe(images => this.imagesSubject.next(images));
    }
}
