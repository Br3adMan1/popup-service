function popup()
{
    const container=document.getElementById("container");
    
    const popElement=document.createElement("div");
    popElement.setAttribute("id","popElement");
    
    const closeButton=document.createElement("button");
    closeButton.setAttribute("id","closeButton");

    const profilePic=document.createElement("img");
    profilePic.setAttribute("id","profilePic");
    
    function open()
    {
        container.insertAdjacentElement("afterbegin",popElement);
        const openButton=document.getElementById("openButton");
        
        popElement.insertAdjacentElement("afterbegin",profilePic);
        popElement.insertAdjacentElement("afterbegin",closeButton);
        closeButton.addEventListener("click",()=>{Popup.closePopup()});
    }
    function close()
    {
        popElement.remove();
    }
    return {openPopup:open ,closePopup:close}
}

const Popup=popup();
document.getElementById("openButton").addEventListener("click",()=>{Popup.openPopup()});


