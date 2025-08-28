import { Component, input, OnInit } from '@angular/core';
import { UsefulLinksList } from '@types';

@Component({
  selector: 'app-useful-links-list',
  imports: [],
  templateUrl: './useful-links-list.component.html',
  styleUrl: './useful-links-list.component.scss'
})
export class UsefulLinksListComponent implements OnInit {
  usefulLinksList = input.required<UsefulLinksList>();

  ngOnInit(): void {
    this.validateComponentInput();
  }

  private validateComponentInput(): void {
    if (this.usefulLinksList().length === 0) {
      console.error('Useful links list is empty');
    }
  }
}
