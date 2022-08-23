let currentSlide = 0;
let text = document.getElementById('text');
const slides = document.querySelectorAll('.slide')
const dots = document.querySelectorAll('.dot')

//Main gallery slideshow
// function init (index) {
//   slides.forEach((slide, index) => {
//     slide.style.display = "none"
//     dots.forEach((dot, index) => {
//       dot.classList.remove("active")
//     })
//   })
//   slides[index].style.display = "block"
//   dots[index].classList.add("active")
//   //console.log(isInViewport(dots[index]))
//   console.log(index)
//   if(isInViewport(dots[index+1]) === false){
//     dots[index].scrollIntoView({behavior:'smooth', block: 'nearest', inline:'start'})    
//   }else{
//     console.log('we fine')
//   }
//}

//document.addEventListener("DOMContentLoaded", init(currentSlide))

//IF GALLERY IN FRAME, START SLIDESHOW TEST
//blurred until in frame then unblur AND START SLIDESHOW!!!!!
//observed element
// const imageContainer = document.querySelector('#container')

// //observer options
// const options = {
//   root: null,
//   rootMargin: '0px',
//   threshold: 0.7,
// }

// //callback function to execute during observe
// const callback = (entries, observer) => {
//   //target first entry available
//   let observedElement = entries[0]

//   //log observer entry data
//   console.log(observedElement)

//   //add and remove the blur
//   if(observedElement.isIntersecting){
//     observedElement.target.style.filter = 'blur(0px)'
//     startSlideShow(currentSlide)
//     document.querySelector(".next").addEventListener('click', next)
//     document.querySelector(".prev").addEventListener('click', prev)
//     document.querySelector(".slide-container").addEventListener("mouseenter", stop)
//     document.querySelector(".dots-container").addEventListener("mouseenter", stop)
//     document.querySelector(".slide-container").addEventListener("mouseleave", startSlideShow)
//     document.querySelector(".dots-container").addEventListener("mouseleave", startSlideShow)
//   }else{
//      observedElement.target.style.filter = 'blur(10px)'
//      stop()
//      document.querySelector(".next").removeEventListener('click', next)
//     document.querySelector(".prev").removeEventListener('click', prev)
//     document.querySelector(".slide-container").removeEventListener("mouseenter", stop)
//     document.querySelector(".dots-container").removeEventListener("mouseenter", stop)
//     document.querySelector(".slide-container").removeEventListener("mouseleave", startSlideShow)
//     document.querySelector(".dots-container").removeEventListener("mouseleave", startSlideShow)
//   }
// }

// //construct intersection observer
// const observer = new IntersectionObserver(callback, options)

// //observe if element is present
// if(imageContainer){
//   observer.observe(imageContainer)
//   }

// //next slide arrow button
// const next = (e) => {
//     if(e){
//       e.preventDefault()}
//     currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++
//     init(currentSlide)
//   }
// //previous slide arrow button
// const prev = (e) => {
//     e.preventDefault()
//     currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--
//     init(currentSlide)
// }
  
// // document.querySelector(".next").addEventListener('click', next)
// // document.querySelector(".prev").addEventListener('click', prev)

// //start gallery slideshow on load
// var intervalID;
// function startSlideShow(){
//   intervalID = setInterval(next, 3000)
// }

// //stopping slideshow when mouse enters gallery window or thumbnail window
// // document.querySelector(".slide-container").addEventListener("mouseenter", stop)
// // document.querySelector(".dots-container").addEventListener("mouseenter", stop)

// function stop(){
//   clearInterval(intervalID);
// }

//restarting slideshow when mouse leaves window or thumbnail window
// document.querySelector(".slide-container").addEventListener("mouseleave", startSlideShow)
// document.querySelector(".dots-container").addEventListener("mouseleave", startSlideShow)

//thumbnails click to selected image
// dots.forEach((dot, i) => {
//   dot.addEventListener("click", () => {
//     init(i)
//     currentSlide = i
//     console.log(currentSlide)
//   })
// })

// //having alt text appear when mouse in image window
// for (var i = 0; i < slides.length; i++) {
//   slides[i].addEventListener("mouseenter", function() {
//     var alt = this.alt;
//     text.textContent = alt;
//     text.style.display = "inline"
//   });
//   slides[i].addEventListener("mouseleave", function() {
//     var alt = this.alt;
//     text.textContent = '';
//     text.style.display = "none"
//   });
// }

// //TRYING TO GET ARROWS ON THUMBNAILS TO CYCLE SETS OF IMAGES
// // function isInViewport(el) {
// //     const rect = el.getBoundingClientRect();
// //     return (
// //         rect.top >= 0 &&
// //         rect.left >= 0 &&
// //         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
// //         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
// //     );
// // }

// const nextThumbs = (e) => {
//     e.preventDefault()
//     document.querySelector(".nextThumbs").addEventListener("click", stop)
//     document.querySelector('.dots-container').scrollBy({left: 300, behavior: 'smooth'})
// }
  
// const prevThumbs = (e) => {
//     e.preventDefault()
//     document.querySelector(".prevThumbs").addEventListener("click", stop)
//     document.querySelector('.dots-container').scrollBy({left: -300, behavior: 'smooth'})
// }
  
// document.querySelector(".nextThumbs").addEventListener('click', nextThumbs)
// document.querySelector(".prevThumbs").addEventListener('click', prevThumbs)

//ACCORDION TOGGLE Q AND A
document.addEventListener('DOMContentLoaded', function(event) {
    var question = document.getElementsByClassName('question')
    var answer = document.getElementsByClassName('answer')
  
    for(var i=0; i < question.length; i++){
      question[i].onclick = function() {
        var setClasses = !this.classList.contains('active')
        setClass(question, 'active', 'remove')
        setClass(answer, 'show', 'remove')
        if (setClasses){
          this.classList.toggle('active')
          this.nextElementSibling.classList.toggle('show')
        }
      }
    }
    function setClass(element, className, fnName){
      for( var i = 0; i < element.length; i++){
        element[i].classList[fnName](className)
      }
    }
})