import { Component, OnInit } from '@angular/core';
import { CountryService } from './shared/county.service';
import { Country } from './shared/country';
import { Observable, Subject } from 'rxjs';
import { tap, switchMap, debounceTime } from "rxjs/operators";
import { distinctUntilChanged } from "rxjs/operators";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'MyShop';
  loading: boolean = false;
  countries$: Observable<Country[]> | undefined;
  private searchTerms = new Subject<string>();

  totalCount = 0;

  data1 = [{
    name : 'Jose Chavarria',
    dept : 'Software Engineer'
  }];

  calCount(count: any){
    this.totalCount = this.totalCount + count;
  }
  constructor(private countryService: CountryService) { }

  search(term: string) {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.countries$ = this.searchTerms.pipe(
      tap(_ => this.loading = true),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.countryService.searchCountry(term)),
      tap(_ => this.loading = false)
    )
  }

}
