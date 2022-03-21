import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingCompletedPageRoutingModule } from './booking-completed-routing.module';

import { BookingCompletedPage } from './booking-completed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingCompletedPageRoutingModule
  ],
  declarations: [BookingCompletedPage]
})
export class BookingCompletedPageModule {}
