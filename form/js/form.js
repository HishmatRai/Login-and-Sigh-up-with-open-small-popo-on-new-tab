function SaveInOnePlace(gatName,gatLastName,gatMobNum,gatCnic,gatAddress,gatEmail,gatDateOfBirth){
    this.gatName = gatName;
    this.gatLastName = gatLastName;
    this.gatMobNum = gatMobNum;
    this.gatCnic = gatCnic;
    this.gatAddress = gatAddress;
    this.gatEmail = gatEmail;
    this.gatDateOfBirth = gatDateOfBirth;  
    };
    
    var arryForGetData = [];
    function buttonForSubmit(){


        var gatName = document.getElementById("name").value;
        var gatLastName = document.getElementById("lastname").value;
        var gatMobNum = document.getElementById("mobNumber").value;
        var gatCnic = document.getElementById("cnic").value;
        var gatAddress = document.getElementById("address".value);
        var gatEmail = document.getElementById("email").value;
       var gatDateOfBirth = document.getElementById("birthday").value;

        
        var deta1 = new SaveInOnePlace(gatName,gatLastName,gatMobNum,gatCnic,gatAddress,gatEmail,gatDateOfBirth);
        arryForGetData.push(deta1);
        console.log(arryForGetData);
        localStorage.setItem("user",JSON.stringify(arryForGetData));
    document.getElementById("reseatData").reset();
    }

