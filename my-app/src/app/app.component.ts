import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles: [`
  //   h3 {
  //     color: dodgerblue;
  //   }
  // `]
})
export class AppComponent {
  
  isButtonPressed = false
  countClicks = 0
  clickArray = []

  onPressButton(){
    if(this.countClicks === 0 ) {
      this.isButtonPressed = true
    }
    
    this.countClicks = this.countClicks + 1
    this.clickArray.push(this.countClicks)
  }
}
