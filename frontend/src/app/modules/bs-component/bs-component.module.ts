import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageHeaderModule } from '../../shared';

import { BsComponentRoutingModule } from './bs-component-routing.module';
import { BsComponentComponent } from './bs-component.component';
import {
    AlertComponent,
    ButtonsComponent,
    CollapseComponent,
    DatePickerComponent,
    DropdownComponent,
    ModalComponent,
    PaginationComponent,
    PopOverComponent,
    ProgressbarComponent,
    RatingComponent,
    TabsComponent,
    TimepickerComponent,
    TooltipComponent
} from './components';

@NgModule({
    imports: [CommonModule, BsComponentRoutingModule, FormsModule, ReactiveFormsModule, PageHeaderModule],
    declarations: [
        BsComponentComponent,
        ButtonsComponent,
        AlertComponent,
        CollapseComponent,
        DatePickerComponent,
        DropdownComponent,
        ModalComponent,
        PaginationComponent,
        PopOverComponent,
        ProgressbarComponent,
        TabsComponent,
        RatingComponent,
        TooltipComponent,
        TimepickerComponent
    ]
})
export class BsComponentModule {}
