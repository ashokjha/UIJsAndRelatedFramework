			//-------THE ACTUAL OBJECTS BEING TESTED-------\\
			
			Date.prototype.Compare=function(date){
				if(date==null)
					return null;
				var ms = this.getTime();
				var dateMs = date.getTime();
				if(ms==dateMs)
					return 0;
				if(ms>dateMs)
					return -1;
				if(ms<dateMs)
					return 1;				
			}
            
			Date.prototype.CalculateAge=function(age){
				if(this.Compare(age)!=-1)
					return 0;
				var age = this.getUTCFullYear()-age.getUTCFullYear();
				if(this.getUTCMonth()>age.getUTCMonth())
					return age;
				if(this.getUTCMonth()<age.getUTCMonth())
					return age-1;
				if(this.getUTCDate()<age.getUTCDate())
					return age-1;
				return age;
			}

            Date.prototype.getFullMonth = function(){
                var months = ["January", "February","March", "April","May", "June","July", "August","September", "October","November", "December"];
                if(arguments.length > 0 && arguments[0]){
                    return months[this.getMonth()].substring(0,3);
                }
                return months[this.getMonth()];
            }
			
			
			
			var mockDate = new Date("January 1, 2000 12:00:00");
			module("Tests for a custom Date Compare Using "+ mockDate.toUTCString());
			test("Testing A Date Prior To", function () {
				var priorDate = new Date("January 1, 1962 12:00:00");
				equal(mockDate.Compare(priorDate), -1, "The date compared ("+ priorDate.toUTCString() +") is before, so -1 should have been returned");
			});
			test("Testing A Date After", function () {
				var priorDate = new Date("February 1, 2000 12:00:00");
				equal(mockDate.Compare(priorDate), 1, "The date compared ("+ priorDate.toUTCString() +") is after, so 1 should have been returned");
			});
			test("Testing A Date Equivalent To", function () {				
				equal(mockDate.Compare(mockDate), 0, "The date compared ("+ mockDate.toUTCString() +") is the same time, so 0 should have been returned");
			});
			
			
			
			module("Tests for a custom Age Calculation Using "+ mockDate.toUTCString());
			
			test("Testing A Date of Birth", function () {
				var dob = new Date("January 1, 1962 12:00:00");
				var expectedAge = 38;
				equal(mockDate.CalculateAge(dob), expectedAge, "The person with DOB "+ dob.toUTCString() +" should be "+expectedAge);
			});
			
			test("Testing A Date of Birth after", function () {
				var dob = new Date("January 1, 2001 12:00:00");
				equal(mockDate.CalculateAge(dob), 0, "The person with DOB "+ dob.toUTCString() +" was not born by"+ mockDate.toUTCString());
			});
			
			test("Testing A Date Of Birth where the month has yet to pass", function () {
				var dob = new Date("February 1, 1962 12:00:00");
				var expectedAge = 37;
				equal(mockDate.CalculateAge(dob), expectedAge, "The person with DOB "+ dob.toUTCString() +" should be "+expectedAge);
			});



			module( "TESTING HTML Structure" );

			$.each( { div: "#testArea"}, function( type, selector ) {
				test( "Verify specific element exists in: " + type, function() {
					expect( 5 ); //Tells QUnit to expect five tests
					var element = $( selector );
					
					ok( element.find( "#access" ), "Test area has an area to display whether access is granted" );
					
					notEqual( element.find( "#access" ).attr("style").indexOf("display: none"), -1,
						"By default the area to display whether access is granted should not be displayed" ); //The way this test is displayed is a bit confusing, but it works
						
					equal( element.find( "input[type=text]" ).length, 1,"has an input field" );
					
					equal( element.find( "input[type=button]" ).length, 1, "has a button" );
					
					deepEqual( element.find( "#dob" ).next().get(), element.find( "#checkAge" ).get(), "Ensures button is right after input field" );
				});
			});




			module( "TESTING Functionality" );

			test( "Submitting various dates of birth to ensure the appropriate response is displayed", function() {
				expect( 4 ); 
				
				testWithBirthday("");
				notEqual( $( "#access" ).attr("style").indexOf("display: none"), -1, "When NO dob is entered the access granted display area should be hidden" ); 
				
				testWithBirthday("October 10, 2000");				
				equal( $( "#access" ).attr("style").indexOf("display: none"), -1, "When a dob is entered the access granted display are should be displayed" ); 
				equal( $( "#access" ).html(), "You are not old enough", "When a dob is entered for a person under 18 the access granted area should tell them they're not old enough" ); 
				
				testWithBirthday("October 10, 1985");
				equal( $( "#access" ).html(), "ACCESS GRANTED!", "When a dob is entered for a person over 18 the access granted area should tell them ACCESS GRANTED!" );
				cleanUpTestArea(); 
			});
			
			function testWithBirthday(dob)
			{
				$("#dob").val(dob);
				$("#checkAge").click();				
			}
			
			function cleanUpTestArea(){
				$("#dob").val("");
				$("#access").hide();
			}
			
			