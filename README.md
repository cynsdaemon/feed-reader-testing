# Feed Reader Testing
--------

This repo serves as a home for the 'Feed Reader Testing' project in the Udacity [Frontend Web Development](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001) Nanodegree.

This project is an exercise for writing tests against a pre-existing application, and a study of test-driven development.

The Feed Reader is a web-based application that reads [RSS feeds](https://en.wikipedia.org/wiki/RSS). It uses the Google Feed Reader API and stores RSS feeds as a JSON object. The unit tests are written with [Jasmine](http://jasmine.github.io/), a JavaScript behavioral test suite developed by [Pivotal Labs](https://pivotal.io/open-source).

The written tests help to analyze multiple aspects of the Feed Reader such as the logic, event handling and DOM manipulation, and to test whether introducing new code will break a feature without having to manually test the application.

Project Setup Instructions
--------

**To setup this project on a local machine:**

:memo: This project uses **npm** as it's task runner. **Git** version control and **Node.js** should be installed and configured *before* installing Jasmine. Overall, the following dependencies are required:

- [ ] Git version control ([Getting Started with Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git))
- [ ] [Node.js](https://nodejs.org/en/)
- [ ] [Jasmine](https://jasmine.github.io/pages/getting_started.html)

For each dependency, be sure to follow the install instructions specific to your machine's operating system. Then, fork, download or clone this project [from Github](https://github.com/cynsdaemon/feed-reader-testing/).

:heavy_check_mark: Lastly, open a terminal in the root directory of the project, and run the **npm** command to install node packages:

>```npm install```

**To run the tests locally:**

Once all of the project's dependencies are installed, run Jasmine tests:

> ```npm test```

**To add and edit tests or tasks:**

Navigate to the [Jasmine tests](/jasmine/spec/feedreader.js) file to view or write tests. The file lives in the repository:

>```./jasmine/spec/feedreader.js```

### Screenshot of Feed Reader app up and running:
![](img/screenshot-feed-reader.png)

Resources
--------

This project uses the following style guides and repositories:

- The Feed Reader application, grading rubric, and style guides via [Udacity](https://github.com/udacity/frontend-nanodegree-feedreader)'s repository

Contributions and Feedback
--------

For feedback and suggestions feel free to open an [issue on Github](https://github.com/cynsdaemon/feed-reader-testing/issues) for this project.

License
--------

This project is build with love :heart: coffee :coffee: and an awesome playlist :musical_note:. Copyright &copy; 2018 [Cynthia L. Wright](https://www.cynthialanel.com).

