


const buildURL = function()
{
    const searchterm = $('#searchterm').val().trim();
    const numrecords = $('#numrecords').val();
    const startyear = $('#startyear').val();
    const endyear = $('#endyear').val();

    // let queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=obama&facet_fields=source&facet=true&begin_date=20120101&end_date=20121231&api-key=yRa1XTmdJTa3dXmCuFMuMI5aOWUikUvy`
    let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + "?q=" + searchterm+"&begin-date=" + startyear+"&end-date=" + endyear +"&api-key=yRa1XTmdJTa3dXmCuFMuMI5aOWUikUvy";
    // queryURL.append("?q="+searchterm+"&begin-date=" + startyear+"end-date=" + endyear +"&apr-key=yRa1XTmdJTa3dXmCuFMuMI5aOWUikUvy");
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        // Method type is 'GET' because we are retrieving data
        method: 'GET'
    }).then(function(response) {
        // Console log the response
        console.log(queryURL);
        $('#content').empty();
        console.log(response);
        $('#content').append(response.status);
        $('#content').append(response.response.docs[4]);
    
    
    });
    $('#searchterm').val('');
    $('#numrecords').val('');
    $('#startyear').val('');
    $('#endyear').val('');

}

const Clearscreen = function()
{
    $('#searchterm').val('');
    $('#numrecords').val('');
    $('#startyear').val('');
    $('#endyear').val('');
    $('#content').empty();}

$('#Search').on('click', buildURL);
$('#Clear').on('click', Clearscreen);