import { Component } from '@angular/core';
import { CodeProviderComponent } from '@components';
import { UsefulLinksList } from '@types';
import { UsefulLinksListComponent } from 'app/components/useful-links-list/useful-links-list.component';

@Component({
  selector: 'app-dialog',
  imports: [
    CodeProviderComponent,
    UsefulLinksListComponent
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  usefulLinksList: UsefulLinksList = [
    {
      text: 'Disponibilidade do elemento (Can I Use)',
      link: 'https://caniuse.com/dialog'
    },
    {
      text: 'Documentação oficial do elemento (MDN)',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog'
    }
  ];
}
