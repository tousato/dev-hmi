import { Component, Input } from '@angular/core';

@Component({
  selector: 'hero-child',
  template: `
    <p> {{masterName}}.</p>
  `
})
export class HeroChildComponent {
  @Input('master') masterName: string;
}
