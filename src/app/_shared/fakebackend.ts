import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError , EMPTY} from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
 
@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

    private fullName: String    = 'John Doe';
    private email: String    = 'john@doe.com';

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return of(null).pipe(mergeMap(() => {

            const auth    = request.headers.get('Authorization');

            // Items list
            if (request.url.endsWith('/api/items') && request.method === 'GET') {

                console.log('[ intercepting ] ' + request.method + ' : ' + request.url + ' ' + auth);

                const body = {
                    result : [
                        {
                            title : 'Item 1',
                            description : 'Description 1',
                            id : 1
                        },
                        {
                            title : 'Item 2',
                            description : 'Description 2',
                            id : 2
                        },
                        // {
                        //     title : 'Item 2',
                        //     description : 'Description 2',
                        //     id : 3
                        // },
                        // {
                        //     title : 'Item 2',
                        //     description : 'Description 2',
                        //     id : 4
                        // },
                        // {
                        //     title : 'Item 2',
                        //     description : 'Description 2',
                        //     id : 5
                        // },
                        // {
                        //     title : 'Item 2',
                        //     description : 'Description 2',
                        //     id : 6
                        // },
                        // {
                        //     title : 'Item 2',
                        //     description : 'Description 2',
                        //     id : 7
                        // }
                    ]
                };
                return of(new HttpResponse({ status: 200, body: body }));
            }

            // Add item
            if (request.url.endsWith('/api/item') && request.method === 'POST') {

                console.log('[ intercepting ] ' + request.method + ' : ' + request.url + ' ' + auth);

                const bodyPosted    = request.body;
                const random    = (Math.floor(Math.random() * Math.floor(1000)) + 1);
                const newResult    = { ...bodyPosted , id: random};

                const body = {
                    success : bodyPosted ? true : false,
                    result : newResult
                };
                return of(new HttpResponse({ status: 200, body: body }));
            }

            // Update item
            if (request.url.startsWith('/api/item') && request.method === 'PUT') {

                console.log('[ intercepting ] ' + request.method + ' : ' + request.url + ' ' + auth);

                const bodyPosted    = request.body;

                const body = {
                    success : bodyPosted ? true : false,
                    result : bodyPosted
                };
                return of(new HttpResponse({ status: 200, body: body }));
            }

            // Delete item
            if (request.url.startsWith('/api/item/') && request.method === 'DELETE') {
                console.log('[ intercepting ] ' + request.method + ' : ' + request.url + ' ' + auth);
                const body = {
                    success : true
                };
                return of(new HttpResponse({ status: 200, body: body }));
            }

            // at default just process the request
            return next.handle(request);
        }))
        .pipe(materialize())
        .pipe(delay(500))
        .pipe(dematerialize());
    }

    private makeid(): string {
        let  text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 25; i++) {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
}
