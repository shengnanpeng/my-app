import { Component } from '@angular/core';
import { Router,
         NavigationExtras }                 from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'your friend miss IM';

  checkLogin()
  {
    console.log("psn is here");
    // Create a dummy session id
    let sessionId = 123456789;

    let navigationExtras: NavigationExtras = {
      queryParams: { 'session_id': sessionId },
      fragment: 'anchor'
    };

    //this.router.navigate(['/login'], navigationExtras);
    window.location.href = '/login'
  }
}
