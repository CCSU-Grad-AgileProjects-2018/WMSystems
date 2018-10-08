		
	$(document).ready(function () 
	{		 	
    $('#form1').validate(
		{ 
	  	
		errorContainer: $('#errorContainer'),
   	 	errorLabelContainer: $('#errorContainer ul'),
   	 	wrapper: 'li',

       rules: 
		{
			firstname:{
				 required: true
		},
			lastname:{
				 required: true
		},
		 password1: {
				 required:true
        },   
		passwordconfirm:  {
			equalTo : "#password1"
			
		},
		
			username:{
				 required: true
		}
			 
		},
				
		messages: {
					firstname:{ 
					required:"Please enter your firstname." 
							  },
					lastname:{ 
					required:"Please enter your lastname." 
							  },
					username:{ 
					required:"Please enter your username." 
							  },
					password1:{ 
					required:"Please enter your password." 
							  },
				    passwordconfirm : {
                    equalTo: "Please enter the same password as above."
                }
		},
				  			
        });

    });