import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ServicesModule } from '@omx-tools/services';




@Component({
  selector: 'omx-tools-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  private fb = inject(FormBuilder);
  editdata:any;
  constructor(private service: ServicesModule)
  {

  }

  searchForm = this.fb.group({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });



  onSubmit() {
    this.service.orderSearch(this.searchForm.value).subscribe(res => {
      this.editdata = res;
    });
  }
}
