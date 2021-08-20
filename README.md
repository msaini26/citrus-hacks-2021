# citrus-hacks-2021

## Inspiration

As the pandemic drones on, human interaction has been reduced, and people have become less connected. According to a study conducted by researchers at Making Caring Common, “approximately 950 Americans reported feeling lonely “frequently” or “almost all the time or all the time” in the prior four weeks, compared with 25 percent who recalled experiencing serious issues in the two months prior to the pandemic. Perhaps most striking is that 61 percent of those aged 18 to 25 reported high levels.” We don’t know about you, but we are among this percentage: isolated, less motivated, and tired of online meetings. That’s why we created Fit Share. Our goal is to improve lives by bringing back motivation towards mental and physical health as well as the connections and bonds formed with others. Of course, there is no better place to start than with your neighbors! 

We created Fit Share to bring a bit of competition to your life through exercise competitions with your neighbors. Between the core and cardio workouts to leg and arm strength training, Fit Share allows you to have fun while staying active and connecting with others safely.

## What it does

Fit Share allows its users to enter their locations and select their neighborhood. Once they “enter” (select)  a neighborhood, they can view other neighbors using Fit Share on the participant’s page. There is also a leaderboard that displays each neighbor’s accumulated points (through exercises) and the top three neighbors’ point-getters. The home page serves as the user dashboard that includes a personalized welcome message for the user and a progress bar with their points. The home page is also where the exercise challenge categories can be found. We included cardio, core, leg, and arm categories. Once a category is chosen a list of challenges with a description and point amount is shown. 

When you find a challenge you can click “Go to Challenge” to be redirected to what will verify your completion. Using ML models we have incorporated the use of a camera to detect if the workout is being done properly. For example, if the user completes a push up correctly, the counter will increase by 1. Using the Google Maps and Directions APIs we were able to create a cardio challenge that will form a path the user needs to run or walk in the neighborhood to receive the points. Lastly, we have a messages page where we used Twil.io to send the user message updates on the progress of other neighbors. 

## How we built it
We used VS Code to build our front end, creating a unique UI/UX design for our users. The web app contained a consistent theme and user interaction with the use of bootstrap. We also created a login page using Google’s Firebase to authenticate accounts.

For our exercise challenges that required a count to be taken like for push-ups, we used ML to detect the user’s movement and verify they are doing pushups. We used VNOpen AI and BlazePose, a real time body pose tracker.  If the push-up is verified the counter increases by 1. For our cardio challenge category, we created challenges that used Google Maps API to generate a path for the user to take a walk or run on. 


## Challenges we ran into
Using firebase authentication for the first time was tricky. We ran into problems with our javascript files and linking firebase, but we were able to figure it out. Another challenge was the counter with ML for the number of times we successfully complete an exercise like a push up or sit up. It was also difficult adjusting the camera and geting  BlazePose to work. The last big challenge we ran into was when we were using the Google Maps and Directions API, as it was hard to implement.


## Accomplishments that we're proud of
This was most of our first time using Twil.io and Firebase authentication. This weekend we had a lot of great learning opportunities from each other as we had backend and frontend skill sets. Though we ran into some challenges, we are proud of our use of ML with our exercise challenges. We are also proud of our UI/UX design. Finally, we are extremely proud to have created a responsive website that can be viewed on mobile devices comfortably.  

## What we learned
As mentioned before, this was most of our team’s first time learning about and integrating Firebase and Twil.io. Using ML was also new for most of us but having someone with experience allowed us to learn more about it. Overall, CitrusHacks was an incredible education experience, where each of us was given the learning opportunity in brainstorming, coding, and developing a project with others of different skill sets. As a very diverse team, we learned how to collaborate virtually with multiple time zones, states, and busy schedules. 

## What's next for Fit Share
Our vision is that Fit Share will be able to help improve lives by increasing motivation, creating healthier lives, and building connections with others safely. We want to implement a system for storing user points, improve our ML models, and we want to continue working on our user interface. We also want to expand this app beyond neighborhoods and allow users to compete across the world. Another feature we want to add is a way to create a competition between your friends. Building connections is an important value of Fit Share and we want users to also be able to add friends via a friend request so that they can stay in touch. The end goal is to have a functioning mobile app that anyone can use.

