import { Component } from '@angular/core';
import { CodeProviderComponent } from '@components';
import { CodeProvider } from '@types';

@Component({
  selector: 'app-anchor',
  imports: [
    CodeProviderComponent
  ],
  templateUrl: './anchor.component.html',
  styleUrl: './anchor.component.scss'
})
export class AnchorComponent {
  code: CodeProvider = {
    html: `<h1>Hello ludu!</h1>`,
    css:
      `h1 {
        color: red;
      }`,
  };
}