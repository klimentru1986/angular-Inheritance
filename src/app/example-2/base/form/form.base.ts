import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms/src/model';
import { FormHelperService } from '../../services/form-helper.service';

export abstract class FormBase implements OnInit {
  /** Форма */
  public form: FormGroup;

  // protected formHelper: FormHelperService;

  protected constructor(protected formHelper: FormHelperService) {
    // this.formHelper = formHelper;
  }

  ngOnInit() {
    this.form = this.initForm();
    this.initDefaultValues();
  }

  /** Submit формы */
  public abstract onSubmit(): void;

  /** Инициализация формы */
  protected abstract initForm(): FormGroup;

  /** Переопределяемый метод для инициализации */
  protected initDefaultValues(): void {}

  /** Отмечаем все контролы как touched */
  protected markAllControlsAsTouched(): void {
    this.formHelper.markAllControlsAsTouched(this.form);
  }
}
