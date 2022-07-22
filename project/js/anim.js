var mq = window.matchMedia("(max-width: 768px)");
if (mq.matches) {

   let elements = document.querySelectorAll('.element-animation');

   for (let elm of elements) {
      elm.classList.add('element-show');
   }
}
else {
   function onEntry(entry) {
      entry.forEach(change => {
         if (change.isIntersecting) {
            change.target.classList.add('element-show');
         }
      });
   }

   let options = {
      threshold: 0.1,
   };
   var mq = window.matchMedia("(max-width: 768px)");
   if (mq.matches) {
      // window width is at less than 570px
   }
   let observer = new IntersectionObserver(onEntry, options);
   let elements = document.querySelectorAll('.element-animation');

   for (let elm of elements) {
      observer.observe(elm);
   }
}





