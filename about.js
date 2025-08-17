function contactform(){
    
    const contactform = document.getElementById("contactform");
    console.log(contactform.classList)
    if (contactform.classList.contains("hidden")){
            contactform.classList.remove("hidden");
    } else{
        contactform.classList.add("hidden");
    }

}
