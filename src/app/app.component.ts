import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { ScrollspyNavLayoutComponent } from "./scrollspy-nav-layout/scrollspy-nav-layout.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [CommonModule,RouterOutlet, MarkdownModule, ScrollspyNavLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sampleMDS';
  headings: Element[] | undefined;

  constructor(
    private elementRef: ElementRef<HTMLElement>
  ) { }

  ngOnInit(): void {
    this.setHeadings();
  }

  private setHeadings(): void {
    const headings: Element[] = [];
    this.elementRef.nativeElement
      .querySelectorAll('h2')
      .forEach(x => headings.push(x));
    this.headings = headings;
  }

}
