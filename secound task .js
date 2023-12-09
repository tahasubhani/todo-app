let form =  document.getElementById('form')
let ul= document.getElementById('ul')
let data = localStorage.getItem('todo');
    ul.innerHTML = data;


form.addEventListener('submit',function(e){
    e.preventDefault()
        let input= document.getElementById('input')
        if(input.value == '' ){
        alert('kindly enter the todo')
        }else{
            let li=document.createElement('li')
            li.innerHTML= '<p>'+input.value+'</p><button><i class="fa-solid fa-xmark"></i></button>';
            ul.append(li);
            input.value =''
            store_data()
        }
 });


let lis = document.querySelectorAll('li')
let length =  lis.length;
    
for(let i=0;i<length;i++){
    let li =lis[i];        
    let p =li.children[0];
        p.addEventListener('click',function(){
        this.classList.toggle('complete');
        store_data();           
});

let button =li.children[1];
button.addEventListener('click',function(){    
            lis[i].remove();
            store_data();        
            
        });
        }
            function store_data(){
            localStorage.setItem('todo',ul.innerHTML)
        }
