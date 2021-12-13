// import img1 from './images/img1.jpg'
// import img2 from './images/img2.jpg'
// import img3 from './images/img3.jpg'
const reviews = [
    {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: './images/img1.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur omnis architecto voluptatem! Tempore eius inventore dolorem, itaque voluptatem facilis voluptatum. Ad doloribus, perspiciatis molestias minus unde culpa quam perferendis!'
    },
    {
    id: 2,
    name: 'john doe',
    job: 'designer',
    img: './images/img2.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur omnis architecto voluptatem! Tempore eius inventore dolorem, itaque voluptatem facilis voluptatum. Ad doloribus, perspiciatis molestias minus unde culpa quam perferendis!'
    },
    {
    id: 3,
    name: 'max mustermann',
    job: 'data scientitst',
    img: './images/img3.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur omnis architecto' },
];

//select item
const img = document.querySelector('#person-img');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info=document.querySelector('#info');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn= document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn')

//set starting items

let currentItem=0;

//load intial item
window.addEventListener('DOMContentLoaded', function(){
    showPerson(currentItem)
   
});

//show person based on item
function showPerson(person){
    
    const item=reviews[person];
    console.log(img);
    img.src= item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
}
