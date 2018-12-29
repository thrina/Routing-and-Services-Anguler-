import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:`./app.component.html`,
  // template:`Your Text is <input type='text' [(ngModel)]='usetText'/>
  // <br/><br/>
  // <simple [simpleInput]='usetText'></simple>
  // `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Routing and services';
  
}
