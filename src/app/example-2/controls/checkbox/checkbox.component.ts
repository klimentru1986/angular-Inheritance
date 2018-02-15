import { Component } from '@angular/core';
import { ControlBase } from '../../base/control/control.base';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['../../base/control/control.base.css', './checkbox.component.css']
})
export class CheckboxComponent extends ControlBase {
  constructor() {
    super();
  }
}
