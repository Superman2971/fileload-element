// FOR TESTING
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FileloadComponent } from './fileload/fileload.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    FileloadComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// FOR BUILDING
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule, Injector } from '@angular/core';
// import { createCustomElement } from '@angular/elements';
// import { FileloadComponent } from './fileload/fileload.component';

// @NgModule({
//   imports: [BrowserModule],
//   declarations: [FileloadComponent],
//   entryComponents: [FileloadComponent]
// })
// export class AppModule {
//   constructor(private injector: Injector) {
//     const component = createCustomElement(FileloadComponent, { injector });
//     customElements.define('emastered-fileload', component);
//   }

//   ngDoBootstrap() {}
// }
