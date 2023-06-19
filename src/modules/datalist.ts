export async function getListofVNs() {
  const requestHeaders = new Headers();
  requestHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    user: "u225866",
    fields: "id, vote,vn.id, vn.title",
    filters: ["label", "=", 7],
    sort: "vote",
    reverse: true,
    results: 30,
  });
  
  let vnArray: any = [];
  let jsonResponse: any;
  try {
    const response = await fetch("https://api.vndb.org/kana/ulist", {
      headers: requestHeaders,
      body: raw,
      redirect: "follow" as RequestRedirect,
      method: "POST",
    });
    jsonResponse = await response.json();
    const result = jsonResponse.results;

    for (let i = 0; i < result.length; i++) {
      const element = result[i];
      vnArray.push({ id: element.id, title: element.vn.title });
    }
    return vnArray;
  } catch (error) {
    console.log(error);
    return vnArray;
  }
}
