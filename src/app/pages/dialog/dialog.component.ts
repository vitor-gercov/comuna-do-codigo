import { Component, computed, model } from '@angular/core';
import { CodeProviderComponent } from '@components';
import { CodeProvider, UsefulLinksList } from '@types';
import { UsefulLinksListComponent } from 'app/components/useful-links-list/useful-links-list.component';
import { ComunaMainButtonDirective } from "@directives";
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dialog',
  imports: [
    CodeProviderComponent,
    UsefulLinksListComponent,
    ComunaMainButtonDirective,
    NgClass,
    FormsModule
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  dialogTypeSelected = model<string>('dialog');
  css = computed<string>(() => {
    let css = '';
    switch (this.dialogTypeSelected()) {
      case 'dialog':
        css =
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
          `;
        break;
      case 'bottomsheet':
        css =
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

          .bottomsheet {
            margin-bottom: 0;
            border-radius: 1rem 1rem 0 0;
            transform: translateY(0);
            transition: transform .25s ease-in;

            @starting-style {
              transform: translateY(100%);
            }
          }
          `;
        break;

      case 'sidebar_left':
        css =
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

          .sidebar_left {
            height: 100vh;
            max-height: 100vh;
            margin-left: 0;
            border-radius: 0;
            transform: translateX(0);
            transition: transform .25s ease-in;

            @starting-style {
              transform: translateX(-100%);
            }
          }
          `;
        break;
      case 'sidebar_right':
        css =
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

          .sidebar_right {
            height: 100vh;
            max-height: 100vh;
            margin-right: 0;
            border-radius: 0;
            transform: translateX(0);
            transition: transform .25s ease-in;

            @starting-style {
              transform: translateX(100%);
            }
          }
          `;
        break;
    }
    return css;
  });
  html = computed<string>(() => {
    let html = '';
    switch (this.dialogTypeSelected()) {
      case 'dialog':
        html =
          `
          <button id="open_dialog_button">
            Abrir dialog
          </button>

          <dialog>
            <header>
                <h2>
                    Hello world!
                </h2>
                <button id="close_dialog_button" aria-label="fechar dialog">
                    ❌
                </button>
            </header>
          </dialog>
          `;
        break;
      case 'bottomsheet':
        html =
          `
          <button id="open_dialog_button">
            Abrir dialog
          </button>

          <dialog class="bottomsheet">
            <header>
                <h2>
                    Hello world!
                </h2>
                <button id="close_dialog_button" aria-label="fechar dialog">
                    ❌
                </button>
            </header>
          </dialog>
          `;
        break;
      case 'sidebar_left':
        html =
          `
          <button id="open_dialog_button">
            Abrir dialog
          </button>

          <dialog class="sidebar_left">
            <header>
                <h2>
                    Hello world!
                </h2>
                <button id="close_dialog_button" aria-label="fechar dialog">
                    ❌
                </button>
            </header>
          </dialog>
          `;
        break;
      case 'sidebar_right':
        html =
          `
          <button id="open_dialog_button">
            Abrir dialog
          </button>

          <dialog class="sidebar_right">
            <header>
                <h2>
                    Hello world!
                </h2>
                <button id="close_dialog_button" aria-label="fechar dialog">
                    ❌
                </button>
            </header>
          </dialog>
          `;
        break;
    }
    return html;
  });
  code = computed<CodeProvider>(() => {
    return {
      html: this.html(),
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
      css: this.css()
    }
  });
  usefulLinksList: UsefulLinksList = [
    {
      text: 'Disponibilidade do elemento (Can I Use)',
      link: 'https://caniuse.com/dialog'
    },
    {
      text: 'Documentação oficial do elemento (MDN)',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog'
    },
    {
      text: 'Video-aula sobre dialogs por Kevin Powell (Youtube)',
      link: 'https://www.youtube.com/watch?v=TAB_v6yBXIE&ab_channel=KevinPowell'
    },
    {
      text: 'Artigos sobre o elemento dialog (CSS Tricks)',
      link: 'https://css-tricks.com/tag/dialog/'
    },
    {
      text: 'Documentação oficial sobre @starting-style (MDN)',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@starting-style'
    },
    {
      text: 'Artigo sobre @starting-style por Juan Diego Rodríguez (CSS Tricks)',
      link: 'https://css-tricks.com/almanac/rules/s/starting-style/'
    },
  ];
}
