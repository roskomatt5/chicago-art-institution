///Function to get songe info when an image is clicked
let art;
let showArt;
/**
 * @param img_index
 * @param item_index
 */

async function clickedEvent(img_index, item_index) {
  // get song name
  let title =
    document.getElementsByTagName("img")[img_index].attributes[1].value;

  let headers = new Headers([
    ["Content-Type", "application/json"],
    ["Accept", "application/json"],
  ]);

  let request1 = new Request(
    `https://api.artic.edu/api/v1/artworks/search?q=query[title]=${title}`,
    { method: "GET", headers: headers }
  );
  let result1 = await fetch(request1);

  let response1 = await result1.json();
  let art_id = response1.data.filter((obj) => obj.title === title)[0].id;
  let request2 = new Request(
    `https://api.artic.edu/api/v1/artworks/${art_id}`,
    {
      method: "GET",
      headers: headers,
    }
  );
  let result2 = await fetch(request2);
  let response2 = await result2.json();

  //  Get, Title
  let art_bio = `
  Department: ${response2.data.department_title}
  Title: ${response2.data.title}
  Artist: ${response2.data.artist_title}
  Summary: ${response2.data.short_description}
`;

  return console.log(art_bio);
}

/**
 * @param id
 * @param event
 */

function getArtInfo(id, event) {
  switch (id) {
    case "fig1": {
      event.stopPropagation();
      clickedEvent(0, 0);
      break;
    }
    case "fig2": {
      event.stopPropagation();
      clickedEvent(1, 0);
      break;
    }
    case "fig3": {
      event.stopPropagation();
      clickedEvent(2, 0);
      break;
    }
    case "fig4": {
      event.stopPropagation();
      clickedEvent(3, 0);
      break;
    }
    case "fig5": {
      event.stopPropagation();
      clickedEvent(4, 0);
      break;
    }

    case "fig6": {
      event.stopPropagation();
      clickedEvent(5, 0);
      break;
    }
  }
}
