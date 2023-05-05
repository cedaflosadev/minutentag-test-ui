import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { baseImgUrl } from 'src/app/utils/contants';

@Component({
  selector: 'app-header-tab-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-tab-avatar.component.html',
  styleUrls: ['./header-tab-avatar.component.scss'],
})
export class HeaderTabAvatarComponent {
  baseImgUrl = baseImgUrl;
}
