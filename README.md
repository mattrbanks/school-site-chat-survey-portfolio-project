<p align="center"><img alt="Eagle mascot" src="https://raw.githubusercontent.com/mattrbanks/school-site-chat-survey-portfolio-project/master/src/images/cuteEagleCartoonSchool2.webp" /></p>

<h1 align="center">
  Eagle Elementary School
</h1>

This is a template elementary school site I created which targets progressive school environments becoming more socially distanced. It has a real-time chat for parents and teachers with private messaging and push notifications. The events page blog is connected to a content management system for school faculty to easily use without the help of a programmer. The survey is connected to a mongodb atlas database that collects responses from parents. The curriculum section is based on real curriculum standards.

## Technologies Used

- **Gatsby**

- **Javascript**

- **React**

- **Material Ui**

- **Styled components**

- **Contentful**

- **Socket.io**

- **GraphQL**

- **Mongodb**

- **Express**

- **Node**

## The Chat

Eagle Chat is a realtime chat application that uses socket.io and express on the backend server. On the frontend client, it uses react and socket.io. This setup enables realtime bi-directional communication between a client that runs in the browser and a node server. This application is an important part of the Eagle Elementary school site because it allows parents and teachers to stay in constant communication throughout the week and it all happens in one chat space. The plan for a school with a chat like this would be to have assigned rotating time slots for each teacher during the work week so parents can check up on how their child's eduction is going and to bring up any concerns or questions. Parents may need direct help with home education and have questions about in school education. Currently, parents are dealing with both home and school education for their child. This provides an easy platform for Eagle Elementary parents and teachers to stay current with each other to ensure a stable learning environment.

Chat features:

- Group chat rooms for grades K-3

- Emoji button with many emojis to choose from

- Private messaging

- Push notifications (Only for private messages)

- A unique 5 character user id after signing in to the chat

## How The Chat Works

In the left panel, you have a number of topic rooms you can click on to enter. Just click your child's grade to enter a group discussion involving parents and teachers. Once you click a topic, you will see the messages for that topic in the middle (bottom for mobile) panel. On the right panel, you will see all logged in users before you choose a topic. Once you are in a topic room, the right panel will show who is also in that room or all the users who are logged in. You just need to click the button over the list to toggle the two lists. You can click a user's name to create a private chat. This chat can be found below the main topic room list under "Direct Messages". Just click the newly created chat room that contains your user name and the user you clicked on to enter a private chat space for the two of you to talk. If you are in another private chat or in a group chat then you will get a private message notification.

## The Events Page (Blog)

The events page is actually a gatsby blog that uses graphql to query data from a content management system called Contentful. School faculty could potentially use the user interface on the Contentful website (with an account) to post the upcoming monthly school events without the help of the site developer.

## The Survey Page

The survey page gives parents the power to give feedback on how well their child's education is going and what their level of satisfaction is. This survey submits data to a mongodb atlas database (via a node express server) that collects all survey responses. The database analytics could then be used to find trends and make improvements to the school, based on the feedback received from the parents.

## The School Images

The images used on this site are all from Pixabay, Pexels, and Unsplash. These sites are all free image databases with no copyright restrictions on a Creative Commons license. The only image exception is the eagle mascot, of the school, which was purchased on istockphoto.com. The purchased eagle image came with a royalty-free license.

## Visit the website:

[eagle-elementary-school.netlify.app](https://eagle-elementary-school.netlify.app/)
