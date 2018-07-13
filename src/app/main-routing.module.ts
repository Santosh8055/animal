import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CattleManagementComponent } from './cattle-management/cattle-management.component';
import { FarmerManagementComponent } from './farmer-management/farmer-management.component';
import { InsureManagementComponent } from './insure-management/insure-management.component';
import { StaffManagementComponent } from './staff-management/staff-management.component';
import { ViewInsureManagementComponent } from './view-insure-management/view-insure-management.component';
import { RfidComponent } from './rfid/rfid.component';
import { SaveHealthComponent } from './save-health/save-health.component';

const routes: Routes = [
  { path: '', redirectTo: '/cattle', pathMatch: 'full' },
  { path: 'cattle', component: CattleManagementComponent, pathMatch: 'full' },
  { path: 'farmer', component: FarmerManagementComponent, pathMatch: 'full' },
  { path: 'insure', component: InsureManagementComponent, pathMatch: 'full' },
  { path: 'staff', component: StaffManagementComponent, pathMatch: 'full' },
  { path: 'viewinsurence', component: ViewInsureManagementComponent, pathMatch: 'full' },
  { path: 'rfid', component: RfidComponent, pathMatch: 'full' },
  { path: 'savehealth', component: SaveHealthComponent, pathMatch: 'full' }



];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class MainRoutingModule { }