import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesModule } from '@omx-tools/services';



@Component({
  selector: 'omx-tools-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  private fb = inject(FormBuilder);
  orderData:any;

  public dataSource = new MatTableDataSource<any>([]);
  displayedColumns = ["monthYear", "result"];
  displayedColumns2=['service','count']
  displayedColumns3=['result']

  constructor(private service: ServicesModule)
  {

  }

  searchForm = this.fb.group({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });



  onSubmit() {
    this.service.orderSearch(this.searchForm.value).subscribe(res => {
      this.orderData = res;
      this.dataSource = this.orderData;
    });
  }

  getdata(data: any[])
  {
    console.log(data)
    return new MatTableDataSource<any>(data);
  }
}
