import { Component, signal } from '@angular/core';
import { CodeProviderComponent } from "@components";
import { UsefulLinksList } from '@types';
import { UsefulLinksListComponent } from "app/components/useful-links-list/useful-links-list.component";

@Component({
  selector: 'app-accordion',
  imports: [CodeProviderComponent, UsefulLinksListComponent],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  code = signal({
    html:
      `
      <details name="accordion">
        <summary>
          Accordion 1
        </summary>
        <p>
          Isso é um accordion 😎
        </p>
      </details>
      <details name="accordion">
        <summary>
          Accordion 2
        </summary>
        <p>
          Ele é muito usado em FAQs
        </p>
      </details>
      <details name="accordion">
        <summary>
          Accordion 3
        </summary>
        <p>
          Quando um abre, o aberto fecha
        </p>
      </details>
      <details name="accordion">
        <summary>
          Accordion 4
        </summary>
        <p>
          Basta declarar todos os details
           com o mesmo "name"
        </p>
      </details>
      `,
    css:
      `
      details {
        padding: 1.5rem;
        border: 1px solid yellow;
        border-radius: .5rem;
        background-color: rgba(255, 255, 255, 0.1);
        margin-block: 1rem;
      }

      summary {
        cursor: pointer;
      }
      `
  });
  usefulLinksList: UsefulLinksList = [
    {
      text: 'Documentação oficial do elemento (MDN)',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details'
    }
  ]

}
