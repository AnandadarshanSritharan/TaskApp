import { Component , Input , Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text: string = ''; // Providing a default value
  @Input() color: string = '';
  @Output() btnClick = new EventEmitter() // Providing a default value

  onClick(){
    this.btnClick.emit();
  }
}
