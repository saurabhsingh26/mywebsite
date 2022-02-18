var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
console.log(navMenuAnchorTags);


for (var i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function (event) {
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        console.log(this.textContent);
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);
        //    interval = setInterval(scrollVertically, 20, targetSection);

        var interval = setInterval(function () {
            // scrollVertically(targetSection);
            var targetSectionCoordinates = targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top <= 0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0, 50);
        }, 20);
    });
}



// Auto fill skill bar




var progressBars = document.querySelectorAll('.skill-progress > div');
var skillContainer = document.getElementById('skill-container');
window.addEventListener('scroll',checkScroll);
var animationDone = false;

function initialBars(){
    for(let bar of progressBars){
        bar.style.width = 0 + '%';
    }
}


initialBars();

function fillBars(){
    for(let bar of progressBars){
        let targetWidth = bar.getAttribute('data-bar-width');
        let currentWidth = 0;
        let intervalForFill = setInterval(function(){
            if(currentWidth > targetWidth){
                clearInterval(intervalForFill);
                return;

            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        },10);
    }
}

function checkScroll(){
    var coordinates = skillContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top <= window.innerHeight){
        animationDone = true;
        console.log("skill section visible");
        fillBars();
    }else if(coordinates.top > window.innerHeight){
        animationDone = false;
        initialBars();
    }
}
