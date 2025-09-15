import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { ComunaMainButtonDirective, ComunaOutlineButtonDirective } from "@directives";

@Component({
  selector: 'app-home',
  imports: [
    MatCardModule,
    RouterLink,
    ComunaOutlineButtonDirective
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}