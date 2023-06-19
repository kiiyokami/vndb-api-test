export function load({ params }) {
	const myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	
	const raw = JSON.stringify({
	  "filters": [
		"id",
		"=",
		params.id // Use the vnInfo value here ("v16044")
	  ],
	  "fields": "title, image.url, description, rating, screenshots.url"
	});
	
	const requestOptions = {
	  method: 'POST',
	  headers: myHeaders,
	  body: raw,
	  redirect: 'follow' as RequestRedirect
	};
  
	return fetch("https://api.vndb.org/kana/vn", requestOptions)
	  .then(response => response.json())
	  .then(result => {
		let vnData;
		try {
		  vnData = result;
		} catch (error) {
		  if (error instanceof SyntaxError) {
			console.error('fuck this error');
		  }
		  return { vnInfoData: null };
		}
		
		// Use the vnData object for further processing or storing the extracted values
		const vnInfoData = {
		  title: vnData.results[0].title,
		  image: vnData.results[0].image,
		  description: vnData.results[0].description,
		  rating: vnData.results[0].rating,
		  screenshots: vnData.results[0].screenshots
		};
		
		return { vnInfoData };
	  })
	  .catch(error => {
		console.log('Error fetching data:', error);
		return { vnInfoData: null };
	  });
  }
  