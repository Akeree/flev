let section_a = document.getElementById('section-a').scrollHeight;
console.log(section_a);

let section_b = document.getElementById('section-b').scrollHeight;
console.log(section_b);

let section_c = document.getElementById('section-c').scrollHeight;
console.log(section_c);

let floating_text = document.getElementById('floating-text');
let floating_plus1 = document.getElementById('floating-plus1');
let floating_plus2 = document.getElementById('floating-plus2');

console.log(window.scrollY);
console.log(floating_plus1);
if(window.scrollY > section_a ){
    console.log('tes');
    floating_text.style.color = "white";
    floating_plus1.style.backgroundColor = "white";
    floating_plus2.style.backgroundColor = "white";
}
else if(window.scrollY >= (section_a + section_b)){
    floating_text.style.color = "black";
    floating_plus1.style.backgroundColor = "black";
    floating_plus2.style.backgroundColor = "black";
}
else{
    floating_text.style.color = "white";
    floating_plus1.style.backgroundColor = "white";
    floating_plus2.style.backgroundColor = "white";

}
    



// if(window.scrollY >= section_a ){
//     floating_text.classList.add('white-text');
//     floating_plus1.classList.add('white-plus');
//     floating_plus2.classList.add('white-plus');

// }
// else if(window.scrollY >= (section_a + section_b)){
//     floating_text.classList.remove('white-text');
//     floating_plus1.classList.remove('white-plus');
//     floating_plus2.classList.remove('white-plus');
// }
// else
//     floating_text.classList.add('white-text');
//     floating_plus1.classList.add('white-plus');
//     floating_plus2.classList.add('white-plus');

