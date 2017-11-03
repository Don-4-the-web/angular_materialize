import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { routing } from './app.routing';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { Nav1Component } from './siteComponents/nav-1/nav-1.component';
import { Nav2Component } from './siteComponents/nav-2/nav-2.component';
import { BasicCardComponent } from './siteComponents/basic-card/basic-card.component';
import { FooterOneComponent } from './siteComponents/footer-one/footer-one.component';
import { PageOneComponent } from './sitePages/page-one/page-one.component';
import { PageTwoComponent } from './sitePages/page-two/page-two.component';
import { PageThreeComponent } from './sitePages/page-three/page-three.component';
import { PageFourComponent } from './sitePages/page-four/page-four.component';
import { PageFiveComponent } from './sitePages/page-five/page-five.component';
import { PageSixComponent } from './sitePages/page-six/page-six.component';
import { PageSevenComponent } from './sitePages/page-seven/page-seven.component';
import { CarouselOneComponent } from './siteComponents/carousel-one/carousel-one.component';
import { CarouselTwoComponent } from './siteComponents/carousel-two/carousel-two.component';
import { CarouselThreeComponent } from './siteComponents/carousel-three/carousel-three.component';
import { CollapsibleOneComponent } from './siteComponents/collapsible-one/collapsible-one.component';
import { DropdownOneComponent } from './siteComponents/dropdown-one/dropdown-one.component';
import { MaterialboxOneComponent } from './siteComponents/materialbox-one/materialbox-one.component';
import { MaterialboxTwoComponent } from './siteComponents/materialbox-two/materialbox-two.component';
import { ModalOneComponent } from './siteComponents/modal-one/modal-one.component';
import { ParallaxOneComponent } from './siteComponents/parallax-one/parallax-one.component';
import { TabsOneComponent } from './siteComponents/tabs-one/tabs-one.component';
import { TabsTwoComponent } from './siteComponents/tabs-two/tabs-two.component';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FireDataService} from './services/fire-data.service';
import { ShoppingListComponent } from './siteComponents/shopping-list/shopping-list.component';
import { MydohcEmployeesService } from './services/mydohc-employees.service';
import { MyDohcEmployeesComponent } from './siteComponents/my-dohc-employees/my-dohc-employees.component';
import { DirectoryComponent } from './siteComponents/directory/directory.component';


import { InputEmployeeComponent } from './siteComponents/input-employee/input-employee.component';
import { MydohcFormComponent } from './siteComponents/mydohc-form/mydohc-form.component';
import { RolodexComponent } from './siteComponents/rolodex/rolodex.component';


export const firebaseConfig = {
  apiKey: "AIzaSyB4ry3WykdwmZpYqPM434oc9MFE_NIMdnk",
  authDomain: "firestarterdev-959ae.firebaseapp.com",
  databaseURL: "https://firestarterdev-959ae.firebaseio.com",
  storageBucket: "firestarterdev-959ae.appspot.com",
  messagingSenderId: '840709614286'
};
export const myDohcConfig = {
  apiKey: "AIzaSyA9P405fWugysE-QszrmimFoS_IV-xLCH8",
  authDomain: "mydohc-employees.firebaseapp.com",
  databaseURL: "https://mydohc-employees.firebaseio.com",
  storageBucket: "mydohc-employees.appspot.com",
  messagingSenderId: '689049921849'
};






@NgModule({
  declarations: [
    AppComponent,
    Nav1Component,
    Nav2Component,
    BasicCardComponent,
    FooterOneComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    PageFourComponent,
    PageFiveComponent,
    PageSixComponent,
    PageSevenComponent,
    CarouselOneComponent,
    CarouselTwoComponent,
    CarouselThreeComponent,
    CollapsibleOneComponent,
    DropdownOneComponent,
    MaterialboxOneComponent,
    MaterialboxTwoComponent,
    ModalOneComponent,
    ParallaxOneComponent,
    TabsOneComponent,
    TabsTwoComponent,
    ShoppingListComponent,
    MyDohcEmployeesComponent,
    DirectoryComponent,
    InputEmployeeComponent,
    MydohcFormComponent,
    RolodexComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireModule.initializeApp(myDohcConfig),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    routing
  ],
  providers: [
    MydohcEmployeesService,
    FireDataService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
