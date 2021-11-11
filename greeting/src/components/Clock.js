import React, { useState } from "react";

const Clock = () => {
	let time = new Date().toLocaleTimeString();
	const [Ctime, SetCtime] = useState(time); //use of Hook

	const UpdateTime = () => {
		let time = new Date().toLocaleTimeString();
		SetCtime(time);
	};
	setInterval(UpdateTime, 1000);
	return (
		<>
			<div className='Digi-Clock'>
				<h1>{Ctime}</h1>
			</div>
		</>
	);
};

export default Clock;
