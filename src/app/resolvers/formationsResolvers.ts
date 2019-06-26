import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';



@Injectable()
export class FormationsResolvers implements Resolve<any> {

    constructor() {
    }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(
                     [{
                        id: 1,
                        name: 'Module Angular',
                    }, {
                        id: 2,
                        name: 'Module JavaScript',
                    }, {
                        id: 3,
                        name: 'Module TypeScript',
                    }]
                )
            }, 1000);
        });
    }


}