        var modal = document.getElementById('myModal');
        var btn = document.getElementById("btnconnect");
        var span = document.getElementsByClassName("close")[0];
        
        btn.onclick = function(){
            modal.style.display = "block";
        }
        
        span.onclick = function(){
            modal.style.display = "none";
        }
        
        window.onclick = function(event){
            if(event.target == modal){
                modal.style.display = "none";
            }
            if(event.target == modalSave){
                modalSave.style.display = "none";
            }
        }
        
        var modalSave = document.getElementById('myModal-save');
        var btnSave = document.getElementById("btnSave");
        var spanSave = document.getElementsByClassName("close-save")[0];
        
        btnSave.onclick = function(){
            modalSave.style.display = "block";
        }
        
        spanSave.onclick = function(){
            modalSave.style.display = "none";
        }
        
//        window.onclick = function(event){
//            if(eventSave.target == modalSave){
//                modalSave.style.display = "none";
//            }
//        }