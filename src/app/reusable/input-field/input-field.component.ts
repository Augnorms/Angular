import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="w-full p-2">
      <div class="flex justify-between mb-2">
        <div class="w-1/2 text-start font-bold">{{ label }}</div>
        <div class="w-1/2 text-red-500 text-end font-bold" *ngIf="required">
          Required
        </div>
      </div>
      <div>
        <input
          [type]="type"
          [placeholder]="placeholder"
          [id]="id"
          [class]="
            'w-full p-2 bg-white border border-[#d8dae5] hover:border-[#8F95B2] text-gray-900 rounded-lg focus:outline-cyan-200 focus:ring-cyan-500 focus:ring' +
            ' ' +
            style
          "
          [required]="required"
          [formControl]="form!.get(controlName)!"
        />
      </div>
    </div>
  `,
  styleUrls: ['./input-field.component.css'],
})
export class InputFieldComponent {
  @Input() style!: string;
  @Input() type!: string;
  @Input() placeholder!: string;
  @Input() label!: string;
  @Input() required!: boolean;
  @Input() id!: string;
  @Input() form!: any;
  @Input() controlName!: string;
}