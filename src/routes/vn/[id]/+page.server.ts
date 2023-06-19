export async function load({ params }) {
	const requestHeaders = new Headers();
	requestHeaders.append("Content-Type", "application/json");
	
	const raw = JSON.stringify({
	  "filters": ["id","=",params.id],
	  "fields": "title, image.url, description, rating, screenshots.url"
	});
	
	let jsonResponse : any;

  const raw = JSON.stringify({
    filters: ["id", "=", params.id],
    fields: "title, image.url, description, rating, screenshots.url",
  });

  let jsonResponse: any;

  try {
    const response = await fetch("https://api.vndb.org/kana/vn", {
      method: "POST",
      headers: requestHeaders,
      body: raw,
      redirect: "follow" as RequestRedirect,
    });
    jsonResponse = await response.json();
    const results = jsonResponse.results[0];
    return { vnInfo: results };
  } catch (error) {
    console.log(error);
    return { vnInfo: null };
  }
}
