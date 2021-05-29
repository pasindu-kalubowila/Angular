import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  t = 'Data Binding';

  handleEvent(){
    console.log('Button Clicked')
  }
  handleEvent2(){
    console.log('key Down')
  }
}
