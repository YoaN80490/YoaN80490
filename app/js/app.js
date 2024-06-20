
const app = {

    projectList: null,
    currentproject:null,
    leftBtn: null,
    rightBtn: null,

    init: function(){
        app.bind();
    },

    bind: function(){
        app.projectList = document.querySelectorAll(".project");
        app.leftBtn = document.getElementById("left-btn");
        app.rightBtn = document.getElementById("right-btn");
        console.log(app.projectList);

        app.leftBtn.addEventListener("click",app.handleSlide);
        app.rightBtn.addEventListener("click",app.handleSlide);
    },

    handleSlide: function(event){

        const index = app.findCurrentIndex();


            app.projectList[index[0]].classList.remove("current");
            app.projectList[index[1]].classList.remove("current");

            if(event.currentTarget.id === "left-btn"){

                
                if(index[0] === 0){
                    app.projectList[app.projectList.length - 1].classList.add("current");
                    app.projectList[app.projectList.length - 2].classList.add("current");
                }
                else{
                    app.projectList[index[1]- 1].classList.add("current");
                    app.projectList[index[0]- 1].classList.add("current");
                }
            }

            
            if(event.currentTarget.id === "right-btn"){
                
                if(index[index.length - 1] === app.projectList.length - 1){
                    app.projectList[0].classList.add("current");
                    app.projectList[1].classList.add("current");
                }
                else{
                    app.projectList[index[1]+ 1].classList.add("current");
                    app.projectList[index[0]+ 1].classList.add("current");
                }
            }
    },

    findCurrentIndex: function(){
        let currentIndex = [];
        for(let index = 0; index <= app.projectList.length - 1; index++) {
            if(app.projectList[index].classList.contains("current"))
            {
                currentIndex.push(index); 
            }
        }
        return currentIndex;
    }
}

document.addEventListener("DOMContentLoaded", app.init);