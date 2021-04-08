import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Category } from '../common/category';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatgeoryService {
  private categoryURl="http://localhost:8084";
  constructor(private httpClient :HttpClient) { }
  getCategoryList():Observable<Category[]>{
    return this.httpClient.get<Category[]>(`${this.categoryURl}/api/categories`);
       }
    }
