import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { FormationService } from '../../services/formation.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title='Home';
  categories = ['Développement Web', 'Design UX/UI', 'Data Science'];

  
}
