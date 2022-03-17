import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Luggage } from '@flight-workspace/luggage/api';

@NgModule({
  imports: [CommonModule],
})
export class BoardingFeatureModule {}

const luggage: Luggage = { id: 1, name: 'adsf', description: 'blabla' };
