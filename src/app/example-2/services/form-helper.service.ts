import { Injectable } from '@angular/core';

@Injectable()
export class FormHelperService {
  constructor() {}

  /** Отмечаем все контролы как touched */
  public markAllControlsAsTouched(form): void {
    Object.keys(form.controls).forEach((controlName: string) => {
      form.controls[controlName].markAsTouched();
    });
  }
}
