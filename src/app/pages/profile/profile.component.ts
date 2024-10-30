import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  NgCircleProgressModule,
  CircleProgressOptions,
} from 'ng-circle-progress';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, NgCircleProgressModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  providers: [
    {
      provide: CircleProgressOptions,
      useValue: {
        radius: 60,
        outerStrokeWidth: 16,
        innerStrokeWidth: 8,
        outerStrokeColor: '#f00',
        innerStrokeColor: '#fff',
        animationDuration: 3000,
        backgroundStrokeWidth: 15,
        animation: true,
        showTitle: true, // This removes the "progress" text
        showSubtitle: false, // This removes any subtitle
        showUnits: true, // This removes the % symbol if you want
        showBackground: false, // Optional: removes the background if you want
      },
    },
  ],
})
export class ProfileComponent {
  angularProgress = 92; // Example percentage for Angular
  pythonProgress = 78; // Example percentage for Python
  NodeJSProgress = 86; // Example percentage for NodeJS
  MongoDBProgress = 80; // Example percentage for MongoDB
  // Additional configurations can be set here
  AngularcircleOptions = {
    radius: 80,
    outerStrokeWidth: 16,
    innerStrokeWidth: 8,
    outerStrokeColor: 'red',
    innerStrokeColor: 'white',
    animationDuration: 3000,
  };

  PythoncircleOptions = {
    radius: 80,
    outerStrokeWidth: 16,
    innerStrokeWidth: 8,
    outerStrokeColor: 'green',
    innerStrokeColor: 'white',
    animationDuration: 3000,
  };

  NodeJScircleOptions = {
    radius: 80,
    outerStrokeWidth: 16,
    innerStrokeWidth: 8,
    outerStrokeColor: 'blue',
    innerStrokeColor: 'white',
    animationDuration: 3000,
  };

  MongoDBcircleOptions = {
    radius: 80,
    outerStrokeWidth: 16,
    innerStrokeWidth: 8,
    outerStrokeColor: 'blueviolet',
    innerStrokeColor: 'white',
    animationDuration: 3000,
  };
}
