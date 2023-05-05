import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { baseImgUrl } from 'src/app/utils/contants';

@Component({
  selector: 'app-header-detail-back-options',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-detail-back-options.component.html',
  styleUrls: ['./header-detail-back-options.component.scss'],
})
export class HeaderDetailBackOptionsComponent {
  @Output() toHomeScreenEmit = new EventEmitter();

  baseImgUrl = baseImgUrl;

  toHomeScreen() {
    this.toHomeScreenEmit.emit();
  }
}
