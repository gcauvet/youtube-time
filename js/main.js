const getinputVal = (input) => {           
    inputVal = $(`#${input}`).val();
    return !inputVal ? 0 : inputVal;
}

const isYoutubeUrl = (url) => {

    if (url)
        return url.match(/^(http(s)??\:\/\/)?(www\.)?((youtube\.com\/watch\?v=)|(youtu.be\/))([a-zA-Z0-9\-_])+$/gi) != null ? true : `${url} is not a valid Youtube URL`;
    else
        return "Please enter a valid Youtube URL";                
}

$('.numeric').on('keypress', function(e) {
    return e.metaKey || e.which <= 0 || e.which == 8 || /[0-9]/.test(String.fromCharCode(e.which));
});

$(".keyListener").keyup(function() {

    const youtubeUrl = getinputVal('youtubeUrl'),
        minutes = getinputVal('minutes'),
        seconds = getinputVal('seconds');

    if (isYoutubeUrl(youtubeUrl) === true) {
        $("#result").val(`${youtubeUrl}&t=${minutes}m${seconds}s`);
        $(".validListener").removeClass("disabled");
        $("#goToButton").prop('href', `${youtubeUrl}&t=${minutes}m${seconds}s`);
    } else {                  
        $("#result").val(`${isYoutubeUrl(youtubeUrl)}`);
        $(".validListener").addClass("disabled");
        $("#goToButton").prop('href', "#");
    }
});

$("#copyToClipboard").on("click", function() {

    const copyText = document.querySelector("#result");

    copyText.select();
    document.execCommand("copy");
    M.toast({html: 'URL copied to clipboard!', displayLength: 2000});
});
