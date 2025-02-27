import { Component } from '@angular/core'
import { GraphComponentComponent } from './graph-component/graph-component.component'

@Component({
  selector: 'app-root',
  imports: [GraphComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'yfiles-angular-integration-basic'
}
