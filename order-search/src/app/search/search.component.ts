import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';




@Component({
  selector: 'omx-tools-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  private fb = inject(FormBuilder);
  searchForm = this.fb.group({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  onSubmit(): void {
    alert('Thanks!');
  }
}
