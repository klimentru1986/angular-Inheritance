import { Component, Input } from '@angular/core';
import { ControlBase } from '../../base/control/control.base';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['../../base/control/control.base.css', './input.component.css']
})
export class InputComponent extends ControlBase {
  constructor() {
    super();
  }
}
