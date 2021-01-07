$(document).ready(function() {

    // var allIcons =$('.icons');
    // var currentIcon = 0;

    // function showIcons(){
    //     if(currentIcon == allIcons.length -1) {
    //         currentIcon = 0;
    //     } else {
    //         currentIcon++;
    //     }
    //     $(allIcons[currentIcon]).show(5000);
    //     // $('.icons').show(5000);
    // }
    // showIcons();

    // var iconTimer = setInterval(showIcons, 2000);

(function(){ 
    $('.camera').click(function(){
        $(this).find('text-1').slideDown();
    });

    $('.camera').mouseleave(function(){
        $(this).find('.text-1').slideUp();
    })
       })();

  (function(){ 

            jQuery(".single-content-area").hover(function(){
                jQuery(this).find(".hidden-content").slideDown();
            })

            jQuery(".single-content-area").mouseleave(function(){
                jQuery(this).find(".hidden-content").slideUp();
            })
             
        })();



    // $('.klant').on("click", function(){
    //     $('text-1').toggle(1000)
    // });


    // $('.camera').hover(function(){
    //     $('#info').append(`<div class="camera-text">hoi`);
    // }, function(){
    //     $('.camera-text').css("display", "none");
    // });


    });


    // var icons = document.querySelectorAll('.icons');
    // var counter = 0;
    // var info = [ '1', '2', '3', '4', '5', '6', '7', '8', '9' ];

    // // console.log(info)

    // icons.forEach(function(test){
    //     console.log(test)
    //     showInfo

    // });

    // function showInfo(){
    //     info.forEach(function(test){
    //         console.log(test)
    //     });
    // }



    // function showIconText() {
        // for (i = 0; i < icons.length; i++) 
        //     if (counter = 4) {
        //         console.log('structuur')
                
        //     console.log('test' + counter++)
        //     console.log(info)
        // }
    // }   
    // showIconText();
 

    

//     console.log(info[0].text)



// $.each(info, function(){
//     $('.icons').hover(function(){
//         console.log('hebbes!')
//         $('#info').append(`<div class="camera-text">${this.text}</div>`); 
//     // }, function(){
//     //     $('$(this.text)').css("display", "none");
//     });

// });

    
// });