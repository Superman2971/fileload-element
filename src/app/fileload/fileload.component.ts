import { Component, Input } from '@angular/core';

@Component({
  selector: 'emastered-fileload',
  templateUrl: './fileload.component.html',
  styleUrls: ['./fileload.component.scss']
})
export class FileloadComponent {
  @Input() title = 'something';

  constructor() {}

  private dropped(evt) {
    console.log('drop event', evt);
  }

  private fileLeave(evt) {
    console.log('leave event', evt);
  }

  private fileOver(evt) {
    console.log('over event', evt);
  }
}
