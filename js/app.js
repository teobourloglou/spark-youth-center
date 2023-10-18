const sheetUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRbhxTRBOlPvSUHRA17RpLy_MW33Y1lcmvMzcG2xjQqiFVuqKIN3iwKKT8zAb9jDz63bQZ7VVNyecE5/pubhtml?gid=0&single=true";

/**
 * Fetch events from a google sheet URL and return each one in an HTML format.
 *
 * @param {string} url - The URL that the fetch request will be sent.
 * @param {boolean} limited - Whether to limit the number of displayed events (default is false).
 * @returns {void}
 */
const fetchEvents = (url, limited = false) => {
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const rows = Array.from(doc.querySelectorAll("table tr")).slice(3);
      const currentDate = new Date();
      const currentDay = currentDate.getDate();
      const currentMonth = currentDate.getMonth() + 1;
      let numberOfEvents = 0;

      rows.forEach((row) => {
        if (limited && numberOfEvents > 9) {
          return;
        }

        const columns = row.querySelectorAll("td");
        const match = columns[1].textContent.match(/(\d{1,2})\/(\d{1,2})/);

        if (match) {
          const [eventDay, eventMonth] = match.slice(1).map(Number);

          if (
            (eventMonth > currentMonth ||
              (eventMonth === currentMonth && eventDay >= currentDay)) &&
            columns.length === 6
          ) {
            const event = createEventHTML(columns);
            eventContainer.appendChild(event);
            numberOfEvents++;
          }
        } else {
          console.error("Date format does not match.");
        }
      });
    })
    .catch((error) => {
      console.error("Error fetching data from Google Sheet:", error);
    });
};

/**
 * Create HTML for an event based on column data.
 *
 * @param {NodeList} columns - The columns containing event data.
 * @returns {HTMLElement} The event HTML element.
 */
function createEventHTML(columns) {
  const [title, date, image, time, location, description] = columns;

  const event = document.createElement("article");
  event.className =
    "relative flex flex-col justify-end overflow-hidden bg-gray-900 aspect-1/2 carousel-item isolate rounded-xl group";
  event.innerHTML = `
    <div class="w-full h-auto">
        <img src="${image.textContent}" alt="" class="inset-0 w-full aspect-1/2 object-cover">
    </div>
    <div class="absolute bottom-2 lg:bottom-4 z-20 flex flex-col items-center gap-5 w-full p-3 text-center group-hover:-translate-y-8 transition-all !duration-1000">
        <h3 class="text-3xl font-dela leading-7 text-white ">${title.textContent}</h3>
        <hr class="w-[72px] border-b-[3px] border-flame">
        <p class="text-xl text-white">${date.textContent}</p>
    </div>
    <div class="absolute w-full h-full opacity-25 group-hover:opacity-75 bg-black transition-opacity !duration-1000"></div>
    <div class="absolute w-full h-2/3 z-10 top-0 flex flex-col p-3 text-white justify-around opacity-0 group-hover:opacity-100 transition-opacity !duration-1000">
        <time class="font-semibold  text-center">🕔 ${time.textContent}</time>
        <p class="font-semibold  text-center">📍 ${location.textContent}</p>
        <p class="font-semibold  text-center">⚡️ ${description.textContent}</p>
    </div>`;

  return event;
}

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
        if (element) {
          element.innerHTML = data;
          if (name === "allEvents") {
            fetchEvents(sheetUrl);
          } else if (name === "someEvents") {
            fetchEvents(sheetUrl, true);
          }
        }
      });
  });
};
