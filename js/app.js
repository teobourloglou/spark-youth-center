const googleSheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRbhxTRBOlPvSUHRA17RpLy_MW33Y1lcmvMzcG2xjQqiFVuqKIN3iwKKT8zAb9jDz63bQZ7VVNyecE5/pubhtml?gid=0&single=true';
const componentsArray = [
    { name: "header", elementId: "header" },
    { name: "hero", elementId: "hero" },
    { name: "allEvents", elementId: "allEvents" },
    { name: "someEvents", elementId: "someEvents" },
    { name: "content", elementId: "content" },
    { name: "about", elementId: "about" },
    { name: "footer", elementId: "footer" },
  ];


function fetchEvents(url, only8) {
    fetch(url)
      .then((response) => response.text())
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const rows = Array.from(doc.querySelectorAll('table tr')).slice(3);

        let numberOfPosts = 0;
    
        rows.forEach((row) => {
            if (only8 && numberOfPosts > 9) {
                return;
            }

            const columns = row.querySelectorAll('td');
    
            if (columns.length === 6) {
                const article = document.createElement('article');
                article.className = 'relative flex flex-col justify-end overflow-hidden bg-gray-900 isolate rounded-xl group';
                article.innerHTML = `
                <div class="w-full h-auto">
                    <img src="${columns[2].textContent}" alt="" class="inset-0 w-full aspect-1/2 object-cover">
                </div>
                <div class="absolute bottom-12 z-20 flex flex-col items-center gap-5 w-full p-3 text-center group-hover:-translate-y-12 transition-all duration-1000">
                    <h3 class=" text-3xl font-dela leading-6 text-white ">${columns[0].textContent}</h3>
                    <hr class="w-[72px] border-b-[3px] border-flame">
                    <p class="text-xl text-white">${columns[1].textContent}</p>
                </div>
                <div class="absolute w-full h-full  opacity-25 group-hover:opacity-75 bg-black transition-opacity duration-1000"></div>
                <div class="absolute w-full h-2/3 z-10 top-0 flex flex-col p-3 text-white justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                    <time class="font-semibold text-center">🕔 ${columns[3].textContent}</time>
                    <p class="font-semibold text-center">📍 ${columns[4].textContent}</p>
                    <p class="font-semibold text-center">⚡️ ${columns[5].textContent}</p>
                </div>
            `
                
                eventContainer.appendChild(article);
                numberOfPosts++;
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
        if (name == 'allEvents') {
            fetchEvents(googleSheetUrl, false);
        } else if (name == 'someEvents') {
            fetchEvents(googleSheetUrl, true);
        }
      });
  });
}