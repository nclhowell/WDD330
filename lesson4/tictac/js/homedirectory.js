 gridfunction();
 // Display the Grid
 function gridfunction() {
    // const requestURL = "data/showcaseriders.json";
    const requestURL = "https://nclhowell.github.io/wdd230/chamber/data/showcaseriders.json";
     const gnarcards = document.querySelector('.grid-boxes');
     fetch(requestURL)
         .then(function (response) {
             return response.json();
         })
         .then(function (jsonObject) {
             // temporary checking for valid response and data parsing
             console.log(jsonObject);
             const rider = jsonObject['rider'];
             // shuffle(rider);
            //for (let i =0; i < rider.length; i++) {
            // displayGnar(rider[i]);
            //}
             const rider2 = shuffle(rider);
             displayGnar(rider2[0]);
             displayGnar(rider2[1]);
             displayGnar(rider2[3]);
             displayGnar(rider2[4]);

             function shuffle(rider) {
                let ctr = rider.length;
                let temp;
                let index;
            
                // While there are elements in the array
                while (ctr > 0) {
            // Pick a random index
                    index = Math.floor(Math.random() * ctr);
            // Decrease ctr by 1
                    ctr--;
            // And swap the last element with it
                    temp = rider[ctr];
                    rider[ctr] = rider[index];
                    rider[index] = temp;
                }
                return rider;
            }
         });

     function displayGnar(rider) {
         let gnarcard = document.createElement('section');
         gnarcard.setAttribute("class", "box");
         gnarcard.setAttribute("id", "spot6");
         let h4 = document.createElement('h4');
         let h1 = document.createElement('h1');
         let h2 = document.createElement('h2');
         let portrait = document.createElement('img');
         let p = document.createElement('p');
         // Change the textContent property of the h2 element to contain the rider's full name
         h4.innerHTML = `"Fab 4" Rider of the Day`;
         h1.innerHTML = `${rider.name}`;
         p.textContent = `${rider.pitch}`;

         // Build the image attributes by using the setAttribute method for the src, alt, 
         // and loading attribute values. (Fill in the blank with the appropriate variable).
         portrait.setAttribute('src', rider.logo);
         portrait.setAttribute('alt', `rider`);
         portrait.setAttribute('loading', 'lazy');
         //portrait.setAttribute('max-height', '80%');
         //portrait.setAttribute('max-width', '80%');

         // Add/append the section(gnarcard) with the h2 element
         gnarcard.appendChild(h4);
         gnarcard.appendChild(portrait);
         gnarcard.appendChild(h1);
         gnarcard.appendChild(h2);
         gnarcard.appendChild(p);

         // Add/append the existing HTML div with the gnarcards class with the section(gnarcard)
         gnarcards.appendChild(gnarcard);
     }

     function shuffle(rider) {
         var ctr = rider.length,
             temp, index;
         // While there are elements in the array
         while (ctr > 0) {
             // Pick a random index
             index = Math.floor(Math.random() * ctr);
             // Decrease ctr by 1
             ctr--;
             // And swap the last element with it
             temp = rider[ctr];
             rider[ctr] = rider[index];
             rider[index] = temp;
         }
         return rider;
     }

 }