// async function fetchData() {

// }
async function fetchData() {
    const url = 'https://today-in-history.p.rapidapi.com/thisday';
    const options = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': 'be2d36b9f8mshb9e04f32b801e75p116d73jsnbed1ecaaf595',
		    'X-RapidAPI-Host': 'today-in-history.p.rapidapi.com'
	    }
    };
    // '8338713a89msh410ff30ae80c437p1938f3jsn0d109fce68ba' <-- key will generaged , ^^key jerry generated

    // console.log(options);
    // console.log(result['title']);


    try {
	    const response = await fetch(url, options);
	    const result = await response.text();
	    console.log(result);
        const results = JSON.parse(result);
        console.log(results.article.date);
        console.log(results.article.title);
        console.log(results.article.url);
        document.getElementById("facts").innerHTML = results.article.title;
        document.getElementById("info").innerHTML = `Learn more: ${results.article.url}`;
    } catch (error) {
	    console.error(error);
    }

    // const response = await fetch(url, options);
    // const result = await response.text();
    // console.log(result.article.title);
}
fetchData();



/*
async function fetchData() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '[INSERT API KEY]',
            'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
        }
    };
    
    const res = await fetch('https://concerts-artists-events-tracker.p.rapidapi.com/location?name=Toronto&minDate=2022-10-09&maxDate=2022-10-12&page=1', options)
    const record = await res.json()

    document.getElementById("concerts").innerHTML = record.data.map(item => `<li>${item.name}</li>`).join('');
}
fetchData(); 
*/