import React from 'react';

export default function Session1() {
	return (
		<div className="container flex flex-row gap-10 px-20 mx-auto mt-14 ">
			<div className="flex flex-col justify-center flex-1">
				<h1 className="text-[56px] font-bold leading-[70px] mb-4">
					Start your journey by one click, explore beautiful world!
				</h1>
				<p>
					Plan and book your perfect trip with expert advice, travel
					tips, destination information and inspiration from us!
				</p>
				<div>
					<button className="flex flex-row gap-6 mt-9">
						<img
							src={'/images/google.png'}
							alt=""
							className="w-[136px] h-10"
						/>
						<img
							src={'/images/apple.png'}
							alt=""
							className="w-[136px] h-10"
						/>
					</button>
				</div>
			</div>
			<div className="flex flex-1 ">
				<img
					src="/images/cover1.png"
					className="aspect-[648/594] w-full"
					alt=""
				/>
			</div>
		</div>
	);
}

// Su dung flex-1 de chia 2 layout bang nhau
