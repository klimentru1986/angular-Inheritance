import { Component } from '@angular/core';
import { ControlBase } from '../../base/control/control-base.component';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css', '../../base/control/control-base.component.css']
})
export class CheckboxComponent extends ControlBase {
  constructor() {
    super();
  }
}
