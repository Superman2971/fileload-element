import { Component, Input } from '@angular/core';

@Component({
  selector: 'emastered-fileload',
  templateUrl: './fileload.component.html',
  styleUrls: ['./fileload.component.scss']
})
export class FileloadComponent {
  @Input() title = 'something';
  fileLoadPercentage: number;

  constructor() {}

  private dropped(evt) {
    console.log('drop event', evt);
    this.apiResponse();
  }

  private fileLeave(evt) {
    console.log('leave event', evt);
    this.apiResponse();
  }

  private fileOver(evt) {
    console.log('over event', evt);
    this.apiResponse();
  }

  private fileInput(evt) {
    console.log('input event', evt);
    this.apiResponse();
  }

  private apiResponse() {
    setTimeout(() => {
      this.fileLoadPercentage = 1;
    }, 2000);
  }
}
