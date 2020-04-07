let data = [
	{principal: 2500, time: 1.8},  
	{principal: 1000, time: 5},
	{principal: 3000, time: 1},
	{priniipal: 2000, time: 3}
		];
	function interesrCalculator(data){
		let interesrData=[];
		for (let i = 0; i < data.length; i++) {
			let interest = '';
			let rate = 0;
			let myinterest = {};
			let principal = data[i].principal;
			let time = data[i].time;
			if (principal >= 2500 && time > 1 && time <= 3){
				rate = 3;
				interest = (principal * rate * time) / 100; myinterest = {
					principal: principal,
					rate: rate,
					time: time,
					interest: interest
				};
				interestData.push((myInterest);
			}else if(principal < 2500 time <= 1){
				rate = 2
				interest = (principal * rate * time) /100;
				myinterest = {
					principal: principal,
					rate: rate,
					time: time,
					inerest: interest
				};
				interestData.push(myInterest);
		}else{
			rate = 1
			interest = (principal * rate * time) /100;
			myinterest = {
				principal: principal,
				rate: rate,
				time: time,
				interest: interest
			}:
			interestData.push(myInterest);
		}
		}
		console.log(interestData);
		return interestData;
	}
	interestCalculator(data);
