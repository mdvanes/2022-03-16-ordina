import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flight-workspace/luggage/domain';
import { LuggageUiCardModule } from '@flight-workspace/luggage/ui-card';
import { CheckinComponent } from './checkin.component';
import { LoggerModule } from '@flight-workspace/logger-lib';

@NgModule({
  imports: [
    CommonModule,
    LuggageDomainModule,
    LuggageUiCardModule,
    LoggerModule,
  ],
  declarations: [CheckinComponent],
  exports: [CheckinComponent],
})
export class LuggageFeatureCheckinModule {}

// asdf
