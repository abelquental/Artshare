var offsetHeight = document.getElementById('menu-nav').offsetHeight;

(function(document, history, location) {
    var HISTORY_SUPPORT = !!(history && history.pushState);

    console.log(offsetHeight);

    var anchorScrolls = {
        ANCHOR_REGEX: /^#[^ ]+$/,
        OFFSET_HEIGHT_PX: offsetHeight,

        /**
         * Establish events, and fix initial scroll position if a hash is provided.
         */
        init: function() {
            this.scrollToCurrent();
            window.addEventListener('hashchange', this.scrollToCurrent.bind(this));
            document.body.addEventListener('click', this.delegateAnchors.bind(this));
        },

        /**
         * Return the offset amount to deduct from the normal scroll position.
         * Modify as appropriate to allow for dynamic calculations
         */
        getFixedOffset: function() {
            return this.OFFSET_HEIGHT_PX;
        },

        /**
         * If the provided href is an anchor which resolves to an element on the
         * page, scroll to it.
         * @param  {String} href
         * @return {Boolean} - Was the href an anchor.
         */
        scrollIfAnchor: function(href, pushToHistory) {
            var match, rect, anchorOffset;

            if (!this.ANCHOR_REGEX.test(href)) {
                return false;
            }

            match = document.getElementById(href.slice(1));

            if (match) {
                rect = match.getBoundingClientRect();
                anchorOffset = window.pageYOffset + rect.top - this.getFixedOffset();
                window.scrollTo(window.pageXOffset, anchorOffset);

                // Add the state to history as-per normal anchor links
                if (HISTORY_SUPPORT && pushToHistory) {
                    history.pushState({}, document.title, location.pathname + href);
                }
            }

            return !!match;
        },

        /**
         * Attempt to scroll to the current location's hash.
         */
        scrollToCurrent: function() {
            this.scrollIfAnchor(window.location.hash);
        },

        /**
         * If the click event's target was an anchor, fix the scroll position.
         */
        delegateAnchors: function(e) {
            var elem = e.target;

            if (
                elem.nodeName === 'A' &&
                this.scrollIfAnchor(elem.getAttribute('href'), true)
            ) {
                e.preventDefault();
            }
        }
    };

    window.addEventListener(
        'DOMContentLoaded', anchorScrolls.init.bind(anchorScrolls)
    );
})(window.document, window.history, window.location);



