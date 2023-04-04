// $(document).ready(function(){
//     $('#my-paragraph').text('goff');
// });

// const title = document.querySelector('.hero__title');
// window.addEventListener('load', () => {
//   title.style.opacity = 1;
//   title.style.transform = 'translateY(0)';
// });
const carousel = document.getElementById("carouselExampleControls");

carousel.addEventListener("slide.bs.carousel", function(event) {
  if (event.to === 0) { // If the first slide is active
    const cardTitle = document.querySelector(".title_one");
    const cardContent = document.querySelector(".text_one");
    cardTitle.innerText = "Identity Crisis";
    cardContent.innerHTML = `Discovering your true identity can be a challenging journey. Learn how to overcome an identity crisis in our latest blog post. <a href="#" class="btn btn-primary rounded-pill px-4 py-2 mt-3 hover-translate">Read More</a>`;
  }
});

carousel.addEventListener("slid.bs.carousel", function(event) {
  if (event.to === 1) { // If the second slide is active
    const cardTitle = document.querySelector(".title_one");
    const cardContent = document.querySelector(".text_one");
    cardTitle.innerText = "Know Yourself";
    cardContent.innerHTML = `Unlock the secrets of your personality and discover your true self. Take our personality quiz now and embark on a journey of self-discovery.<br> <a href="#" class="btn btn-primary rounded-pill px-4 py-2 mt-3 hover-translate">Start Quiz</a>`;


  }
});


carousel.addEventListener("slide.bs.carousel", function(event) {
  if (event.to === 0) { // If the first slide is active
    const cardTitle = document.querySelector(".title_two");
    const cardContent = document.querySelector(".text_two");
    cardTitle.innerText = "Why mental stress?";
    cardContent.innerHTML = `Mental stress in teenagers is a common issue that can have various causes and consequences. Some of the common causes of mental stress in teenagers include academic pressure, social relationships, family problems, bullying, trauma, and emotional instability....<br><a href="#" class="btn btn-primary rounded-pill px-4 py-2 mt-3 hover-translate">Read more</a>`;
  }
});

carousel.addEventListener("slid.bs.carousel", function(event) {
  if (event.to === 1) { // If the second slide is active
    const cardTitle = document.querySelector(".title_two");
    const cardContent = document.querySelector(".text_two");
    cardTitle.innerText = "Addiction";
    cardContent.innerHTML = `Addiction is a serious issue that can affect anyone, including teenagers. Teenagers are more susceptible to addiction due to several factors such as peer pressure, lack of proper guidance, and curiosity...<br> <a href="#" class="btn btn-primary rounded-pill px-4 py-2 mt-3 hover-translate">Read more</a>`;


  }
});
carousel.addEventListener("slide.bs.carousel", function(event) {
    if (event.to === 0) { // If the first slide is active
      const cardTitle = document.querySelector(".title_three");
      const cardContent = document.querySelector(".text_three");
      cardTitle.innerText = "Job stress";
      cardContent.innerHTML = `Choose a job that matches your interests and skills: Finding a job that aligns with your interests and skills can help make the work more enjoyable, 
      and you may be less likely to experience stress.<br>  
      <a href="#" class="btn btn-primary rounded-pill px-4 py-2 mt-3 hover-translate">Read more</a>`;
    }
  });
  
  carousel.addEventListener("slid.bs.carousel", function(event) {
    if (event.to === 1) { // If the second slide is active
      const cardTitle = document.querySelector(".title_three");
      const cardContent = document.querySelector(".text_three");
      cardTitle.innerText = "Happiness has dimensions";
      cardContent.innerHTML = `When a teenager does a job that matches their interest or skills, it can lead to a sense of happiness and fulfillment.Believe me, there are dimensions of happiness...<br> <a href="#" class="btn btn-primary rounded-pill px-4 py-2 mt-3 hover-translate"> Read more</a>`;
  
  
    }
  });
  