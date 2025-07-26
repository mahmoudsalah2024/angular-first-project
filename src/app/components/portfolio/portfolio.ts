import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {
  projects = [
    { image: 'assets/images/port1.png' },
    { image: 'assets/images/port2.png' },
    { image: 'assets/images/port3.png' },
    { image: 'assets/images/port1.png' },
    { image: 'assets/images/port2.png' },
    { image: 'assets/images/port3.png' }
  ]
selectedImage: string | null = null;

openImage(img: string) {
  this.selectedImage = img;
}

closeImage() {
  this.selectedImage = null;
}

}
