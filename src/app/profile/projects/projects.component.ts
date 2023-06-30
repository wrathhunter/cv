import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  config: any;
  projects = [
    {
      id: 1,
      title: 'Personal Portfolio using Angular 10',
      desc: 'This portfolio is built by using angular 10.',
      livedemo: 'https://sibaprasadpandacv.web.app/#/',
      githurl: 'https://github.com/wrathhunter/cv',
      imgUrl: 'assets/images/z23.png',
      tech: 'Angular 10'
    },
    {
      id: 2,
      title: 'ExamON',
      desc: 'ExamON is a online examination platform where any educator can create mcq based tests and after creating the test, an automated id for test will be generated which can be shared among the students. Students will directly appear the exam and atlast get the result.',
      livedemo: 'https://exam-on.netlify.app/',
      githurl: 'https://github.com/wrathhunter/exam',
      imgUrl: 'assets/images/z24.png',
      tech: 'Spring Boot, Mongo DB, Angular 10'
    },

  ]
  constructor() { }

  ngOnInit() {
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.projects.length
    };
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }
}
