const saveName=() => {
    const name=document.getElementById("name").value; 
    const email=document.getElementById("email").value;
    // localStorage.setItem(email, name);
    // alert("Name and email saved successfully!");

    const userData = {name, email}
    localStorage.setItem(name, JSON.stringify(userData));
}

const storedItem = localStorage.getItem("Mahib")
console.log(JSON.parse(storedItem))

const handleClear =() => {
    localStorage.clear();
}