import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flight-workspace/luggage/domain';
import { ReportLossComponent } from './report-loss.component';
// import { LuggageFeatureCheckinModule } from 'libs/luggage/feature-checkin/src';
// import { FlightLibModule } from '@flight-workspace/flight-lib';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, LuggageDomainModule, 
    // LuggageFeatureCheckinModule, FlightLibModule 
    RouterModule.forChild([{ path: '', component: ReportLossComponent }]),
  ],
  declarations: [ReportLossComponent],
  exports: [ReportLossComponent],
})
export class LuggageFeatureReportLossModule {}
