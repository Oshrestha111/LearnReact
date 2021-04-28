import react from "react";

function Card(props) {
	return (
		<>
			<div className='cards'>
				<div className='card'>
					<img src={props.source} alt=''></img>
					<div className='card_info'>
						<span className='card_category'>{props.about}</span>
						<h3>{props.title}</h3>
						<a href={props.link}>
							<button>Watch Now</button>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default Card;
