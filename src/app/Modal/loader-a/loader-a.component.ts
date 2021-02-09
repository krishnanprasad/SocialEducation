import { Component, ElementRef, Input, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { LoaderAService } from './loader-a.service';

@Component({
  selector: 'app-loader-a',
  templateUrl: './loader-a.component.html',
  styleUrls: ['./loader-a.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoaderAComponent implements OnInit, OnDestroy {
  //@Input() id: string;
  private element: any;
  constructor(private loaderService: LoaderAService, private el: ElementRef) {
    this.element = el.nativeElement;
  }
  ngOnInit(): void {
    let loader = this;
  //  debugger
    // ensure id attribute exists
    // if (!this.id) {
    //   console.error('loader must have an id');
    //   return;
    //  }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close loader on background click
    this.element.addEventListener('click', function (e: any) {
     // debugger
      if (e.target.className === 'loader-a') {       
        loader.close();
      }
    });

    // add self (this loader instance) to the loader service so it's accessible from controllers
    this.loaderService.add(this);
  }

  // remove self from loader service when directive is destroyed
  ngOnDestroy(): void {
    //this.loaderService.remove(this.id);
    this.loaderService.remove();
    this.element.remove();
  }

  // open loader
  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('loader-a-open');
  }

  // close loader
  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('loader-a-open');
  }

}