if (window.location.pathname == 'index.html') {
    document.querySelector(".info-container").style.marginTop = offsetHeight + "px";
} else if (window.location.pathname == 'program.html') {
    document.getElementById("program-wrapper").style.marginTop = offsetHeight + "px";

    // Fetch data
    getData();
    async function getData() {
        const response = await fetch('/data.json');
        const data = await response.json();
        showList(data);
    }

    let programList = document.getElementById("program-wrapper");

    // Show initial list
    function showList(data) {
        data.forEach((item, i) => {

            let dayList28 = document.getElementById("day-28");
            let dayList29 = document.getElementById("day-29");
            let dayList30 = document.getElementById("day-30");

            if (item.day == "28") {
                dayList28.insertAdjacentHTML(
                    'beforeend',
                    `<div data-aos="fade" class="program-list-item" id="program-list-item-${i}">
                    <div class="session-item">
                        <div class="hour-location-container">
                            <div class="hour">${item.hour}</div>
                            <div class="location">${item.sessionLocation}</div>
                        </div>
                        <div class="title-type-container">
                            <div class="title title-${i}">${item.sessionTitle}</div>
                            <div class="type type-${i}">${item.sessionType}</div>
                        </div>
                        <button class="more more-${i}">more info</button>
                    </div>
                    <div id="speaker-container-${i}" class="speaker-container hide"></div>
                </div>`
                );
                for (var speakerCount = 0; speakerCount < item.speakerName.length; speakerCount++) {
                    document.getElementById("speaker-container-" + i).insertAdjacentHTML(
                        'beforeend',
                        `<div data-aos="fade" class="speaker-item" id="speaker-item-${[speakerCount]}">
                        <div class="speaker-info-container">
                            <a href="${item.speakerLink[speakerCount]}" target="_blank" class="name">${item.speakerName[speakerCount]}</a>
                            <div class="position">${item.speakerPosition[speakerCount]}</div>
                            <div class="bio">${item.speakerBio[speakerCount]}</div>
                        </div>
                        <div class="photo" style="background-image: url(${item.speakerPhoto[speakerCount]})"></div>
                    </div>`
                    );
                }

                var typeDiv = document.querySelector(".type-" + i);
                var titleDiv = document.querySelector(".title-" + i);

                if (typeDiv.textContent === "0") {
                    titleDiv.classList.add("no-type");
                    typeDiv.style.display = "none";
                } else {
                    console.log(typeDiv + "do not delete");
                }

                var moreBtn = document.querySelector(".more-" + i);
                var speakerDiv = document.getElementById("speaker-container-" + i);

                function showSpeaker() {
                    // console.log(speakerDiv);
                    speakerDiv.classList.toggle("hide");


                    if (speakerDiv.classList.contains("hide")) {
                        moreBtn.textContent = "more info";
                    } else {
                        moreBtn.textContent = "close";
                    }

                }


                moreBtn.addEventListener("click", showSpeaker);





            } else if (item.day == "29") {
                dayList29.insertAdjacentHTML(
                    'beforeend',
                    `<div data-aos="fade" class="program-list-item" id="program-list-item-${i}">
                    <div class="session-item">
                        <div class="hour-location-container">
                            <div class="hour">${item.hour}</div>
                            <div class="location">${item.sessionLocation}</div>
                        </div>
                        <div class="title-type-container">
                            <div class="title title-${i}">${item.sessionTitle}</div>
                            <div class="type type-${i}">${item.sessionType}</div>
                        </div>
                        <button class="more more-${i}">more info</button>
                    </div>
                    <div id="speaker-container-${i}" class="speaker-container hide"></div>
                </div>`
                );
                for (var speakerCount = 0; speakerCount < item.speakerName.length; speakerCount++) {
                    document.getElementById("speaker-container-" + i).insertAdjacentHTML(
                        'beforeend',
                        `<div data-aos="fade" class="speaker-item" id="speaker-item-${[speakerCount]}">
                        <div class="speaker-info-container">
                            <a href="${item.speakerLink[speakerCount]}" target="_blank" class="name">${item.speakerName[speakerCount]}</a>
                            <div class="position">${item.speakerPosition[speakerCount]}</div>
                            <div class="bio">${item.speakerBio[speakerCount]}</div>
                        </div>
                        <div class="photo" style="background-image: url(${item.speakerPhoto[speakerCount]})"></div>
                    </div>`
                    );
                }

                var typeDiv = document.querySelector(".type-" + i);
                var titleDiv = document.querySelector(".title-" + i);

                if (typeDiv.textContent === "0") {
                    titleDiv.classList.add("no-type");
                    typeDiv.style.display = "none";
                } else {
                    console.log(typeDiv + "do not delete");
                }

                var moreBtn = document.querySelector(".more-" + i);
                var speakerDiv = document.getElementById("speaker-container-" + i);

                function showSpeaker() {
                    // console.log(speakerDiv);
                    speakerDiv.classList.toggle("hide");


                    if (speakerDiv.classList.contains("hide")) {
                        moreBtn.textContent = "more info";
                    } else {
                        moreBtn.textContent = "close";
                    }

                }


                moreBtn.addEventListener("click", showSpeaker);



            } else {
                dayList30.insertAdjacentHTML(
                    'beforeend',
                    `<div data-aos="fade" class="program-list-item" id="program-list-item-${i}">
                    <div class="session-item">
                        <div class="hour-location-container">
                            <div class="hour">${item.hour}</div>
                            <div class="location">${item.sessionLocation}</div>
                        </div>
                        <div class="title-type-container">
                            <div class="title title-${i}">${item.sessionTitle}</div>
                            <div class="type type-${i}">${item.sessionType}</div>
                        </div>
                        <button class="more more-${i}">more info</button>
                    </div>
                    <div id="speaker-container-${i}" class="speaker-container hide"></div>
                </div>`
                );
                for (var speakerCount = 0; speakerCount < item.speakerName.length; speakerCount++) {
                    document.getElementById("speaker-container-" + i).insertAdjacentHTML(
                        'beforeend',
                        `<div class="speaker-item" id="speaker-item-${[speakerCount]}">
                        <div class="speaker-info-container">
                            <a href="${item.speakerLink[speakerCount]}" target="_blank" class="name">${item.speakerName[speakerCount]}</a>
                            <div class="position">${item.speakerPosition[speakerCount]}</div>
                            <div class="bio">${item.speakerBio[speakerCount]}</div>
                        </div>
                        <div class="photo" style="background-image: url(${item.speakerPhoto[speakerCount]})"></div>
                    </div>`
                    );
                }

                var typeDiv = document.querySelector(".type-" + i);
                var titleDiv = document.querySelector(".title-" + i);

                if (typeDiv.textContent === "0") {
                    titleDiv.classList.add("no-type");
                    typeDiv.style.display = "none";
                } else {
                    console.log(typeDiv + "do not delete");
                }

                var moreBtn = document.querySelector(".more-" + i);
                var speakerDiv = document.getElementById("speaker-container-" + i);

                function showSpeaker() {
                    // console.log(speakerDiv);
                    speakerDiv.classList.toggle("hide");


                    if (speakerDiv.classList.contains("hide")) {
                        moreBtn.textContent = "more info";
                    } else {
                        moreBtn.textContent = "close";
                    }

                }


                moreBtn.addEventListener("click", showSpeaker);

            };

            // programList.insertAdjacentHTML(
            //     'beforeend',
            //     `<div data-aos="fade" class="program-list-item" id="program-list-item-${i}">
            //         <div class="hour">${item.hour}</div> 
            //     <div class="listed-project" id="proj-${i}">${item.speakerName[speakerCount]}</div>

            //       </div>`
            // );





            //     `<div data-aos="fade" class="program-list-item" id="program-list-item-${i}">
            //     <div class="hour">${item.hour}</div> 
            // <div class="listed-project" id="proj-${i}">${item.speakerName[speakerCount]}</div>

            //   </div>`




        });
    }


} else if (window.location.pathname == 'concept.html') {
    document.querySelector(".info-container").style.marginTop = offsetHeight + "px";
} else if (window.location.pathname == 'tickets.html') {
    document.querySelector(".info-container").style.marginTop = offsetHeight + "px";
};

AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 0,
    throttleDelay: 99,
    offset: 0,
    delay: 20,
    duration: 1000,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-left',
});