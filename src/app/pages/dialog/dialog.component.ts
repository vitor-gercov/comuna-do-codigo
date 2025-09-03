import { Component, signal } from '@angular/core';
import { CodeProviderComponent } from '@components';
import { CodeProvider, UsefulLinksList } from '@types';
import { UsefulLinksListComponent } from 'app/components/useful-links-list/useful-links-list.component';
import { ComunaMainButtonDirective } from "@directives";

@Component({
  selector: 'app-dialog',
  imports: [
    CodeProviderComponent,
    UsefulLinksListComponent,
    ComunaMainButtonDirective
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  code = signal<CodeProvider>({
    html:
      `
      <button id="open_dialog_button">
        Abrir dialog
      </button>

      <dialog #dialog>
        <header>
            <h2>
                Hello world!
            </h2>
            <button id="close_dialog_button" aria-label="fechar dialog">
                ❌
            </button>
        </header>
      </dialog>
      `,
    js:
      `
      const dialog = document.querySelector('dialog');
      const openDialogButton = document.querySelector('#open_dialog_button');
      const openDialogButton = document.querySelector('#close_dialog_button');

      openDialogButton.addEventListener('click', () => {
        dialog.showModal();
      });
      closeDialogButton.addEventListener('click', () => {
        dialog.close();
      });
      `,
    css:
      `
      dialog {
        width: 100%;
        max-width: 1270px;
        border-radius: 1rem;

        &::backdrop {
          background-color: rgba(0, 0, 0, .5);
        }

        header {
          display: flex;
          justify-content: space-between;

          button {
            border: none;
            height: 3rem;
            width: 3rem;
            border-radius: 50%;
            cursor: pointer;
            padding: 0;
          }
        }
      }
      `
  })
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
