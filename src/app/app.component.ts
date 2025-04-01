import {Component} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {PrincipalComponent} from "./principal/principal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, PrincipalComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ipi-front';
}

