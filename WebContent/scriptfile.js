	
/* LocalStorage for sign up page */	
	function saveNewUserInfo() {
       var storednames = [{"username": "kapperar", "password1": "password", "firstname": "Ramesh", "lastname": "Kappera"}];
       localStorage.setItem('Users', JSON.stringify(obj));
       alert("User infomation saved sucessfully.");
   }

  /*To store the user data in localstorage */
  var storednames = JSON.parse(localStorage.getItem('Users'));
  
  var modalConfirm = function(callback){
  
  $("#btn-confirm").on("click", function(){
    $("#mi-modal").modal('show');
  });

  $("#modal-btn-si").on("click", function(){
    callback(true);
    $("#mi-modal").modal('hide');
  });
  
  $("#modal-btn-no").on("click", function(){
    callback(false);
    $("#mi-modal").modal('hide');
  });
};

modalConfirm(function(confirm){
  if(confirm){
    //Acciones si el usuario confirma
    $("#result").html("CONFIRMADO");
  }else{
    //Acciones si el usuario no confirma
    $("#result").html("NO CONFIRMADO");
  }
});

	
	$(document).ready(function () 
	{				
	
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
				
				currentbalancedollar1: {
				  currency: "$",
				  require_from_group: [1,".currentbalanceclass"]
				},
				currentbalancedollar2: {
			      currency: "$",
				  require_from_group: [1,".currentbalanceclass"]				  
				},
				currentbalancedollar3: {
					currency: "$",
				  require_from_group: [1,".currentbalanceclass"]				  
				},
				currentbalancedollar4: {
					currency: "$",
				  require_from_group: [1,".currentbalanceclass"]				  
				},
				currentbalancedollar5: {
					currency: "$",
				  require_from_group: [1,".currentbalanceclass"]				  
				},
				
				currentbalancecents1: {
				  currency: "$",
				  require_from_group: [1,".currentbalanceclass2"]
				},
				currentbalancecents2: {
			      currency: "$",
				  require_from_group: [1,".currentbalanceclass2"]				  
				},
				currentbalancecents3: {
					currency: "$",
				  require_from_group: [1,".currentbalanceclass2"]				  
				},
				currentbalancecents4: {
					currency: "$",
				  require_from_group: [1,".currentbalanceclass2"]				  
				},
				currentbalancecents5: {
					currency: "$",
				  require_from_group: [1,".currentbalanceclass2"]				  
				},
				
				expectbalance1: {
				  currency: "$",
				  require_from_group: [1,".expectbalanceclass"]
				},
				expectbalance2: {
			      currency: "$",
				  require_from_group: [1,".expectbalanceclass"]				  
				},
				expectbalance3: {
					currency: "$",
				  require_from_group: [1,".expectbalanceclass"]				  
				},
				expectbalance4: {
					currency: "$",
				  require_from_group: [1,".expectbalanceclass"]				  
				},
				expectbalance5: {
					currency: "$",
				  require_from_group: [1,".expectbalanceclass"]				  
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
						require_from_group:"Please enter at least 1 institution name."
					},
					inst2:{
						require_from_group:"Please enter at least 1 institution name."
					},
					inst3:{
						require_from_group:"Please enter at least 1 institution name."
					},
					inst4:{
						require_from_group:"Please enter at least 1 institution name."
					},
					inst5:{
						require_from_group:"Please enter at least 1 institution name."
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
					
					currentbalancedollar1:{
						require_from_group:"Please enter your current balance for the account in correct format."
					},
					currentbalancedollar2:{
						require_from_group:"Please enter your current balance for the account in correct format."
					},
					currentbalancedollar3:{
						require_from_group:"Please enter your current balance for the account in correct format."
					},
					currentbalancedollar4:{
						require_from_group:"Please enter your current balance for the account in correct format."
					},
					currentbalancedollar5:{
						require_from_group:"Please enter your current balance for the account in correct format."
					},
					
					currentbalancecents1:{
						require_from_group:"Please enter your current balance for the account in correct format."
					},
					currentbalancecents2:{
						require_from_group:"Please enter your current balance for the account in correct format."
					},
					currentbalancecents3:{
						require_from_group:"Please enter your current balance for the account in correct format."
					},
					currentbalancecents4:{
						require_from_group:"Please enter your current balance for the account in correct format."
					},
					currentbalancecents5:{
						require_from_group:"Please enter your current balance for the account in correct format."
					},


					expectbalance1:{
						require_from_group:"Please enter your expected balance for the account."
					},
					expectbalance2:{
						require_from_group:"Please enter your expected balance for the account."
					},
					expectbalance3:{
						require_from_group:"Please enter your expected balance for the account."
					},
					expectbalance4:{
						require_from_group:"Please enter your expected balance for the account."
					},
					expectbalance5:{
						require_from_group:"Please enter your expected balance for the account."
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
			inputGroup2: "expectbalance1 expectbalance2 expectbalance3 expectbalance4 expectbalance5",
			inputGroup3: "currentbalancedollar1 currentbalancedollar2 currentbalancedollar3 currentbalancedollar4 currentbalancedollar5",
            inputGroup4: "currentbalancecents1 currentbalancecents2 currentbalancecents3 currentbalancecents4 currentbalancecents5",
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