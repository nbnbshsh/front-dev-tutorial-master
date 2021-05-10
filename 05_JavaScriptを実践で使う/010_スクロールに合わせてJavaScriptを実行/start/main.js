const child = document.querySelector('.child');
const cb = function(entries,observer){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      console.log('inview');
      entry.target.classList.add('inview');

    }else{
      console.log('out view')
      entry.target,classList.remove('inview');
    }
  });
  // alert('intersecting');
}
const io = new IntersectionObserver(cb);
io.observe(child);