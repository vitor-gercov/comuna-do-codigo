import { Component, computed, Input, input, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CodeProvider } from '@types';

@Component({
  selector: 'app-code-provider',
  imports: [
    MatTabsModule
  ],
  templateUrl: './code-provider.component.html',
  styleUrl: './code-provider.component.scss'
})
export class CodeProviderComponent implements OnInit {
  code = input<CodeProvider>();
  html = computed(() => this.code()?.html);
  css = computed(() => this.code()?.css);
  js = computed(() => this.code()?.js);

  ngOnInit(): void {
    if (!this.html() && !this.css() && !this.js()) {
      console.error('code property not informed');
    }
  }
}
