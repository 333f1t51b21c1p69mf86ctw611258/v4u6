import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { VhubwebSharedModule } from '../../shared';
import {
    TodoService,
    TodoPopupService,
    TodoComponent,
    TodoDetailComponent,
    TodoDialogComponent,
    TodoPopupComponent,
    TodoDeletePopupComponent,
    TodoDeleteDialogComponent,
    todoRoute,
    todoPopupRoute,
} from './';

const ENTITY_STATES = [
    ...todoRoute,
    ...todoPopupRoute,
];

@NgModule({
    imports: [
        VhubwebSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        TodoComponent,
        TodoDetailComponent,
        TodoDialogComponent,
        TodoDeleteDialogComponent,
        TodoPopupComponent,
        TodoDeletePopupComponent,
    ],
    entryComponents: [
        TodoComponent,
        TodoDialogComponent,
        TodoPopupComponent,
        TodoDeleteDialogComponent,
        TodoDeletePopupComponent,
    ],
    providers: [
        TodoService,
        TodoPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VhubwebTodoModule {}
