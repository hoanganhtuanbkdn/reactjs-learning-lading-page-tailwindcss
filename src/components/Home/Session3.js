import React from 'react';

const Session3 = () => {
	return (
		<div className="container flex flex-row items-center gap-10 px-20 py-10 mx-auto mt-[105px] ">
			<div className="flex-1">
				<img src="/images/cover3.png" alt="" />
			</div>
			<div className="flex-1">
				<h1 className="text-[36px] font-bold">Why Choose Us</h1>
				<p className="text-[20px] font-normal">
					Enjoy different experiences in every place you visit and
					discover new and affordable adventures of course.
				</p>
				<div className="flex flex-col gap-[24px] mt-5">
					<div className="flex flex-row items-center gap-[30px] px-[24px] py-[16px] rounded-[10px] hover:bg-white hover:shadow-xl">
						<img
							src="/images/icon1.png"
							className="h-[64px] w-[64px]"
							alt=""
						/>
						<div className="flex flex-1 flex-col">
							<p className="text-[20px] font-bold">
								Flight Ticket
							</p>
							<span className="text-[16px]">
								Vitae donec pellentesque a aliquam et ultricies
								auctor.{' '}
							</span>
						</div>
					</div>
					<div className="flex items-center gap-[30px] px-[24px] py-[16px]  rounded-[10px] hover:bg-white hover:shadow-xl">
						<img
							src="/images/icon2.png"
							className="h-[64px] w-[64px]"
							alt=""
						/>
						<div className="flex flex-1 flex-col">
							<p className="text-[20px] font-bold">
								Flight Ticket
							</p>
							<span className="text-[16px]">
								Vitae donec pellentesque a aliquam et ultricies
								auctor.{' '}
							</span>
						</div>
					</div>
					<div className="flex items-center gap-[30px] px-[24px] py-[16px]  rounded-[10px] hover:bg-white  hover:shadow-xl">
						<img
							src="/images/icon3.png"
							className="h-[64px] w-[64px]"
							alt=""
						/>
						<div className="flex flex-1 flex-col">
							<p className="text-[20px] font-bold">
								Flight Ticket
							</p>
							<span className="text-[16px]">
								Vitae donec pellentesque a aliquam et ultricies
								auctor.{' '}
							</span>
						</div>
					</div>
					<p className="text-[20px] font-bold">Another Product</p>
				</div>
			</div>
		</div>
	);
};

export default Session3;
