import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { of, Subscription } from 'rxjs';
import { filter, switchMap, tap } from 'rxjs/operators';
import { FilterService } from 'src/app/modules/address-book/state/filter.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  subscriptions: Subscription = new Subscription();
  searchControl = new FormControl();
  showSearch$ = this.router.events.pipe(
    filter(events => events instanceof NavigationEnd),
    switchMap((events) => of((events as NavigationEnd).url === '/address-book'))
  )

  constructor(private filterService: FilterService, private router: Router) { }

  ngOnInit(): void {    
    this.subscriptions.add(
      this.searchControl.valueChanges.pipe(
        tap((value) => {
          console.log(value)
          this.filterService.updateFilter(value);
        })
      ).subscribe()
    )
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
