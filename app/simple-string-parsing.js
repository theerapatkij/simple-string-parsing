function getLongestWord(input) {

    if($.trim(input) != '') {

        var patt = /[A-Za-z]+(?:-{1}[A-Za-z]+)*/g;

        var match = input.match(patt);
        if(match != null) {
            var longestLength = match.reduce((longestLength, currentWord) => longestLength > currentWord.length ? longestLength : currentWord.length, 0);

            const result = match.filter(word => word.length == longestLength);

            return result[0];
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}


function getSumDigits(input) {
    if($.trim(input) != '') {
        var patt = /\d/g;

        var match = input.match(patt);
        if(match != null){
            var sum = match.reduce((currentSum, currentValue) => parseInt(currentSum) + parseInt(currentValue), 0);

            return sum;
        }
        else{
            return false;
        }

    }
    else{
        return false;
    }
}