const sheetUrl =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRbhxTRBOlPvSUHRA17RpLy_MW33Y1lcmvMzcG2xjQqiFVuqKIN3iwKKT8zAb9jDz63bQZ7VVNyecE5/pubhtml?gid=0&single=true";

/**
 * Fetch and load components into specified element IDs.
 *
 * @param {Array} components - An array of component objects with 'name' and 'elementId' properties.
 * @returns {void}
 */
const fetchComponents = (components) => {
    components.forEach((component) => {
        const { name, elementId } = component;
        fetch(`components/${name}.html`)
            .then((response) => response.text())
            .then((data) => {
                const element = document.getElementById(elementId);
                element ? element.innerHTML = data : '';
            });
    });
};

/**
 * Creates an object containing methods to manage event data, including loading,
 * caching, decoding, and fetching events.
 *
 * @returns {Object}
 */
const data = () => {
    return {
        switcher: translationSwitcher(),
        previousEvents: {},
        upcomingEvents: {},

        loadData() {
            const cachedPreviousEvents = this.getCachedData("cachedPreviousEvents");
            const cachedUpcomingEvents = this.getCachedData("cachedUpcomingEvents");

            if (this.isCacheValid(cachedPreviousEvents)) {
                this.previousEvents = cachedPreviousEvents.data;
                this.upcomingEvents = cachedUpcomingEvents.data;
            } else {
                this.fetchEventsData();
            }
        },

        getCachedData(key) {
            return JSON.parse(localStorage.getItem(key)) || {
                data: [],
                timestamp: 0,
            };
        },

        isCacheValid(cachedData) {
            const cacheExpiration = 300000;
            const { data, timestamp } = cachedData;

            return data.length > 0 && (Date.now() - timestamp) < cacheExpiration;
        },

        fetchEventsData() {
            fetch(sheetUrl)
                .then((response) => response.text())
                .then((html) => {
                    this.decodeEvents(html);
                })
                .catch((error) => {
                    console.error("Error fetching data from Google Sheet:", error);
                });
        },

        decodeEvents(html) {
            const sanitizedHTML = DOMPurify.sanitize(html);
            const doc = new DOMParser().parseFromString(sanitizedHTML, "text/html");
            const rows = Array.from(doc.querySelectorAll("table tr")).slice(3);

            const { previousEvents, upcomingEvents } = this.processRows(rows);

            this.saveEventsToCache("cachedPreviousEvents", previousEvents);
            this.saveEventsToCache("cachedUpcomingEvents", upcomingEvents);

            this.previousEvents = previousEvents;
            this.upcomingEvents = upcomingEvents;
        },

        processRows(rows) {
            const previousEvents = [];
            const upcomingEvents = [];

            rows.forEach((row) => {
                const columns = row.querySelectorAll("td");
                const match = columns[1].textContent.match(/(\d{1,2})\/(\d{1,2})/);

                if (match) {
                    const [eventDay, eventMonth] = match.slice(1).map(Number);
                    const eventDetails = this.extractEventDetails(columns);

                    if (this.isUpcomingEvent(eventDay, eventMonth)) {
                        upcomingEvents.push(eventDetails);
                    } else {
                        previousEvents.push(eventDetails);
                    }
                } else {
                    console.error("Date format does not match.");
                }
            });

            return { previousEvents, upcomingEvents };
        },

        extractEventDetails(columns) {
            return {
                title: columns[0].textContent,
                date: columns[1].textContent,
                image: columns[2].textContent,
                time: columns[3].textContent,
                location: columns[4].textContent,
                description: columns[5].textContent,
            };
        },

        isUpcomingEvent(eventDay, eventMonth) {
            const currentDay = (new Date()).getDate();
            const currentMonth = (new Date()).getMonth() + 1;
            return eventMonth > currentMonth || (eventMonth === currentMonth && eventDay >= currentDay);
        },

        saveEventsToCache(key, data) {
            localStorage.setItem(key, JSON.stringify({ data, timestamp: Date.now() }));
        }
    };
};