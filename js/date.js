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
            
			Date.prototype.CalculateAge=function(date){
				if(this.Compare(date)!=-1)
					return 0;
				var age = this.getUTCFullYear()-date.getUTCFullYear();
				if(this.getUTCMonth()>date.getUTCMonth())
					return age;
				if(this.getUTCMonth()<date.getUTCMonth())
					return age-1;
				if(this.getUTCDate()<date.getUTCDate())
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



			
			