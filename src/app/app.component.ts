import { Component, Input } from '@angular/core';

@Component({
  selector: 'emastered-root',
  template: `<div>
              <div>RUNNING STRONG</div>
              <emastered-fileload title="testing"></emastered-fileload>
            </div>`,
  styles: ['']
})
export class AppComponent {
  @Input() title = 'something';

  constructor() {}
}
