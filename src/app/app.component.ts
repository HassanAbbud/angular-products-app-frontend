import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Angular app'
  enabled: boolean = true;

  public setEnabled (): boolean{
    return this.enabled = !this.enabled;
  }
}
