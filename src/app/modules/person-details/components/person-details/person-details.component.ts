import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
