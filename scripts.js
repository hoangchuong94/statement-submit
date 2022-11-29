let successfulObj = {
    title : "successful",
    type : "successful",
    desciption : "here is something that you might like to know",
    icon : "fa-solid fa-check",
    timeDelayHide : 3
}

let errorObj = {
    title : "error",
    type : "error",
    desciption : "here is something that you might like to know",
    icon : "fa-solid fa-bug",
    timeDelayHide : 3
}


let inforObj = {
    title : "infor",
    type : "infor",
    desciption : "here is something that you might like to know",
    icon : "fa-solid fa-circle-info",
    timeDelayHide : 3
}


let warningObj = {
    title : "warning",
    type : "warning",
    desciption : "here is something that you might like to know",
    icon : "fa-solid fa-circle-exclamation",
    timeDelayHide : 3
}


let showToatst = function(obj) {
    const contentToast = document.getElementById('content-toast');

    if(contentToast) {
        const toats = document.createElement('div');
        toats.classList.add('toast', `toast--${obj.type}`);
        toats.style.animation = `slideInLeft ease 2s,fadeOut linear 3s ${obj.timeDelayHide}s forwards`;
        toats.innerHTML = `
            <div class="toast__icon ">
                <i class="toast__icon--${obj.type} ${obj.icon}"></i>
            </div>
            <div class="toast__body">
                <p class="toast__body--header">${obj.title} </p>
                <p class="toast__body--dsc">${obj.desciption}</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `;
        contentToast.appendChild(toats);


        let closeE = document.querySelector('.toast__close');

        let setimeOutId = setTimeout(function() {
            contentToast.removeChild(toats);
        }, (1000 * obj.timeDelayHide + 1000))



        if(closeE) {
            closeE.addEventListener('click',function() {
                
                contentToast.removeChild(toats);
                clearTimeout(setimeOutId)
            })
        }

        

    }
}

let successful = function() {
    showToatst(successfulObj)
}

let warning = function() {
    showToatst(warningObj)
}

let error = function() {
    showToatst(errorObj)
}

let infor = function() {
    showToatst(inforObj)
}