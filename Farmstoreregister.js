function User(firstname,lastname,age,gender,phone,payment,color,email,password){
    this.fname=firstname;
    this.lname=lastname;
    this.age=age;
    this.gender=gender;
    this.phone=phone;
    this.payment=payment;
    this.color=color;
    this.email=email;
    this.password=password;
}
function validation(user){
    let valid = true;
    if(user.email==""){
        valid = false;
        $("#txtEmail").addClass("alert-error");
    }

    return valid;
}
function validation(user){
    let valid = true;
    if(user.password==""){
        valid = false;
        $("#txtPassword").addClass("alert-error");
    }
    return valid;
}
let inputFname = $("#txtFirstName");
    let inputLname = $("#txtLastName");
    let inputAge = $("#txtAge");
    let inputGender = $("#txtGender");
    let inputPhone = $("#txtPhone");
    let inputPayment = $("#selPayment");
    let inputColor = $("#selColor");
    let inputEmail = $("#txtEmail");
    let inputPassword = $("#txtPassword");
function register(){
        let newUser=new User(inputFname.val(),inputLname.val(),inputAge.val(),inputGender.val(),inputPhone.val(),inputPayment.val(),inputColor.val(),inputEmail.val(),inputPassword.val());
        if(validation(newUser)==true){
        saveFarmStoreUser(newUser);
        $("input").val("");
        }
        
        
}
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
    $("#btnAdd").click(register);

}

window.onload=init;
