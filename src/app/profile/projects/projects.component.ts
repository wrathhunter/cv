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
      title: 'Used setiment analysis with python to classify reviews',
      desc: 'Text data had been prepossessed by Tokenizing sentences, Removing stop words, Normalizing words and Vectorizing text. After removal of noise Machine Learning Classifiers were used to Predict Sentiments.',
      // livedemo: 'https://mehulk05.github.io/MyShop/#/',
      // githurl: 'https://github.com/mehulk05/MyShop',
      // mediumlink: 'https://itnext.io/read-data-from-google-spreadsheet-in-angular-209ee74b6cb4',
      // imgUrl: 'assets/images/z1.png',
      tech: 'Python, Machine Learning'
    },

    {
      id: 2,
      title: 'Online Chatting System With Python',
      desc: 'Online chatting system with socket programming and multi-threading and to ensure security used both symmetric and asymmetric cryptography.',
      // livedemo: 'https://mehulk05.github.io/Blogapp-using-MERN/#/',
      // githurl: 'https://github.com/mehulk05/Blogapp-using-MERN',
      // mediumlink: 'https://itnext.io/blog-app-using-mern-stack-b0b4d69d7ea1',
      // imgUrl: 'assets/images/z26.png',
      tech: 'Python, Web Socket API'
    },


    {
      id: 3,
      title: 'Success Probability Estimation and Optimisation of Fault Tolerant Network',
      desc: 'Inclusion-exclusion principle was implemented on all minimal non-redundant cut-sets after estimating 2 terminal reliability values.Efficiency and correctness was proposed on some sample benchmark networks and results were analyzed.',
      // livedemo: 'https://sibaprasadpandacv.web.app/#/',
      // githurl: 'https://github.com/mehulk05/Blog-using-mean',
      // mediumlink: 'https://itnext.io/crud-operation-using-mean-stack-7dfa2f51ec8c',
      // imgUrl: 'assets/images/z27.png',
      tech: 'Matlab'
    },

    {
      id: 4,
      title: 'Personal Portfolio using Angular 10',
      desc: 'This portfolio is built by using angular 10.',
      livedemo: 'https://sibaprasadpandacv.web.app/#/',
      // githurl: 'https://github.com/mehulk05/Chat-app-using-Nodejs',
      // mediumlink: 'https://medium.com/weekly-webtips/building-a-multiroom-chat-application-in-node-js-8a8adca5acf2',
      // imgUrl: 'assets/images/z23.png',
      tech: 'Angular 10'
    },


    {
      id: 5,
      title: 'ExamON',
      desc: 'ExamON is a online examination platform where any educator can create mcq based tests and after creating the test, an automated id for test will be generated which can be shared among the students. Students will directly appear the exam and atlast get the result.',
      // livedemo: 'https://mehulk05.github.io/Medium-Blog-On-React-App#/',
      // githurl: 'https://github.com/mehulk05/Medium-Blog-On-React-App',
      // mediumlink: 'https://javascript.plainenglish.io/how-to-add-medium-blogs-on-your-react-app-a3898a729aad',
      // imgUrl: 'assets/images/z4.png',
      tech: 'Spring Boot, Mongo DB, Angular 10'
    },



    // {
    //   id: 6,
    //   title: 'News App using ReactJS (Parsing XML to JSON)',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/NewsApp-using-React',
    //   githurl: 'https://github.com/mehulk05/NewsApp-using-React',
    //   mediumlink: 'https://codeburst.io/news-app-using-reactjs-f9752d7ab6ce',
    //   imgUrl: 'assets/images/z24.png',
    //   tech: 'React JS, XMl to JSON'
    // },



    // {
    //   id: 7,
    //   title: 'Medium-Like Blog App Using Angular 9 and Firebase',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/Blog-Book/',
    //   githurl: 'https://github.com/mehulk05/Blog-Book',
    //   mediumlink: 'https://codeburst.io/blogging-app-using-angular-9-and-firebase-98e36168d850',
    //   imgUrl: 'assets/images/z21.png',
    //   tech: 'HTML, Bootstrap, CSS, Angular-9, Firebase'
    // },



    // {
    //   id: 8,
    //   title: 'COVID 19 Tracker (Statistics) app Using Angularr',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/COVOID-19/',
    //   githurl: 'https://github.com/mehulk05/COVOID-19',
    //   mediumlink: 'https://codeburst.io/covoid-19-tracker-statistics-app-using-angular-2358347b3d1f',
    //   imgUrl: 'assets/images/z2.png',
    //   tech: 'Angular 10 ,Bootstrap,Javascript'
    // },


    // {
    //   id: 9,
    //   title: 'Weather App with React',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/React-Weather/',
    //   githurl: 'https://github.com/mehulk05/React-Weather-App',
    //   mediumlink: 'https://medium.com/analytics-vidhya/weather-app-with-react-adaa7268bbdb',
    //   imgUrl: 'assets/images/z9.png',
    //   tech: 'React, Open MAp Api'
    // },


    // {
    //   id: 10,
    //   title: 'Spring Boot + Angular 8 CRUD Example',
    //   desc: '',
    //   livedemo: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
    //   githurl: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
    //   mediumlink: 'https://medium.com/analytics-vidhya/spring-boot-angular-8-crud-example-8aeafd47b54',
    //   imgUrl: 'assets/images/z28.png',
    //   tech: 'Angular8, Java ,Hibernate'
    // },


    // {
    //   id: 11,
    //   title: 'Personal Portfolio Using Angular',
    //   desc: '',
    //   livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
    //   githurl: 'https://github.com/mehulk05/Personal-Portfolio-Angular-Updated',
    //   mediumlink: 'https://javascript.plainenglish.io/personal-portfolio-using-angular-8-and-bootstrap-5dde6fc7cf9b',
    //   imgUrl: 'assets/images/z11.png',
    //   tech: 'Angular ,Bootstrap'
    // },


    // {
    //   id: 12,
    //   title: 'Personal Portfolio Using Django',
    //   desc: '',
    //   livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
    //   githurl: 'https://github.com/mehulk05/My-Personal-Portfolio',
    //   mediumlink: 'https://mehulkothari05.medium.com/personal-portfolio-using-django-dba49c355905',
    //   imgUrl: 'assets/images/z12.png',
    //   tech: 'Django'
    // },

    // {
    //   id: 13,
    //   title: 'Movie Success Prediction',
    //   desc: '',
    //   livedemo: 'https://mehulkothari05.medium.com/',
    //   githurl: 'https://github.com/mehulk05',
    //   mediumlink: 'https://mehulkothari05.medium.com/movie-success-prediction-a67d871a7b1',
    //   imgUrl: 'assets/images/z13.png',
    //   tech: 'Python, Machine Learning, Django Framework.'
    // },

    // {
    //   id: 14,
    //   title: 'Matrimonial Website',
    //   desc: '',
    //   livedemo: 'https://mehulkothari05.medium.com/',
    //   githurl: 'https://github.com/mehulk05/Matrimonial-Website.git',
    //   mediumlink: 'https://mehulkothari05.medium.com/matrimonial-website-9cd5247f477d',
    //   imgUrl: 'assets/images/z14.png',
    //   tech: 'HTML, CSS, Bootstrap, Jquery'
    // },

  ]
  constructor() { }

  ngOnInit() {
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.projects.length
    };
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }
}
