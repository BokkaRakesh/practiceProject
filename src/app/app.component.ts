import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SearchComponent } from './search-component/search/search.component';
import { CustomOnHoverDirective } from './directives/custom-on-hover.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'praticeProject';
}
