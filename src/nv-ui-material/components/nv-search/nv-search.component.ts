import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nv-search',
  templateUrl: './nv-search.component.html',
  styleUrls: ['./nv-search.component.scss']
})
export class NvSearchComponent implements OnInit {

  @Output() search = new EventEmitter<string[]>();
  @Input() public set suggestions(value: string[]) {
    this._suggestions = value;
    this.hiddenDropDown = false;
  }
  public get suggestions(): string[] {
    return this._suggestions;
  }
  private _suggestions!: string[];
  public keyUpValue = '';
  public onBeforeInputValue = '';
  public onInputValue = '';
  public hiddenDropDown = true;
  public selectedItem!: string;
  public selectedIndex!: number;
  public eventCounter = 0;

  public input!: string;

  constructor() {}

  ngOnInit(): void {}
  onInputClick(): void {}
  onKeyDown(event: any): void {
    // console.log('onKeyDown' + e1.key);
    // e1.preventDefault();
    if (!this.hiddenDropDown) {
      if (event.key === 'Escape') {
        console.log('Escape');
        this.toggleListDisplay(0);
      } else if (event.key === 'Enter') {
        console.log('Enter');
        this.onItemSelect(this.selectedIndex);
        this.toggleListDisplay(0);
        console.log('this.selectedItem:' + this.selectedItem);
      } else if (event.key === 'Delete') {
        console.log('Delete');
      } else if (event.key === 'Tab') {
        console.log('Tab');
      } else if (event.key === 'ArrowDown') {
        console.log('ArrowDown');
        this.toggleListDisplay(1);
        this.eventCounter++;
        if (this.eventCounter === 1) {
          this.onItemSelect(0);
        } else {
          this.selectedIndex =
            (this.selectedIndex + 1) % this.suggestions.length;
          // if (!this.hiddenDropDown && this.suggestions.length > 0) {
          //   document.getElementById('content')[this.selectedIndex].scrollIntoView();
          // }
        }
      } else if (event.key === 'ArrowUp') {
        console.log('ArrowUp');
        this.toggleListDisplay(1);
        if (this.selectedIndex <= 0) {
          this.selectedIndex = this.suggestions.length;
        }
        this.selectedIndex = (this.selectedIndex - 1) % this.suggestions.length;
        // if (this.suggestions.length > 0 && !this.hiddenDropDown) {
        //   document.getElementById('content')[this.selectedIndex].scrollIntoView();
        // }
      }
    }
  }

  onBeforeInput(event: any): void {
    // console.log('onBeforeInput' + e.key);
    this.onBeforeInputValue = event.target.value;
  }

  onInput(event: any): void {
    this.search.emit(event.target.value);
    this.onInputValue = event.target.value;
    this.hiddenDropDown = false;
  }

  onDropDownMouseDown(event: any): void {
    event.preventDefault();
  }

  onItemSelect(index: number): void {
    console.log(index);

    this.selectedIndex = index;
    this.selectedItem = this.suggestions[this.selectedIndex];
    this.hiddenDropDown = true;
    console.log('this.selectedItem:' + this.selectedItem);
  }

  toggleListDisplay(sender: number): void {
    if (sender === 1) {
      this.hiddenDropDown = false;
    } else {
      this.hiddenDropDown = true;
    }
  }
}
