import { Component, OnInit, Input } from '@angular/core';
import { WizardFormData } from '../models/wizard.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input() skills: WizardFormData['skills'];

  constructor() { }

  ngOnInit(): void {
  }

  updateSkill1(event) {
    this.skills.skill1 = event.target.value;
  }

  updateSkill2(event) {
    this.skills.skill2 = event.target.value;
  }

  updateSkill3(event) {
    this.skills.skill3 = event.target.value;
  }
}
