import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-angular-project-redlev';

  teamTitle = 'HaydeSoft';
  teamMembers = [
    {value: "Serdar Kaya"},
    {value: "Banu Baysal"},
    {value: "Yavuz Kemal Bayrakci"},
    {value: "Durukan Kizilarslan"}
  ]
}
