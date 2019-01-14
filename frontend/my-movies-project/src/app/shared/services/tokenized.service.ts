import { AuthenticationService } from './authentication.service';
import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenizedService implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(req, next) {
    if (req.url.includes('omdbapi')) {
      console.log('tototo' + req.url);
      return next.handle(req);
    } else {
      const authenticationService = this.injector.get(AuthenticationService);
      const tokenizedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authenticationService.getToken()}`
        }
      });

      return next.handle(tokenizedReq);
    }
  }
}
