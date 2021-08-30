import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authService = this.injector.get(AuthService);
    const log = /login/gi;
    if (req.url.search(log) === -1) {
      if (req.url.includes('/registration') === false) {
        console.log('Basic');
        req = req.clone({
          setHeaders: {
            Authorization: `Basic ${authService.getToken()}`,
          },
        });
      }
    }
    return next.handle(req);
  }
}
