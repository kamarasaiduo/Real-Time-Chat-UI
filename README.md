# Real-Time-Chat-UI (Group 5)

# Description of the Program

This program is a basic real-time chat user interface designed in HTML, CSS, and JavaScript. 
It simulates a chat application where a user can send a message, and the app generates automatic responses.
# Key Features
## Responsive Design:
The app uses CSS to ensure the layout adapts to various screen sizes.
Centered on the screen for desktop view with a flexible layout for mobile compatibility.
# Chat Header:
Displays a title "Real-Time Chat" in a styled header.
# Chat Window:
Contains a scrollable area called chat-window to display sent and received messages.
Messages are styled differently for the sender sent and receiver receive
# Message Input Form:
A form at the bottom of the chat app for typing and sending messages.
Includes an input field chat-input for the message text and a send button send-button.
# Message Styling:
Sent messages appear aligned to the right in a darker background .
Received messages appear aligned to the left in a light background.
Each message includes a timestamp in red below the text.
# Automated Responses:
After a user sends a message, the app simulates a random reply from a predefined list after a 2-second delay.
## JavaScript handles dynamic Functionality like:
Capturing the message typed by the user.
Appending messages to the chat window dynamically.
Generating random automated replies.
Scrolling the chat window to show the latest message.
A function (getCurrentTime) generates a timestamp for each message.
## How It Works
## User Interaction:
The user types a message in the input field and clicks "Send" or presses Enter.
The submit event on the form captures the input, displays it in the chat window, and clears the input field.
## Message Display:
Sent messages are displayed on the right, styled in gray with white text.
Received messages are displayed on the left, styled in light gray with dark text.
## Automated Reply:
After a message is sent, the app waits 2 seconds before responding with a random reply from a predefined list.
## Scroll Management:
The chat window scrolls automatically to enable user go up or down to desirable message.

# Improvements
If we get the go ahead to improve on this project, the following would be seen as upgrade:
1.	A landing page with Sign-up and Login options.
2.	A redefined/custom chat background,
3.	A sender and receiver chat-icon
4.	A timestamp that will include seconds
5.	Faster automated response
6.	More responsiveness using media queries
7.	Human-like response
8.	A logout button to end session

# Meet the group members
1. Saidu O. Kamara       - 9370 - Team Leader
2. Abdulrahim	Jalloh     - 8948
3. Alhaji Maligie	Conteh - 9291
4. Eeric  Aiah Amara     - 9276
5. Mariama B	turay      - 9452	

