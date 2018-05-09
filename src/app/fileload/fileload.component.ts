import { Component, Input } from '@angular/core';

@Component({
  selector: 'emastered-fileload',
  templateUrl: './fileload.component.html',
  styleUrls: ['./fileload.component.scss']
})
export class FileloadComponent {
  @Input() title = 'something';

  constructor() {}
}
