import { Input } from '@angular/core';
import { FormControl } from '@angular/forms';

/** Базовый класс для контролов */
export abstract class ControlBase {
  /** Имя контрола */
  @Input() control: FormControl;
  /** Id контрола */
  @Input() controlId: string;
  /** Плэйсхолдер */
  @Input() placeholder: string = '';
  /** Лэйбл */
  @Input() label: string;

  constructor() {}

  /** Проверка контрола на валидность */
  public isControlInvalidAndTouched(): boolean {
    const result = this.control.invalid && this.control.touched;

    return result;
  }
}
