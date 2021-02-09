import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class LoaderAService {
    private loaderas: any[] = [];

    add(loadera: any) {
        // add modal to array of active modals
        this.loaderas.push(loadera);
    }
    //  remove(id: string) {
    remove() {
        // remove modal from array of active modals
        this.loaderas = this.loaderas.filter(x => x.id !== 'loader');
    }

    //  open(id: string) {
    open() {
        // open modal specified by id
     
        let loadera: any = this.loaderas[0];       
        loadera.open();
    }
    close() {
        //close(id: string) {
        // close modal specified by id
        let loadera: any = this.loaderas[0];
        loadera.close();
    }
}