const googleSheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRbhxTRBOlPvSUHRA17RpLy_MW33Y1lcmvMzcG2xjQqiFVuqKIN3iwKKT8zAb9jDz63bQZ7VVNyecE5/pubhtml?gid=0&single=true';
const componentsArray = [
    { name: "header", elementId: "header" },
    { name: "hero", elementId: "hero" },
    { name: "events", elementId: "events" },
    { name: "content", elementId: "content" },
    { name: "about", elementId: "about" },
    { name: "footer", elementId: "footer" },
  ];


function fetchEvents(url) {
    fetch(url)
      .then((response) => response.text())
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const rows = Array.from(doc.querySelectorAll('table tr')).slice(3);
    
        rows.forEach((row) => {
            const columns = row.querySelectorAll('td');
    
            if (columns.length === 6) {
                const article = document.createElement('article');
                article.className = 'relative isolate flex flex-col justify-end overflow-hidden neobrut-border bg-gray-900 group';
                article.innerHTML = `
                <div class="w-full h-auto">
                <span class="flex justify-center items-center font-semibold bg-white absolute right-0 p-3 border-l-[3px] border-b-[3px] border-black">
                    ${columns[1].textContent}
                </span>
                <img src="${columns[2].textContent}" alt="" class="inset-0 w-full aspect-square object-cover">
                </div>
                <h3 class="p-3 bg-white text-lg font-semibold leading-6 text-black border-t-[3px] border-black">
                ${columns[0].textContent}
                </h3>
                <div class="absolute w-full h-full opacity-0 group-hover:opacity-100 bg-white transition-opacity duration-500 flex flex-col p-3 justify-around">
                <time class="font-semibold text-center">🕔 ${columns[3].textContent}</time>
                <p class="font-semibold text-center">📍 ${columns[4].textContent}</p>
                <p class="font-semibold text-center">⚡️ ${columns[5].textContent}</p>
                </div>
            `
                
                eventContainer.appendChild(article);
            }
        });
    
    })
    .catch((error) => {
        console.error("Error fetching data from Google Sheet:", error);
    });
}

function fetchComponents(components) {
  components.forEach((component) => {
    const { name, elementId } = component;
    fetch(`components/${name}.html`)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById(elementId) ? document.getElementById(elementId).innerHTML = data : '';
        if (elementId == 'events') {
            fetchEvents(googleSheetUrl)
        }
      });
  });
}

fetchComponents(componentsArray);