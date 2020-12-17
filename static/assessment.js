'use strict';

//
// PROMPT 1
//
// When a user clicks on the button that says "Log In", its text should
// update and say "Log out".
//
// If a user clicks on the button again, its text should switch from "Log Out"
// to "Log In".

// Need to make a button that says log in, when clicked will update with log out and then update 
// again to say log in after click
let logButton = document.querySelector('#login-button');

logButton.addEventListener('click', (evt) => {
    // logButton.innerHTML = "Log Out"; });
    if (logButton.innerHTML === "Log In") {
        logButton.innerHTML = "Log Out";
    } else logButton.innerHTML = "Log In";
});


//
// PROMPT 2
//
// This form will send an alert to a user via the built-in alert function.
//
// A user should be able to enter what they want the alert to say in the
// text box. Then, they can submit the form to trigger the alert.

// Sends an alert - User will get a form to ask what they want alert to say
// then they can submit form and trigger alert

document.querySelector('form').addEventListener('submit', (evt) => {
    evt.preventDefault();
  
    alert(document.querySelector('#alert-text').value);
  });



//
// PROMPT 3
//
// This is a pretty silly feature -- when a user double-clicks on the
// button (the one that says "Double-click to add item"), a new list
// item should appear.
//
// In other words, whenever a user double-clicks on the button, just
// add another <li>Item</li>. So, a user has double-clicked on the
// button once, the list should look like this:
//
//   <ul id="list">
//     <li>Item</li>  <!-- This list item was already here -->
//     <li>Item</li>  <!-- This was added after double-clicking -->
//   </ul>

let listButton = document.querySelector('#list-adder');

const addToList = () => {
    $('.alert-text').append(`
    <tr>
        <td>Item</td>
    </tr>
    `);
};
$('#list-adder').on('click', addToList);


//
// PROMPT 4
//
// Users should be able to change the color of any element with the
// class, "changes-colors", by clicking on the "Turn Stuff Red" button
// or "Turn Stuff Blue" button.
//
// Clicking on "Turn Stuff Red" should make text red and clicking on "Turn
// Stuff Blue" should make text blue.

// Make items with class "changes-colors". Make a turn stuff red button that turns
// text red and turn stuff blue button that turns text blue

function blueChange(evt) {
    $('.changes-colors').css('color', 'blue');
};
$('#blue-change').on('click', blueChange);

function redChange(evt) {
    $('.changes-colors').css('color', 'red');
};
$('#red-changer').on('click', redChange);
//
// PROMPT 5
//
// Display names of 20 berries from Pokemon (a video game franchise). To
// do this, you'll make a GET request to the Pokemon RESTful API to
// retrieve data on Pokemon berries, parse the results, then add
// the names of berries to the paragraph. The paragraph should look
// something like:
//
//   <p id="berries">
//     cheri, chesto, pecha, rawst, aspear, leppa, oran, persim,
//     lum, sitrus, figy, wiki, mago, aguav, iapapa, razz, bluk,
//     nanab, wepear, pinap
//   </p>
//
// The Pokemon RESTful API supplies data about various items, creatures,
// and other components of Pokemon video games. It's meant to be used as an
// educational resource to help developers practice working with REST APIs.
// You don't need to sign up for a developer key to use it and it's
// completely free!
//
// We recommend that you visit their website at https://pokeapi.co/ and
// check out the example on the homepage. This will give you an idea of
// how the API works, but you'll likely need more detailed information.
// For that, head over to their API documentation at https://pokeapi.co/docs/v2.
//
// The sections that will help you out the most for this prompt are:
// "Resources Lists/Pagination" (the first section you land on when you go
// to their API docs) and "Berries" (this is the section about berries).

// Need to use the pokemon api to pull a list of berries through a get request,
// parse the results, then add to <p> with id "berries" 

// https://pokeapi.co/api/v2/berry/   get search
// will give you raw json so we need to make this into a list
// use event target?



$.get('https://pokeapi.co/api/v2/berry/', (res) => {
  const berryNames = [];
  for (const berry of res.results) {
    berryNames.push(berry.name);
  }

  $('#berries').append(berryNames.join(', '));

});

