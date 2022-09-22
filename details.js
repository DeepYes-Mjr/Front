
 function showImg(){

    var MainImg = document.getElementById('MainImg');
    var smallimg = document.getElementsByClassName('small-img');

    smallimg[0].onclick = function() {
        MainImg.src = smallimg[0].src;
        console.log('0');
    }

    smallimg[1].onclick = function() {
        MainImg.src = smallimg[1].src;
        console.log('1');
    }

    smallimg[2].onclick = function() {
        MainImg.src = smallimg[2].src;
        console.log('2');
    }

    smallimg[3].onclick = function() {
        MainImg.src = smallimg[3].src;
        console.log('3');
    }

    smallimg[4].onclick = function() {
        MainImg.src = smallimg[4].src;
        console.log('4');
    }
 }
