import { NvProgressCircleComponent } from './../components/nv-progress-circle/nv-progress-circle.component';
import { NvComponent } from './../models/data-models/nv-component';
import { NvComponentType as NvComponentType } from '../models/data-models/nv-component';
import { NvColor } from '../models/view-models/nv-color';
import { Assignee } from './../../app/models/data/assignee';
import { ButtonThemeColor } from './../components/nv-button/button-theme-color';
import { ButtonType } from './../components/nv-button/button-type';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.scss']
})
export class DemoPageComponent implements OnInit {

  public selectedItem: NvComponentType = NvComponentType.ItemPicker;
  public nvComponentType = NvComponentType;
  // ProgressCircle
  public progress1: number = mockProgressCircle().nvProgressCircle01.progress1;
  public progress2: number = mockProgressCircle().nvProgressCircle01.progress2;
  public radius: number = mockProgressCircle().nvProgressCircle01.radius;
  public progress02_1: number = mockProgressCircle().nvProgressCircle02.progress1;
  public progress02_2: number = mockProgressCircle().nvProgressCircle02.progress2;
  public radius02: number = mockProgressCircle().nvProgressCircle02.radius;
  // Button
  public label: string = mockButtonComponent().label;
  public type: ButtonType = mockButtonComponent().type;
  public color: ButtonThemeColor = mockButtonComponent().color;
  public type1: ButtonType = mockButtonComponent().type1;
  public color1: ButtonThemeColor = mockButtonComponent().color1;
  public type2: ButtonType = mockButtonComponent().type2;
  public color2: ButtonThemeColor = mockButtonComponent().color2;
  // Avatar
  public assignee: Assignee = mockAvatarComponent().assignee01;
  public assignee02: Assignee = mockAvatarComponent().assignee02;

  // Tag
  public tagColor: NvColor = mockNvTagComponent().color;
  public text: string = mockNvTagComponent().text;

  // ItemPicker
  public itemList: string[] = mockItemPickerComponent().itemList;
  public itemList02: Assignee[] = mockItemPickerComponent().itemList02;
  public defaultValueType = mockItemPickerComponent().defaultValueType;

  // NvComponent
  public nvAvatar: NvComponent = mockNvComponent().nvAvatar;
  public nvButton: NvComponent = mockNvComponent().nvButton;
  public nvProgressCircle: NvComponent = mockNvComponent().nvProgressCircle;
  public nvTag: NvComponent = mockNvComponent().nvTag;
  public nvItemPicker: NvComponent = mockNvComponent().nvItemPicker;


  constructor() {
    console.log(this.nvAvatar.description);
     }

  ngOnInit(): void {
  }

  public onItemClick(selectedItem: NvComponentType): void {
    this.selectedItem = selectedItem;
  }

}

function mockProgressCircle() {
  const nvProgressCircles = {
  nvProgressCircle01 : {
  progress1: 0.5,
  progress2: 0.3,
  radius: 48
},
  nvProgressCircle02 : {
    progress1: 0.8,
    progress2: 0.2,
    radius: 32},
    }

  return nvProgressCircles;
}

function mockButtonComponent() {
  const nvButton = {
    label: 'Select',
    type: ButtonType.Basic,
    color: ButtonThemeColor.Basic,
    type1: ButtonType.Raised,
    color1: ButtonThemeColor.Primary,
    type2: ButtonType.Stroked,
    color2: ButtonThemeColor.Accent
  }
  return nvButton;
}

function mockAvatarComponent() {
  const assignees = {
  assignee01: new Assignee( 1, 'Sina pasha', '' ),
  assignee02: new Assignee(1, 'Sina pasha', 'https://www.nretnil.com/avatar/LawrenceEzekielAmos.png' )
  } ;
  return assignees;
}
function mockItemPickerComponent() {
const itemPickerProps = {
  itemList : ['apple', 'orange', 'banana'],
  itemList02: [ new Assignee(1, 'Sina pasha', 'https://www.nretnil.com/avatar/LawrenceEzekielAmos.png'),
  new Assignee(2, 'Sina Pasha', '')],
  defaultValueType : 'Number',
}
return itemPickerProps;
}

function mockNvTagComponent() {
  const nvTagProps = {
    text: 'Novatek Inc. at Cote saint luc ',
    color: NvColor.Color01
  };
  return nvTagProps;
}

function mockTableComponent() { }

function mockNvComponent() {
  const nvComponents = {
    nvAvatar: new NvComponent( 1, NvComponentType.Avatar, 'An avatar is a visual representation of a user or entity.'),
    nvButton: new NvComponent( 2, NvComponentType.Button, 'A button triggers an event or action. They let users know what will happen next.'),
    nvProgressCircle: new NvComponent( 3, NvComponentType.ProgressCircle, 'A progress indicator shows the progress of user when they are along the steps of a journey.'),
    nvTag: new NvComponent( 4, NvComponentType.Tag, 'A tag labels UI objects for quick recognition and navigation.'),
    nvItemPicker: new NvComponent( 5, NvComponentType.ItemPicker, 'A itemPicker select an item from a list of items.'),
  };
  return nvComponents;
}
