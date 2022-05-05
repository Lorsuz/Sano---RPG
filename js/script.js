let time = 3000,
currentImageIndex = 0,
images = document.querySelectorAll( "#slider div" );
max = images.length;

function nextImage ()
{

    images[ currentImageIndex ].classList.remove( "selected" );

    currentImageIndex++;

    if ( currentImageIndex >= max )
        currentImageIndex = 0;

    images[ currentImageIndex ].classList.add( "selected" );
}

function start ()
{
    setInterval( () =>
    {
        // troca de image
        nextImage();
    }, time );
}

window.addEventListener( "load", start );









// let menu = false;
// function menuFooter()
// {
//     var content = document.getElementById( "content" );
//     if ( menu )
//     {
//         menu = !menu;
//         content.style.height = "0px";
//         content.style.animation = "animationn 0.6s";
//     } else
//     {
//         menu = !menu;
//         content.style.height = "auto";
//         content.style.animation = "animation 0.6s";
//     }
// }
