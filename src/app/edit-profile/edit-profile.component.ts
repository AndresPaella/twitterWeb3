import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserProfile } from '../profile/profile.component';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {
  @Input() profile: UserProfile;
  @Output() save = new EventEmitter<UserProfile>();
  @Output() cancel = new EventEmitter<void>();

  constructor() {
    this.profile = {name:'', bio:'', handle:'', avatarUrl:'' }; 
  }
  
  handleAvatarChange(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    const reader = new FileReader();
  
    reader.onload = () => {
      // Verificar que profile no sea nulo antes de asignarle la propiedad avatarUrl
      if (this.profile) {
        this.profile.avatarUrl = reader.result as string;
      }
    };
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  onSave() {
    // Validar y guardar datos del perfil
    this.save.emit(this.profile);
  }

  onCancel() {
    this.cancel.emit();
  }
}