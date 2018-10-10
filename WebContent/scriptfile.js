	
function saveNewUserInfo() {
       var storednames = [{"username": "kapperar", "password1": "password", "firstname": "Ramesh", "lastname": "Kappera"}];
       localStorage.setItem('Users', JSON.stringify(obj));
       alert("User infomation saved sucessfully.");
   }

  /*To store the user data in localstorage */
  var storednames = JSON.parse(localStorage.getItem('Users'));

	
	$(document).ready(function () 
	{		
	
	//$('#finishbutton').hide();
			
	
	jQuery.validator.addMethod(
        'ContainsAtLeastTwoDigit',
        function (value) { 
            return /[0-9][0-9]/.test(value); 
        },  
        'Your password must contain at least two digits.'
    );  
	
   $('form').each(function () {
        $(this).validate({
	  	
		errorContainer: $('#errorContainer'),
   	 	errorLabelContainer: $('#errorContainer ul'),
   	 	wrapper: 'li',

       rules: 
		{
			    inst1: {
				  require_from_group: [1,".instname"]
				},
				inst2: {
				  require_from_group: [1,".instname"]				  
				},
				inst3: {
				  require_from_group: [1,".instname"]				  
				},
				inst4: {
				  require_from_group: [1,".instname"]				  
				},
				inst5: {
				  require_from_group: [1,".instname"]				  
				},
				
				accounttype1: {
				  require_from_group: [1,".accountdrop"]
				},
				accounttype2: {
				  require_from_group: [1,".accountdrop"]				  
				},
				accounttype3: {
				  require_from_group: [1,".accountdrop"]				  
				},
				accounttype4: {
				  require_from_group: [1,".accountdrop"]				  
				},
				accounttype5: {
				  require_from_group: [1,".accountdrop"]				  
				},
				
				balance1: {
				  currency: "$",
				  require_from_group: [1,".balanceclass"]
				},
				balance1: {
			      currency: "$",
				  require_from_group: [1,".balanceclass"]				  
				},
				balance1: {
					currency: "$",
				  require_from_group: [1,".balanceclass"]				  
				},
				balance1: {
					currency: "$",
				  require_from_group: [1,".balanceclass"]				  
				},
				balance1: {
					currency: "$",
				  require_from_group: [1,".balanceclass"]				  
				},
			
			firstname:{
				 required: true
		},
			lastname:{
				 required: true
		},
		 password1: {
				 required:true,
				 minlength: 8,
				 ContainsAtLeastTwoDigit:true  
        },   
		passwordconfirm:  {
			equalTo : "#password1"
			
		},		
			username:{
				 required: true,
				 minlength: 8
		}
			 
		},
				
		messages: {
					inst1:{
						require_from_group:"Please type at least 1 institution name."
					},
					inst2:{
						require_from_group:"Please type at least 1 institution name."
					},
					inst3:{
						require_from_group:"Please type at least 1 institution name."
					},
					inst4:{
						require_from_group:"Please type at least 1 institution name."
					},
					inst5:{
						require_from_group:"Please type at least 1 institution name."
					},	

					accounttype1:{
						require_from_group:"Please select at least 1 account name."
					},
					accounttype2:{
						require_from_group:"Please select at least 1 account name."
					},
					accounttype3:{
						require_from_group:"Please select at least 1 account name."
					},
					accounttype4:{
						require_from_group:"Please select at least 1 account name."
					},
					accounttype5:{
						require_from_group:"Please select at least 1 account name."
					},

					balance1:{
						require_from_group:"Please type your balance for the account."
					},
					balance2:{
						require_from_group:"Please type your balance for the account."
					},
					balance3:{
						require_from_group:"Please type your balance for the account."
					},
					balance4:{
						require_from_group:"Please type your balance for the account."
					},
					balance5:{
						require_from_group:"Please type your balance for the account."
					},
						   
					firstname:{ 
					required:"Please enter your firstname." 
							  },

					lastname:{ 
					required:"Please enter your lastname." 
							  },
					username:{ 
					required:"Please enter your username.",
					minlength: "Your username has to be more than 8 characters."
							  },	 
							  
					password1:{ 
					required:"Please enter your password.",
					minlength:"Your password has to be more than 8 characters."
							  },
				    passwordconfirm : {
                    equalTo: "Please enter the same password as above."
                }
		},
		
		groups: {
            inputGroup: "inst1 inst2 inst3 inst4 inst5",   
			selectGroup: "accounttype1 accounttype2 accounttype3 accounttype4 accounttype5",
			inputGroup2: "balance1 balance2 balance3 balance4 balance5",
        },
		
		/*
		submitHandler: function(form) 
		{
			form.validate();
			
			alert( "Valid: " + form.valid() );
			
			form.submit();   
		} */
				  			
        });
   });
    });