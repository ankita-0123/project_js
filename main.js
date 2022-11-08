function showNewUserOnScreen(user){
    document.getElementById('name').value = '';
    document.getElementById('amount').value = '';
    document.getElementById('category').value ='';
    document.getElementById('date').value ='';

    if(localStorage.getItem(user.name) !== null){
        removeUserFromScreen(user.name)
    }

    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li id=${user.name}> ${user.amount} - ${user.name}
                            <button onclick=deleteUser('${user.name}')> Delete User </button>
                            <button onclick=editUserDetails('${user.name}','${user.amount}','${user.category}'.'${user.date}')>Edit User </button>
                         </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}


function editUserDetails(name, amount, category, date){

    document.getElementById('name').value = name;
    document.getElementById('amount').value = amount;
    document.getElementById('category').value =category;
    document.getElementById('date').value =date;


    deleteUser(name)
 }

function deleteUser(name)
function removeUserFromScreen(name){
    const parentNode = document.getElementById('listOfUsers');
    const childNodeToBeDeleted = document.getElementById(name);

    parentNode.removeChild(childNodeToBeDeleted)
    if(childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted)
    }
}