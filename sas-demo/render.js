/**
 * Course: COMP 426
 * Assignment: a04
 * Author: <Nathan Urquhart>
 *
 * This script uses jQuery to build an HTML page with content taken from the
 * data defined in data.js.
 */


// added a comment

// added a comment asdf
// another asdf
// AAAAA



/**
 * Given a hero object (see data.js), this function generates a "card" showing
 *     the hero's name, information, and colors.
 * @param hero  A hero object (see data.js)
 */
export const renderHeroCard = function(hero) {
    // TODO: Generate HTML elements to represent the hero
    // TODO: Return these elements as a string, HTMLElement, or jQuery object
    // Example: return `<div>${hero.name}</div>`;

    //$('#root').append(`<div>${hero.name}</div>`);
    let img = `<img src= '${hero.img}' alt="Character"/>`
    let back;
    return `<div style="background-color: ${hero.backgroundColor}; border: 2px solid #e66465;" >
        <img src= '${hero.img}' alt="Character"/>
        <p style="color:${hero.color}; font-weight:bold">${hero.name}</p>  
        <p style="color:${hero.color};">"${hero.subtitle}"</p>
        <p style="color:${hero.color};"><span style="font-weight:bold">Alter Ego: </span>${hero.first} ${hero.last}</p>
        <p style="color:${hero.color};"><span style="font-weight:bold">First Apperence: </span>${hero.firstSeen}</p>
        <p style="color:${hero.color};">${hero.description}</p>
        <button type="button">Edit</button>
    </div>`;
    
};



/**
 * Given a hero object, this function generates a <form> which allows the
 *     user to edit the fields of the hero. The form inputs should be
 *     pre-populated with the initial values of the hero.
 * @param hero  The hero object to edit (see data.js)
 */
export const renderHeroEditForm = function(hero) {
    // TODO: Generate HTML elements to represent the hero edit form
    // TODO: Return these elements as a string, HTMLElement, or jQuery object
    // Example: return `<form>${hero.name}</form>`;
    let day = "2018-07-22";
    if(hero.first === "Natasha") {
        day = "1964-05-01";
    } else if (hero.first === "Tony") {
        day = "1963-04-01";
    } else if(hero.first === "Scott") {
        day = "1962-10-01";
    } else if(hero.first === "Steve") {
        day = "1941-04-01";
    } else if(hero.first === "Bruce") {
        day = "1962-06-01";
    } else if(hero.first === "Thor") {
        day = "1962-09-01";
    } else if(hero.first === "Nick") {
        day = "1963-06-01";
    } else if(hero.first === "Clint") {
        day = "1964-10-01";
    }
    let year = hero.firstSeen.getFullYear();
    let month = hero.firstSeen.getMonth();
    if(month < 10) {
        month = `0${month}`;
    }



    return `<div style="background-color: ${hero.backgroundColor}; border: 2px solid #e66465;" >
        <img src= '${hero.img}' alt="Character"/>

        <form action="submission.html" method="POST">
            <section class="Hero Name">
            <label for="name">Hero Name:</label>
                    <input type="text" name="name" id="name" value="${hero.name}">
            </section>

            <section class="First Name">
            <label for="first">First Name:</label>
                    <input type="text" name="first" id="first" value="${hero.first}">
            </section>

            <section class="Last Name">
            <label for="last">Last Name:</label>
                    <input type="text" name="last" id="last" value="${hero.last}">
            </section>

            <section class="Subtitle">
            <label for="sub">Subtitle:</label>
                    <input type="text" name="sub" id="sub" value="${hero.subtitle}">
            </section>
            
            <section class="First Seen">
                        <label for="seen">First seen:</label>
                                <input type="date" id="start" name="trip-start" min="1900-01-01" max="2020-12-31" value="${year}-${month}-01">
                        </section>

                       
            

            <section class="Description">
            <label for="des">Description:</label>
                   <textarea id="w3review" name="w3review" rows="4" cols="50">${hero.description}</textarea>
            </section>

            <button type="submit" style="background-color:grey; color:white">Save</button>
            <button type="button" style="background-color:red; color:white">Cancel</button>

        </form>

      </div>`;
};



/**
 * Given an array of hero objects, this function converts the data into HTML and
 *     loads it into the DOM. 
 * @param heroes  An array of hero objects to load (see data.js)
 */
export const loadHeroesIntoDOM = function(heroes) {
    // Grab a jQuery reference to the root HTML element
    const $root = $('#root');
 
    // TODO: Generate the heroes using renderHeroCard()
    

    // TODO: Append the hero cards to the $root element
    for(let i = 0; i < heroes.length; i++) {
        let h = renderHeroCard(heroes[i]);
        $root.append(h);
    }
    


    // Pick a hero from the list at random
    const randomHero = heroes[Math.floor(Math.random() * heroes.length)];

    // TODO: Generate the hero edit form using renderHeroEditForm()
     let change = renderHeroEditForm(randomHero);

    // TODO: Append the hero edit form to the $root element
    $root.append(change);
};



/**
 * Use jQuery to execute the loadHeroesIntoDOM function after the page loads
 */
$(function() {
    loadHeroesIntoDOM(heroicData);
});
 

