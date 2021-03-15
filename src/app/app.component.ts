import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { SectionContainerComponent } from './components/section-container/section-container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'home';

  @ViewChild('scrollingContainer', { read: ElementRef, static: true })
  scrollContainer?: ElementRef;

  @ViewChildren(SectionContainerComponent, { read: ElementRef })
  sectionContainers?: QueryList<ElementRef>;

  components: { component: string, partialVisible: boolean, fullVisible: boolean }[] = [];

  activeComponent = '';

  constructor() {
    this.components.push(
      {
        component: 'about',
        partialVisible: false,
        fullVisible: false
      },
      {
        component: 'resume',
        partialVisible: false,
        fullVisible: false
      },
      // {
      //   component: 'work',
      //   partialVisible: false,
      //   fullVisible: false
      // },
      {
        component: 'npm',
        partialVisible: false,
        fullVisible: false
      },
      {
        component: 'articles',
        partialVisible: false,
        fullVisible: false
      },
      {
        component: 'projects',
        partialVisible: false,
        fullVisible: false
      },
    );

  }

  ngOnInit(): void {
    fromEvent(this.scrollContainer?.nativeElement, 'scroll').
      pipe(
        debounceTime(100)
      ).
      subscribe(e => {
        this.onWindowScroll();
      });

  }

  ngAfterViewInit(): void {
    this.onWindowScroll();
  }

  visibilityToggle(component: string, type: 'partial' | 'full', visibility: boolean): void {
    const comp = this.components.find(c => c.component === component);
    if (comp) {
      if (type === 'partial') {
        comp.partialVisible = visibility;
      }
      if (type === 'full') {
        comp.fullVisible = visibility;
      }
    }

    this.onWindowScroll();
  }


  scrollTo(id: string): void {
    if (this.sectionContainers) {
      const comp = this.sectionContainers.find(elem => elem.nativeElement.id === id);
      if (comp) {
        (comp.nativeElement as HTMLElement).scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {

    const fullVisibile = this.components.find(c => c.fullVisible);
    if (fullVisibile) {
      this.activeComponent = fullVisibile.component;
    } else {
      const partialVisible = this.components.filter(c => c.partialVisible);
      if (partialVisible.length >= 2) {
        // console.log(`Visible component is ${partialVisible[1].component}`);
        this.activeComponent = partialVisible[1].component;
      } else if (partialVisible.length >= 1) {
        // console.log(`Visible component is ${partialVisible[0].component}`);
        this.activeComponent = partialVisible[0].component;
      } else {
        // console.log(`No Change in visibility`);
      }

    }

  }

}
