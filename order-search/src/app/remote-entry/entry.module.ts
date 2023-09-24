import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import { MaterialModule } from '@omx-tools/material';
import { SearchComponent } from '../search/search.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf, JsonPipe} from '@angular/common';

@NgModule({
  declarations: [RemoteEntryComponent, SearchComponent],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes),
    MaterialModule,ReactiveFormsModule,FormsModule,NgIf,JsonPipe],
  providers: [],
})
export class RemoteEntryModule {}
