
/* Display the alert message box for the delete account option */
	function confirmbox1(){
	document.getElementById('id_confrmdiv').style.display="block"; 

	document.getElementById('id_truebtn').onclick = function(){
   //do your delete operation
   
   };

	document.getElementById('id_falsebtn').onclick = function(){
     
	 
	document.getElementById('id_confrmdiv').style.display="none";
	
   return false;
};
}

function addGoal(){
        arr = document.getElementsByClassName("GoalForm");
        if (arr.length < 5){
            const copy = arr[0].cloneNode(true);
            document.body.appendChild(copy);
        }        
    }
	
    function checkDateAndSubmission(event){
        event.preventDefault();
        const el = event.target; // get element user clicked
        const parent = el.parent; //get element parent
        const goalNum = document.body.children.indexOf(parent);
        const data = parent.children.split(-1);
        const goalName = data[0];
        const goalDate = data[1];
        const amountNeeded = data[2];
        //if(GoalDate){
         //   $.ajax.post()
        //}

        const str = JSON.stringify({
        goalName: goalName,
        goalDate: GoalDate,
        amountNeeded: amountNeeded,
        goalNum:goalNum
    })
    }
	
	
	$(document).ready(function ()  
	{	
	$(function() {
   // $('.date-picker').datepicker( {
	   $('.date-picker').datepicker( {
        changeMonth: true,
        changeYear: true,
        showButtonPanel: true,
        dateFormat: 'MM yy',
        onClose: function(dateText, inst) {         
            
            
            function isDonePressed(){
                            return ($('#ui-datepicker-div').html().indexOf('ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all ui-state-hover') > -1);
                        }

                        if (isDonePressed()){

                            var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
                            var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
                            $(this).datepicker('setDate', new Date(year, month, 1));
                             console.log('Done is pressed')

                        }
            
            
          
        }
    });
});

	
		
	$('#ebalance1').keyup(function() {			
    if($(this).val() == '')
	{
        $('#gotogoals1').hide();
    }else{
        $('#gotogoals1').show();
    }
	})
	$('#ebalance2').keyup(function() {			
    if($(this).val() == '')
	{
        $('#gotogoals2').hide();
    }else{
        $('#gotogoals2').show();
    }
	})
	$('#ebalance3').keyup(function() {			
    if($(this).val() == '')
	{
        $('#gotogoals3').hide();
    }else{
        $('#gotogoals3').show();
    }
	})
	$('#ebalance4').keyup(function() {			
    if($(this).val() == '')
	{
        $('#gotogoals4').hide();
    }else{
        $('#gotogoals4').show();
    }
	})
	$('#ebalance5').keyup(function() {			
    if($(this).val() == '')
	{
        $('#gotogoals5').hide();
    }else{
        $('#gotogoals5').show();
    }
	})


	
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
	
	
	