import { Component, ElementRef, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-section-container',
  templateUrl: './section-container.component.html',
  styleUrls: ['./section-container.component.scss']
})
export class SectionContainerComponent implements OnInit {

  @Input() title = '';

  @Output()
  partialVisible: EventEmitter<boolean> = new EventEmitter();

  @Output()
  fullVisible: EventEmitter<boolean> = new EventEmitter();

  // tslint:disable-next-line:variable-name
  private _show = false;
  @HostBinding('class.show')
  get show(): boolean {
    return this._show;
  }


  constructor(private elementRef: ElementRef) {
    // pick first completely visible, if none then pick second partial visible!
    const partialObserver = new IntersectionObserver((entries) => {
      const isVisible = entries[0].isIntersecting;
      this.partialVisible.emit(isVisible);
      this._show = isVisible;
    }, { threshold: 0 });

    partialObserver.observe(elementRef.nativeElement);

    const fullObserver = new IntersectionObserver((entries) => {
      const isVisible = entries[0].isIntersecting;
      this.fullVisible.emit(isVisible);
    }, { threshold: 1 });

    fullObserver.observe(elementRef.nativeElement);
  }

  ngOnInit(): void {
  }

}
