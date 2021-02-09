import { Component, OnInit, Input, EventEmitter, Output, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dropdown-a',
  templateUrl: './dropdown-a.component.html',
  styleUrls: ['./dropdown-a.component.css']
})
export class DropdownAComponent implements OnInit {
  @Input('values') values;
  @Output() selectedvalue = new EventEmitter();
  IsShow: boolean = false;
  Selected: string;
  dropdown1width: number;
  @ViewChild('tableToMeasure') tableToMeasure: ElementRef;
  @ViewChild('dropdownvalues') dropdownvalues: ElementRef;
  childwidth: number;
  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      var a =e.target;
     if(this.dropdownvalues!=undefined)
      /**
       * Only run when toggleButton is not clicked
       * If we don't check this, all clicks (even on the toggle button) gets into this
       * section which in the result we might never see the menu open!
       * And the menu itself is checked here, and it's where we check just outside of
       * the menu and button the condition abbove must close the menu
       */
      if(!this.tableToMeasure["nativeElement"].contains(e.target) && !this.dropdownvalues["nativeElement"].contains(e.target)) {
      
        this.IsShow = false;
      }
    });
  }



  ngOnInit() {
    this.Selected = this.values[0]["detail"];
    this.childwidth = (this.tableToMeasure["nativeElement"]["clientWidth"]);


  }
  toggle() {
    this.IsShow = !this.IsShow;
  }
  Select(val) {
    this.Selected = val.detail;
    this.selectedvalue.emit(val);
    this.toggle();

  }
}
