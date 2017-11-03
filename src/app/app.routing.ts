import { RouterModule , Routes} from '@angular/router';


import { PageOneComponent } from './sitePages/page-one/page-one.component';
import { PageTwoComponent } from './sitePages/page-two/page-two.component';
import { PageThreeComponent } from './sitePages/page-three/page-three.component';
import { PageFourComponent } from './sitePages/page-four/page-four.component';
import { PageFiveComponent } from './sitePages/page-five/page-five.component';
import { PageSixComponent } from './sitePages/page-six/page-six.component';
import { PageSevenComponent } from './sitePages/page-seven/page-seven.component';

const appRoutes: Routes = [
	{ path: '', component: PageOneComponent },
	{ path: 'page_2', component: PageTwoComponent },
	{ path: 'page_3', component: PageThreeComponent },
	{ path: 'page_4', component: PageFourComponent },
	{ path: 'page_5', component: PageFiveComponent },
	{ path: 'page_6', component: PageSixComponent },
	{ path: 'page_7', component: PageSevenComponent },
];

export const routing = RouterModule.forRoot(appRoutes);