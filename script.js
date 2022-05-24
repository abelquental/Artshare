renderData();

function renderData() {  
  var heroContent1 = `
  <div class="image-container" id="image-container-1" data-tilt-full-page-listening>
    <div class="image" id="image-1"></div>
  </div>

  <div class="info-container" id="info-container-1">
    <h1><img src="images/artshare.svg">Artshare <br> Festival & Conference</h1>
    <div class="slogan">
        <p>Hope for the future</p>
        <p>— Reshaping and reinventing Science <br>& Technology through the Arts</p>
    </div>
    <div class="local">
        <p>21-23.06.2022</p>
        <p>Factory, HubCreativo do Beato</p>
        <p>Lisbon, Portugal</p>
    </div>
  </div>
  `;

  var heroContent2 = `
    <div class="image-container" id="image-container-2" data-tilt-full-page-listening>
      <div class="image" id="image-1-1"></div>
      <div class="image" id="image-1-4"></div>
      <div class="image" id="image-1-5"></div>
      
      <div class="image" id="image-2-1"></div>
      <div class="image" id="image-2-3"></div>
      <div class="image" id="image-2-5"></div>


      <div class="image" id="image-3-3"></div>
      <div class="image" id="image-3-4"></div>
    </div>
    <div class="image-container" id="image-container-3" data-tilt-full-page-listening>
      <div class="image" id="image-1-2"></div>
      <div class="image" id="image-1-3"></div>
      

      <div class="image" id="image-2-2"></div>
      <div class="image" id="image-2-4"></div>


      <div class="image" id="image-3-1"></div>
      <div class="image" id="image-3-2"></div>
      <div class="image" id="image-3-5"></div>
    </div>

    <div class="info-container" id="info-container-2">
      <h1><img src="images/artshare.svg">Artshare <br> Festival & Conference</h1>
      <div class="slogan">
          <p>Hope for the future</p>
          <p>— Reshaping and reinventing Science <br>& Technology through the Arts</p>
      </div>
      <div class="local">
          <p>21-23.06.2022</p>
          <p>Factory, HubCreativo do Beato</p>
          <p>Lisbon, Portugal</p>
      </div>
    </div>
  `;

  var sinopseContent = `
    <div class="p-container">
      <p>Hope is the raw material that gives us purpose and sparks determination towards action. In a world of limited natural resources and a lot of uncertainty about the present and the future, pushing technological and innovation boundaries in order to build a sustainable and resilient world is an urgent necessity and a matter of survival.</p>
      <p>Artshare Festival & Conference aims to create the space for demonstrating concrete solutions based on the latest technological innovations, discussing ideas, discovering opportunities, fostering networking and collaborations among professionals, innovators and creatives who share the same flame to change and creating a future that meets the needs of present and future generations.</p>
      <p>More info soon!</p>
    </div>
  `;

 
  var logoContent = `
    <div class="logo-container">
      <img id="starts" src="images/logos/starts.svg">
      <img id="artshare" src="images/logos/artshare.svg">
      <img id="factory" src="images/logos/factory.svg">
    </div>  
  `;

  var run = document.getElementById("run");
  run.insertAdjacentHTML('afterend', logoContent);
  run.insertAdjacentHTML('afterend', sinopseContent);
  var i = Math.floor(Math.random() * 2);
  // console.log(i);

  if (i >= 1) {
    run.insertAdjacentHTML('afterend', heroContent1 );
    // console.log(1);
  } 
  else {
    run.insertAdjacentHTML('afterend', heroContent2 );
    // console.log(2);
  };
  
}


VanillaTilt.init(document.querySelector("#image-container-2"), {
  reverse:                true,  // reverse the tilt direction
  max:                    20,     // max tilt rotation (degrees)
  startX:                 0,      // the starting tilt on the X axis, in degrees.
  startY:                 0,      // the starting tilt on the Y axis, in degrees.
  perspective:            1000,   // Transform perspective, the lower the more extreme the tilt gets.
  scale:                  1,      // 2 = 200%, 1.5 = 150%, etc..
  speed:                  500,    // Speed of the enter/exit transition
  transition:             true,   // Set a transition on enter/exit.
  axis:                   null,   // What axis should be disabled. Can be X or Y.
  reset:                  true,   // If the tilt effect has to be reset on exit.
  easing:                 "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  glare:                  false,  // if it should have a "glare" effect
  "max-glare":            1,      // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
  "glare-prerender":      false,  // false = VanillaTilt creates the glare elements for you, otherwise
                                  // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
  "mouse-event-element":  null,   // css-selector or link to HTML-element what will be listen mouse events
  gyroscope:              true,   // Boolean to enable/disable device orientation detection,
  gyroscopeMinAngleX:     -45,    // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;
  gyroscopeMaxAngleX:     45,     // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;
  gyroscopeMinAngleY:     -45,    // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;
  gyroscopeMaxAngleY:     45,     // This is the top limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the bottom border of the element;
  
});

VanillaTilt.init(document.querySelector("#image-container-3"), {
  reverse:                false,  // reverse the tilt direction
  max:                    5,     // max tilt rotation (degrees)
  startX:                 0,      // the starting tilt on the X axis, in degrees.
  startY:                 0,      // the starting tilt on the Y axis, in degrees.
  perspective:            1000,   // Transform perspective, the lower the more extreme the tilt gets.
  scale:                  1,      // 2 = 200%, 1.5 = 150%, etc..
  speed:                  500,    // Speed of the enter/exit transition
  transition:             false,   // Set a transition on enter/exit.
  axis:                   null,   // What axis should be disabled. Can be X or Y.
  reset:                  true,   // If the tilt effect has to be reset on exit.
  easing:                 "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  glare:                  false,  // if it should have a "glare" effect
  "max-glare":            1,      // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
  "glare-prerender":      false,  // false = VanillaTilt creates the glare elements for you, otherwise
                                  // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
  "mouse-event-element":  null,   // css-selector or link to HTML-element what will be listen mouse events
  gyroscope:              true,   // Boolean to enable/disable device orientation detection,
  gyroscopeMinAngleX:     -45,    // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;
  gyroscopeMaxAngleX:     45,     // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;
  gyroscopeMinAngleY:     -45,    // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;
  gyroscopeMaxAngleY:     45,     // This is the top limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the bottom border of the element;
  
});

VanillaTilt.init(document.querySelector("#image-container-1"), {
reverse:                false,  // reverse the tilt direction
max:                    13,     // max tilt rotation (degrees)
startX:                 0,      // the starting tilt on the X axis, in degrees.
startY:                 0,      // the starting tilt on the Y axis, in degrees.
perspective:            1000,   // Transform perspective, the lower the more extreme the tilt gets.
scale:                  1,      // 2 = 200%, 1.5 = 150%, etc..
speed:                  1000,    // Speed of the enter/exit transition
transition:             false,   // Set a transition on enter/exit.
axis:                   null,   // What axis should be disabled. Can be X or Y.
reset:                  true,   // If the tilt effect has to be reset on exit.
easing:                 "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
glare:                  false,  // if it should have a "glare" effect
"max-glare":            1,      // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
"glare-prerender":      false,  // false = VanillaTilt creates the glare elements for you, otherwise
                                // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
"mouse-event-element":  null,   // css-selector or link to HTML-element what will be listen mouse events
gyroscope:              true,   // Boolean to enable/disable device orientation detection,
gyroscopeMinAngleX:     -45,    // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;
gyroscopeMaxAngleX:     45,     // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;
gyroscopeMinAngleY:     -45,    // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;
gyroscopeMaxAngleY:     45,     // This is the top limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the bottom border of the element;

});