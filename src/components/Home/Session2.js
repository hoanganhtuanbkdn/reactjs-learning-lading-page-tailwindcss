import React from 'react';

export default function Session2() {
	return (
		<div className="container flex flex-row gap-10 px-20 py-10 mx-auto mt-[105px]">
			<div>
				<h2 className="text-4xl font-bold leading-[50px]">
					Popular Destinations
				</h2>
				<p className="mt-2">
					Vacations to make your experience enjoyable in Indonesia!
				</p>
				<div className="grid grid-cols-4 mt-11 gap-7">
					{[1, 2, 3, 4].map((item) => (
						<div
							key={item}
							className="p-4 bg-[#F2F2F2] rounded-2xl"
						>
							<img
								src={`/images/post${item}.png`}
								className="aspect-[264/180] w-full"
								alt=""
							/>
							<p className="text-[10px] text-[#8F8F8F] mt-4">
								Manggarai Barat
							</p>
							<p className="mt-2 font-bold">
								Flores Road Trip 3D2N
							</p>
							<p className="mt-2 text-sm">3 Days</p>
							<p className="text-sm mt-4 text-[#42A7C3]">
								Rp 6.705.000 /orang
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
