function addMore()  {
                       document.getElementById('error').innerHTML = "";

                       let work=document.getElementById('work').value;
                       if (work == ' ') {
                                              document.getElementById('error').innerHTML="please enter value";

                       } else {
                                              let box=document.getElementById('box');
                                              let li=document.createElement('li');
                                              li.textContent = work;


                                              let a=document.createElement('a');
                                              a.textContent = "x";
                                              a.href="javascript:void(0)";


                                              a.className="remove";
                                              li.appendChild(a);
                                              let pos=box.firstElementChild;
                                              if (pos==null) {
                                                                     box.appendChild(li);
                                              } else {
                                                                     box.insertBefore(li,pos);
                                              }



                       }


document.getElementById('work').value = " ";
}

let btn=document.querySelector('ul');
btn.addEventListener('click',function(e){
                       let box=document.getElementById('box');

                       let li=e.target.parentNode;
                       box.removeChild(li);


});

