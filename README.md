# A prototype of Web Application for selling fruits and vegetables

## Introduction:
An application that started as Internship on BS-Computer private firm, which was further developed by me with added functionality.
This app was made in VScode IDE and tested using Live Server extension. Made for further practice of JS (fetch API,ASYNC, While method,localStorage etc).
Initial design done by 'BS computer', but since then ,has been changed buy me, and further expanded with 4 more pages .

## Use of this app:
This app is used for selling and posting of fruits and vegetables. 

Reaching for json database for info and search function based on name,date,login status. Users can login,view or send requests. 

User can also choose which product he wants to buy, which are transfered via localStorage to the - Cart Page(Korpa)-, which if user can choose to buy or cancel the selections. If paying resourse is too low, user is unable to buy and is displayed with different message. Information about the user is stored in -Profile page(Nalog)-.

Apart from this, the page has different design based on the permission of the current user. Thus although there is a Guest button, user can't access profile,cart. And normal users can't access Users page and Requests page, which are only viewable by Admins/Editors.

Products can be displayed in 3 different views, and have a mostly working pagination set in place.

Information about Users and their Requests are displayed in tables of content, with some basic sorting.

## Tehnologies used:
    - HTML
    - CSS
    - JavaScript
    - JSON
    - NPM (Toastr)

## App functionality:
    1. Responsive design
    2. Accesability consideration
    3. Dark-light browser mode
    4. Login system
    5. 3 types of list Views
    6. Pagination
    7. Sorting Tables
    8. Prototype of Roles (ADMIN,USER,EDITOR,GUEST) and their view permissions
    9. Tables displaying content from JSON for user/requests
    10. Toastr notifications on login(npm package): //Disabled(commented out) for easier commit
    11. Statistics
    12. Manual Carousel
    13. Reviews generated using JSON data
    14. Data transfer and manipulation with LocalStorage
    15. Selected Items generated on -Cart page- and display the total cost
    16. User profile - displaying current user Data
    17. Money randomly generated upon login(1-100)
    18. Automatic Login skip of -login page- if user was previously logged in(unless you logout)

## Trial account for viewing whole site
     "names":"User",
     "email":"sample11@gmail.com",
     "password":"023",

## How to Launch?
https://astralemperor.github.io/Application/
