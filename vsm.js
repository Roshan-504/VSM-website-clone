function slideshow(){    
    document.getElementById("slideshowImages").src = arr[i];
    i = i + 1;
    if (i===6){
        i=0;
    }
}

function alumniSlideshow(){
    document.getElementById("thought").innerHTML = alth[j];
    document.getElementById("alumni-img").src = alim[j];
    document.getElementById("alumni-name").innerHTML = alname[j];

    j = j + 1;
    if (j===4){
        j=0;
    }
}


let i = 0
const arr = ["https://vsmthane.org/wp-content/uploads/2024/04/Admission_Slider.jpeg",
            "https://vsmthane.org/wp-content/uploads/2022/06/VSM-Thane-NGO-slider-1.jpg",
            "https://vsmthane.org/wp-content/uploads/2022/06/VSM-Thane-NGO-slider-2.jpg",
            "https://vsmthane.org/wp-content/uploads/2023/08/Home-slider-3.2.jpg",
            "https://vsmthane.org/wp-content/uploads/2022/06/VSM-Thane-NGO-slider-4.jpg",
            "https://vsmthane.org/wp-content/uploads/2022/06/VSM-Thane-NGO-slider-5.jpg"];

setInterval(slideshow,3000);

const alth = ["I must mention here that during my journey of 6 years at VSM, my KPs and others inculcated a sense of discipline in me along with giving me strength & confidence to follow my dreams of making a career in Uniform forces.",    
              "VSM gave me wings to fly and fulfll my dreams. It helped me learn life-skills, develop consciousness and consolidate my values. VSM will always remain close to my heart",
            "I decided to pursue B.Ed.( in intellectual disability). I had no money, no help, wasn't fluent in English and had no psychology background. But VSM stepped in and helped me in pursuing my dream! I am indeed grateful to God, to my parents, to my teachers, to my friends and to the entire VSM family for being with me through my journey.",
             "Since the first day, I have received lot of love, mentoring, best habits for life and valuable life lessons from VSM",
            ]

           
const alim = ["https://vsmthane.org/wp-content/uploads/2022/06/Home-page-testimonials-Sandeep-Padwal-512x1024-300x300.jpeg",
              "https://vsmthane.org/wp-content/uploads/2022/06/Home-page-testimonials-Bharat-729x1024-300x300.jpg",
              "https://vsmthane.org/wp-content/uploads/2022/06/Home-page-testimonials-Trupti-80x80.jpg",
            "https://vsmthane.org/wp-content/uploads/2022/06/Home-page-testimonials-Gauri-300x300.jpg"];

const alname = ["Sandeep Padwal,","Bharat Kadam,","Trupti Gaikwad,","Gauri Vaidya,"]

let j =0;
setInterval(alumniSlideshow,3000);



// **************************   scroll revel  *************************

ScrollReveal({
    distance: "80px",
    duration: 1000,
    delay: 100,
    reset:true,
});


ScrollReveal().reveal('.updates h4, .updates p, .involved', { origin: "bottom" });
ScrollReveal().reveal('.what-we-do-div', { origin: "right" });
ScrollReveal().reveal('.updates-image', { scale: 0.95 });
ScrollReveal().reveal('.mainheading, .subheading, .headingdivider, .vsm-vedio, .uppercompanys, .lowercompanys, .more-info, .find-out-more', { distance: "0px",opacity: "0.1",duration: "1500" });


// ********************* Count up ***************

$(document).ready(function(){
    $(".counter").counterUp({
        delay:10,
        time: 1200
    })
});