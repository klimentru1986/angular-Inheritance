import { Input } from '@angular/core';
import { FormControl } from '@angular/forms';

/** Базовый класс для контролов */
export abstract class ControlBase {
  /** Имя контрола */
  @Input() control: FormControl;
  /** Id контрола */
  @Input() controlId: string;
  /** Плэйсхолдер */
  @Input() placeholder: string;
  /** Лэйбл */
  @Input() label: string;

  constructor() {
    /** Значения по умолчанию */
    this.placeholder = '';
    this.controlId = `control__${Math.floor(Math.random() * 75)}`;
  }
}
