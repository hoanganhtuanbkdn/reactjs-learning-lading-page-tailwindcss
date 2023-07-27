import React from 'react';

export default function Header() {
	return (
		<div className="container mx-auto">
			<div class="flex justify-between px-20 py-10">
				<div>
					<img
						src="/images/logo.png"
						alt=""
						width={141}
						height={50}
						className="w-[141px] h-[50px]"
					/>
				</div>
				<div className="flex flex-row items-center gap-20">
					<a href="/" className="hover:text-[#FA8443] text-[#333]">
						Product
					</a>
					<a href="/" className="hover:text-[#FA8443] text-[#333]">
						Contact Us
					</a>
					<a href="/" className="hover:text-[#FA8443] text-[#333]">
						About Us
					</a>
				</div>
				<button className="py-3 px-8 rounded-md bg-[#FA8443] text-white">
					Sign Up
				</button>
			</div>
		</div>
	);
}
