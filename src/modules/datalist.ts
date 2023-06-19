var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "user": "u225866",
  "fields": "id, vote,vn.id, vn.title",
  "filters": [
    "label",
    "=",
    7
  ],
  "sort": "vote",
  "reverse": true,
  "results": 30
});

var requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow' as RequestRedirect,
  };
  
  fetch("https://api.vndb.org/kana/ulist", requestOptions)
    .then(response => response.json())
    .then(data => {
      vnList = data;

    })
    .catch(error => console.log('error', error));

    export let vnList: any;