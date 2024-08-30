# SurveyApplication
This is an Survey Application.

The goal of this application is to display analysis based on the questions answered, summary of the test and a reset button.

To achieve this, I have created 2 different surveys:

        1- Personality Survey
        2- Sport Survey

The user can choose a survey from the list of surveys. 

Each surveys provides a predefined list of questions and an analysis based on the answers selected.

This is done by mapping the ID of questions and answers with their respected final conclusion.

It has an option to view the survey summery, This will display all the questions and answers choosen in the survey.

It has an reset button, which helps to reset and restart the survey.

 # To run the application locally from an IDE  
   	1.CLone the repository
    2.Open terminal
    3.npm install
    4.ng serve
    5.Open the application at http://localhost:4200

   # To run via Docker
    1.docker pull samyukthakirankumar/surveyapplication:0.0.1
    2.docker run -d -p 8080:80 samyukthakirankumar/surveyapplication:0.0.1
    3.Open the application at http://localhost:8080

