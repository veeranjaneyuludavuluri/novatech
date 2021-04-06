import { Assignee } from './../../../app/models/data/assignee';
import { Component, Input, OnInit } from '@angular/core';

type ItemType = string | number | Assignee;


@Component({
  selector: 'app-nv-item-picker',
  templateUrl: './nv-item-picker.component.html',
  styleUrls: ['./nv-item-picker.component.scss']
})
export class NvItemPickerComponent implements OnInit {
  @Input() public defaultValueType: string;

  @Input() public set itemList(value: ItemType[]) {
    value.forEach(
      item => {
        if ((item as Assignee).id) {
          this.hasAvatar =  true ;
          console.log('hi assignee this.hasAvatar' + this.hasAvatar );
          this._itemList.push((item  as Assignee));
          console.log(this._itemList);
        } else {
          console.log('not assignee');
          this._itemList.push(item);
          console.log(this._itemList);
        }
      });
  }



  private _itemList: ItemType[] = [];
  public get itemList(): ItemType[] {
    return this._itemList;
  }
  public hasAvatar = false;
  public avatarUrl: string;
  constructor() {
  }

  ngOnInit(): void {
  }

  onChange(value: any): void {
  }

}
