
const sections =document.querySelectorAll('.section-1');
sections.forEach(div => {
  const img = div.querySelector('img');

  div.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.2)";
  });

  div.addEventListener("mouseleave", () => {
    img.style.transform = "none";
  });
});


const section =document.querySelectorAll('.section-2');
section.forEach(div => {
  const img = div.querySelector('img');

  div.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.2)";
  });

  div.addEventListener("mouseleave", () => {
    img.style.transform = "none";
  });
});

