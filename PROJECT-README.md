## DATA

Users
-PK user_id
-user_name
-user_password

comments
-PK comment_id
-FK post_id
-create_date
-user_name
-text


Posts
-PK post_id
-FK user_id
-FK subject_id
-rate (similar to reddit)
-like/save
-picture
-external link

Subjects
-PK subject_id
-subject_name
-subject_info

## USER STORIES

### Feature 1:
User story: 
users should be able to save an external URL along with a title and description

Scenario: 
Given: i have external website to save, 
When: i tap the create post icon,
Then: it shows me a form with: title, description, URL link, (optional) image link?

*need to check if all required field are typed in

### Feature 2:
User story: 
users should be able to search for already-saved resources created by any user

Scenario:
Given: User want to search for a particular post
When: typing in the search term into a form and click on search icon
Then: show a page with all posts matching the search term

### Feature 3:
User story:
users should be able to categorize any resource under a topic

Scenario:
Given: user is creating the post
When: trying to put the post into a category
Then: List out current categories or option to create new categrory

### Feature 4:
User story:
users should be able to comment on any resource

Scenario:
Given: user is looking at post and want to comment
When: click on comment button/icon
Then: opens up a text area to type in comment and submit

### Feature 5 + 6:
User story:
users should be able to (5) rate any resource and (6) bookmark any resource

Scenario:
Given: user is looking at a posts and decides to 
- (5) rate the post
- (6) bookmark the post
When: 
- (5) Clicking on UP and DOWN arrows (reddit style)
- (6) Clicking on the bookmark icon  
Then: 
- (5) The counter will update accourding to UP/DOWN arrow
- (6) The bookmark icon will be filled/changed and added to the user's liked post collection 

### Feature 7:
User story:
users should be able to view all their own and all liked resources on one page ("My resources")

Scenario:
Given: User want to check on "My resources" (have own posts AND liked posts)
When: click on "My Resource" 
Then: Show new page with all user category folders PLUS uncategoried folder 

### Feature 8:
User story:
users should be able to register

Scenario:
Given: User is the landing page with login/register window open
When: user fills in email, password, first and last name and click register
Then: will take them to new page where they select some categories they are interested in and show them on the page 

### Feature 9 + 10:
User story:
users should be able to (9) login  and (10) logout

Scenario:
Given: User is the landing page with login/register window open
When: 
- (9) user fills in login form with email and password
- (10) user click on log out button
Then: will take user to "Home page" with 
- (9) 
 -- categories that they are interested in (from registration step)
 -- (optional) posts related to the categories
- (10) will take user to landing page (with login/register window)

### Feature 11:
User story:
users should be able to update user profile

Scenario:
Given: User is logged in want to update user profile data
When: click on "Account Settings" button/icon
Then: take to new page where can upate first name, last name, picture, password (dont need to check on login). **Email (user_id) cannot be changed.**

### EXTRA FEATURES 1 - Calendar reminder
User story: 
user should be able to set calendar reminders

Scenario:
Given: user is logged in and sees a posts that they like to be reminded at a later date 
When: click on reminder icon (on the post)
Then: 
- takes to new page showing a calendar, 
- selects a date and time for reminder
- and set reminder through SMS text/ or email

### EXTRA FEATURES 2 - Share post button
user story: 
User should be able to share a post to anyone

Scenario:
Given: User is logged in and want to share a post 
When: click on share icon (on post)
Then: will show a link that can be copied and shared with others


