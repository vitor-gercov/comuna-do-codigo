import { Component, signal } from '@angular/core';
import { CodeProviderComponent } from "@components";
import { UsefulLinksList } from '@types';
import { UsefulLinksListComponent } from "app/components/useful-links-list/useful-links-list.component";

@Component({
  selector: 'app-tooltip',
  imports: [CodeProviderComponent, UsefulLinksListComponent],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss'
})
export class TooltipComponent {
  code = signal({
    html:
      `
      <button id="tooltip_button" popovertarget="tooltip">
        i
      </button>

      <div id="tooltip" popover anchor="tooltip_button">
        Explicação do campo confuso 😎
      </div>
      `,
    css:
      `
      #tooltip_button {
        border: 0;
        height: 1.5rem;
        width: 1.5rem;
        text-align: center;
        border-radius: 50%;
        background-color: yellow;
        cursor: pointer;
      }

      [popover] {
        inset: unset;
        border: 1px solid rgb(206, 206, 206);
        top: anchor(bottom);
        left: anchor(center);
        position-try: flip-block, flip-inline;
        border-radius: 0 .5rem .5rem .5rem;
        padding: .5rem 1rem;
      }
      `
  });
  usefulLinksList: UsefulLinksList = [
    {
      text: 'Disponibilidade da popover API (Can I Use)',
      link: 'https://caniuse.com/mdn-api_htmlelement_popover',
    },
    {
      text: 'Disponibilidade da anchor positioning API (Can I Use)',
      link: 'https://caniuse.com/css-anchor-positioning',
    },
    {
      text: 'Documentação oficial sobre a popover API (MDN)',
      link: 'https://developer.mozilla.org/en-US/docs/Web/API/Popover_API',
    },
    {
      text: 'Documentação oficial sobre anchor positioning (MDN)',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning',
    },
    {
      text: 'Documentação oficial sobre position-try (MDN)',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/position-try',
    },
    {
      text: 'Artigo introduzindo a popover API (Chrome for developers)',
      link: 'https://developer.chrome.com/blog/introducing-popover-api?hl=pt-br',
    },
    {
      text: 'Artigo introduzindo a anchor positioning API (Chrome for developers)',
      link: 'https://developer.chrome.com/blog/anchor-positioning-api?hl=pt-br',
    },
    {
      text: 'Exemplos de implementação da popover API + anchor positioning por Web Dev Simplified (Youtube)',
      link: 'https://www.youtube.com/watch?v=B4Y9Ed4lLAI&ab_channel=WebDevSimplified',
    },
    {
      text: 'Artigos sobre a popover API (CSS Tricks)',
      link: 'https://css-tricks.com/tag/popover/',
    },
    {
      text: 'Guia sobre anchor positioning (CSS Tricks)',
      link: 'https://css-tricks.com/css-anchor-positioning-guide/',
    },
  ]
}
