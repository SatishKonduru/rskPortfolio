import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { ContactComponent } from '../contact/contact.component';
@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [ContactComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent implements OnInit {
  ngOnInit(): void {
    const options = {
      strings: [
        'UI/UX Designer',
        'Angular Developer',
        'Backend Developer',
        'Educator',
        'Youtuber',
        'Trainer',
        'Graphics Designer',
        'Fullstack Developer',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed('.typedText', options);
  }
}
