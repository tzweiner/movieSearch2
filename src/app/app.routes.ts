import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {StubComponent} from "./stub/stub.component";

export const routes: Routes = [
  { path: '**', redirectTo: 'search' },
  { path: 'search', component: StubComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
