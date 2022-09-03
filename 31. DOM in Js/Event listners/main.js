// event listners

const revelBtn = document.querySelector(".revel-btn");

const hiddenContent = document.querySelector('.hidden-content')

function revelContent(){
    if(hiddenContent.classList.contains('revel-btn')){
        hiddenContent.classList.remove('revel-btn')
    }else{
        hiddenContent.classList.add('revel-btn')
    }
}

// revelBtn.addEventListener('click', revelContent);

// revelBtn.addEventListener("click", function(e) {
//     console.log(e.target.innerText = "clicked!")
// }, true);



// e.target

const target = document.querySelector(".btn-target");
target.addEventListener("click", function(e){
    // What is "e" ?
    // console.log(e);

    if(e.ctrlKey){
        console.log("CTRL key was pressed while")
    }
})