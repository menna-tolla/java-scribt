var inputName=document.getElementById("your-name");
var inputUrl=document.getElementById("your-url");
var arrayOfContent=[];
var objectContent;
function addContent()
{
     objectContent=
    {
        yourName:inputName.value,
        yourUrl:inputUrl.value,
    }
    arrayOfContent.push(objectContent);
    localStorage.setItem("saveContent" ,JSON.stringify(arrayOfContent));
    // localStorage.clear();
    clearContent();
    displayContent();
}
function clearContent()
{
    inputName.value=null;
    inputUrl.value=null;
}
function displayContent()
{
    var cartona=" ";

    for(var i=0 ; i<arrayOfContent.length ; i++)
    {
        cartona += `<tr>
                <td>`+arrayOfContent[i].yourName+`</td>
                <td>`+arrayOfContent[i].yourUrl+`</td>


                <td><button class="button-style btn btn-outline-secondary">
                <i class="fa-regular fa-eye p-1"></i><a class="text-secondary link-underline link-underline-opacity-0" href=`+arrayOfContent[i].yourUrl+`>Visit</a> 
                </button></td>
                


                <td><button id="delet" onclick="deletContent(`+i+`)"  class="btn btn-outline-danger"><i class="fa-regular fa-trash-can"></i> Delet</button></td>

                </tr>`
    }
    document.getElementById("tableBody").innerHTML=cartona;
}
function deletContent(index)
{
     arrayOfContent.splice(index , 1);
     localStorage.setItem("saveContent" ,JSON.stringify(arrayOfContent));
displayContent();

}
if(localStorage.getItem("saveContent") != null)
{
    arrayOfContent=JSON.parse(localStorage.getItem("saveContent"));
    displayContent();
}



