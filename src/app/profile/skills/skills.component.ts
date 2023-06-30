import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillsrow1 = [
    { name: 'Java Angular 10', progress: 80 },
    { name: 'HTML CSS Boostrap', progress: 40 },
  ];
  skillsrow2 = [
    { name: 'MYSQL, Mongo DB', progress: 80 },
    { name: 'Typescript', progress: 80 },
  ];
  skillsrow3 = [
    { name: 'Rest API using Spring', progress: 90 },
    { name: 'Java(Core,Advanced)', progress: 90 },
  ]
  skillsrow4 = [
    { name: 'Spring Boot, Spring Data JPA, Hibernate', progress: 80 },
    { name: 'Node JS, Express JS', progress: 80 }
  ]

}
