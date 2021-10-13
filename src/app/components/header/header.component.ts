import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FilterService } from 'src/app/modules/address-book/state/filter.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  subscriptions: Subscription = new Subscription();
  searchControl = new FormControl();

  constructor(private filterService: FilterService) { }

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
