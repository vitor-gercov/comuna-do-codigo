import { NgClass } from '@angular/common';
import { Component, computed, inject, input, OnInit, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CodeProvider } from '@types';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-code-provider',
  imports: [
    MatTabsModule,
    NgClass
  ],
  templateUrl: './code-provider.component.html',
  styleUrl: './code-provider.component.scss'
})
export class CodeProviderComponent implements OnInit {
  code = input.required<CodeProvider>();
  html = computed(() => this.code()?.html);
  css = computed(() => this.code()?.css);
  js = computed(() => this.code()?.js);
  selectedTab = signal<'html' | 'css' | 'js' | undefined>(undefined);
  tabContent = computed(() => {
    switch (this.selectedTab()) {
      case 'html':
        return this.html();
      case 'css':
        return this.css();
      case 'js':
        return this.js();
      default:
        return undefined;
    }
  });

  private clipboard: Clipboard = inject(Clipboard);

  ngOnInit(): void {
    this.validateComponentInput();
    this.setSelectedTab();
  }

  copyCodeToClipboard(): void {
    const code = this.tabContent();
    if (code) {
      this.clipboard.copy(code);
      window.alert(`${this.selectedTab()?.toUpperCase()} copiado.`);
    }
  }

  private validateComponentInput(): void {
    if (!this.html() && !this.css() && !this.js()) {
      console.error('code property not informed');
    }
  }

  private setSelectedTab(): void {
    const selectedTab: 'html' | 'css' | 'js' | undefined =
      this.html()
        ? 'html'
        : this.css()
          ? 'css'
          : this.js()
            ? 'js' : undefined;
    this.selectedTab.set(selectedTab)
  }
}
