import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [CommonModule],
})
export class ServicesModule {
  constructor(private http: HttpClient) { }

  orderSearch(data:any){
    console.log(data)
    return this.http.post("http://localhost:8080/omx/post",data);
  }
}
