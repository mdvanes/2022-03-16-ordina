import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flight-workspace/luggage/domain';
import { ReportLossComponent } from './report-loss.component';
// import { LuggageFeatureCheckinModule } from 'libs/luggage/feature-checkin/src';
// import { FlightLibModule } from '@flight-workspace/flight-lib';

@NgModule({
  imports: [CommonModule, LuggageDomainModule, 
    // LuggageFeatureCheckinModule, FlightLibModule 
  ],
  declarations: [ReportLossComponent],
  exports: [ReportLossComponent],
})
export class LuggageFeatureReportLossModule {}
