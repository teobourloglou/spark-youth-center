const sheetUrl =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRbhxTRBOlPvSUHRA17RpLy_MW33Y1lcmvMzcG2xjQqiFVuqKIN3iwKKT8zAb9jDz63bQZ7VVNyecE5/pub?gid=0&single=true&output=csv";

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
                .then((csv) => {
                    this.decodeEvents(csv);
                })
                .catch((error) => {
                    console.error("Error fetching data from Google Sheet:", error);
                });
        },

        decodeEvents(csv) {
            const rows = csv.trim().split("\n");

            const dataRows = rows.slice(1).map(this.splitCSVRow);

            const { previousEvents, upcomingEvents } = this.processRows(dataRows);

            this.saveEventsToCache("cachedPreviousEvents", previousEvents);
            this.saveEventsToCache("cachedUpcomingEvents", upcomingEvents);

            this.previousEvents = previousEvents;
            this.upcomingEvents = upcomingEvents;
        },

        splitCSVRow(row) {
            const regex = /("([^"]|"")*"|[^,]+)/g;
            return row.match(regex).map(cell =>
                cell.replace(/^"|"$/g, "").replace(/""/g, '"').trim()
            );
        },

        processRows(rows) {
            const previousEvents = [];
            const upcomingEvents = [];

            rows.forEach(columns => {
                const eventDetails = this.extractEventDetails(columns);

                const eventDate = this.parseEventDate(eventDetails.date);
                if (!eventDate) {
                    console.error("Invalid date format:", eventDetails.date);
                    return;
                }

                if (this.isUpcomingEvent(eventDate)) {
                    upcomingEvents.push(eventDetails);
                } else {
                    previousEvents.push(eventDetails);
                }
            });

            return { previousEvents, upcomingEvents };
        },

        extractEventDetails(columns) {
            return {
                title: columns[0],
                date: columns[1],
                image: columns[2],
                time: columns[3],
                location: columns[4],
                description: columns[5],
            };
        },

        parseEventDate(dateStr) {
            // expects format: DD/MM/YYYY
            const match = dateStr.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
            if (!match) return null;

            const [ , day, month, year ] = match.map(Number);
            return new Date(year, month - 1, day);
        },

        isUpcomingEvent(eventDate) {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            return eventDate >= today;
        },

        saveEventsToCache(key, data) {
            localStorage.setItem(key, JSON.stringify({ data, timestamp: Date.now() }));
        }

    };
};