import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-card',
  templateUrl: './timeline-card.component.html',
  styleUrls: ['./timeline-card.component.scss']
})
export class TimelineCardComponent implements OnInit {

  @Input()
  title = '';

  @Input()
  timeRange = '';

  @Input()
  institueName = '';

  @Input()
  instituteIconClass = '';

  @Input()
  location = '';


  constructor() { }

  @HostBinding('class.employer')
  get isEmployer(): boolean {
    return !!this.instituteIconClass;
  }

  ngOnInit(): void {
  }

}
