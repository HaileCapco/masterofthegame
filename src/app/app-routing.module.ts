import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CopcoTableComponent} from './capcoComponents/copco-table/copco-table.component';


const routes: Routes = [
{path: '', component: CopcoTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
