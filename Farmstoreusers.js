function displayFarmStoreUsers(usersArray){
    let tr="";
    for(let i=0;i<usersArray.length;i++){
        
        let user =usersArray[i];
        tr=`<tr>
            <td>${user.fname}</td>
            <td>${user.lname}</td>
            <td>${user.age}</td>
            <td>${user.gender}</td>
            <td>${user.phone}</td>
            <td>${user.payment}</td>
            <td>${user.color}</td>
            <td>${user.email}</td>
            </tr>
            `;
            
            $("#users-table").append(tr);
            
        }
        
    }
    function init(){
        console.log("listing users...")
        let users = readFarmStoreUsers();
        console.log(users);
        displayFarmStoreUsers(users);
    }
    window.onload=init;