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
				<div className="flex flex-col gap-[24px]">
					<div className="flex items-center gap-[30px] px-[24px] py-[16px] rounded-[10px] shadow-xl">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="34"
							height="34"
							viewBox="0 0 34 34"
							fill="none"
							className="w-[33px] h-[33px]"
						>
							<path
								d="M6.94149 25.3859L1.98713 21.489C1.71649 21.2855 1.62788 20.9261 1.79032 20.6909C2.58439 19.5409 4.11408 19.1481 5.61707 19.7083L10.0978 22.25L6.94149 25.3859Z"
								fill="#42A8C3"
							/>
							<path
								d="M8.60413 27.0485L12.5112 32.0131C12.7148 32.2837 13.0742 32.3723 13.3094 32.2099L13.6048 32.0059C14.5775 31.3343 14.9097 30.0404 14.4358 28.7691L11.7502 23.9023L8.60413 27.0485Z"
								fill="#42A8C3"
							/>
							<path
								d="M7.23049 20.6233L4.42737 23.4083L6.94143 25.3858L10.0978 22.2498L7.23049 20.6233Z"
								fill="#219FC0"
							/>
							<path
								d="M8.28357 10.1235C7.66137 9.50129 7.61215 8.50988 8.16801 7.82779C8.96307 6.85214 9.95916 5.76575 10.5567 5.16822C11.3741 4.35077 11.4456 4.44843 12.3189 3.91308C12.4475 3.83424 12.6135 3.85325 12.7201 3.95989L14.4472 5.68704C14.5539 5.79368 14.5728 5.95963 14.4941 6.08821C13.9587 6.96158 14.0564 7.03293 13.2389 7.85038C12.6414 8.4479 11.555 9.444 10.5793 10.239C9.89718 10.7948 8.90571 10.7457 8.28357 10.1235Z"
								fill="#FFBFAB"
							/>
							<path
								d="M23.8762 25.7162C23.254 25.094 23.2048 24.1026 23.7607 23.4205C24.5557 22.4449 25.5518 21.3585 26.1493 20.761C26.9668 19.9435 27.0381 20.0412 27.9116 19.5058C28.0402 19.427 28.2061 19.446 28.3127 19.5526L30.0399 21.2798C30.1465 21.3864 30.1655 21.5524 30.0867 21.681C29.5513 22.5543 29.649 22.6257 28.8316 23.4432C28.234 24.0407 27.1476 25.0368 26.172 25.8319C25.4898 26.3877 24.4984 26.3384 23.8762 25.7162Z"
								fill="#FFBFAB"
							/>
							<path
								d="M16.0835 16.013L22.1959 9.9006L3.26093 3.95138C2.87102 3.85184 2.48339 3.94663 2.22544 4.20457L0.625705 5.80431C0.0899632 6.34005 0.319911 7.32215 1.07623 7.72827L16.0835 16.013Z"
								fill="#42A8C3"
							/>
							<path
								d="M17.9176 8.55646L12.4608 14.0132L16.0835 16.0131L22.196 9.90066L17.9176 8.55646Z"
								fill="#219FC0"
							/>
							<path
								d="M17.9868 17.9165L24.0992 11.8041L30.0485 30.7391C30.148 31.129 30.0532 31.5166 29.7953 31.7746L28.1955 33.3743C27.6598 33.9101 26.6777 33.6801 26.2716 32.9238L17.9868 17.9165Z"
								fill="#42A8C3"
							/>
							<path
								d="M29.5241 9.23455L19.2553 19.5032C17.5323 21.2263 15.7004 22.8334 13.7826 24.3047L8.89692 28.0526C7.76587 28.9203 6.42068 29.0252 5.6977 28.3023C4.97472 27.5793 5.07967 26.2341 5.94738 25.103L9.69529 20.2174C11.1665 18.2995 12.7736 16.4678 14.4967 14.7446L24.7655 4.47595C26.1693 3.07218 27.7815 1.90258 29.4847 1.09959C30.9514 0.408116 32.5105 -0.0250872 33.2678 0.732204C34.0251 1.4895 33.5919 3.04855 32.9004 4.51528C32.0975 6.2186 30.9279 7.83077 29.5241 9.23455Z"
								fill="#E0F3FC"
							/>
							<path
								d="M33.2677 0.732292C33.0012 0.465755 32.6351 0.347135 32.2088 0.334961C32.2395 1.12363 31.8975 2.12389 31.4446 3.08457C30.6416 4.78776 29.472 6.4 28.0682 7.80377L17.7995 18.0725C16.0765 19.7955 14.2446 21.4027 12.3268 22.8738L7.44114 26.6217C6.72174 27.1736 5.91588 27.4164 5.2384 27.3344C5.28931 27.7103 5.44107 28.0456 5.69771 28.3022C6.42069 29.0252 7.76588 28.9202 8.89693 28.0525L13.7826 24.3046C15.7004 22.8334 17.5322 21.2263 19.2553 19.5032L29.5241 9.23457C30.9278 7.83079 32.0974 6.21855 32.9004 4.51536C33.5918 3.04863 34.025 1.48958 33.2677 0.732292Z"
								fill="#C3D3DB"
							/>
							<path
								d="M30.3749 7.26809L30.0243 7.61875C29.6986 7.9444 26.0558 4.30156 26.3814 3.97591L26.7321 3.62526C26.9531 3.40423 27.2775 3.33457 27.5417 3.45143C28.858 4.03372 29.9664 5.14218 30.5488 6.45852C30.6655 6.72265 30.5959 7.04707 30.3749 7.26809Z"
								fill="#51C4F5"
							/>
							<path
								d="M6.80711 27.681C6.68218 27.681 6.55718 27.6334 6.46187 27.538C6.27118 27.3473 6.27118 27.0381 6.46187 26.8475L10.7259 22.5834C10.9166 22.3927 11.2258 22.3927 11.4164 22.5834C11.6071 22.7741 11.6071 23.0833 11.4164 23.2739L7.15236 27.538C7.05705 27.6333 6.93211 27.681 6.80711 27.681Z"
								fill="#42A8C3"
								fill-opacity="0.92"
							/>
						</svg>
						<div className="">
							<p className="text-[20px] font-bold">
								Flight Ticket
							</p>
							<span className="text-[16px]">
								Vitae donec pellentesque a aliquam et ultricies
								auctor.{' '}
							</span>
						</div>
					</div>
					<div className="flex items-center gap-[30px] ml-6 rounded-[10px] bg-transparent">
						<div className="items-center justify-center p-2 bg-white shadow rounded-2xl">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="34"
								height="34"
								viewBox="0 0 34 34"
								fill="none"
								className="w-[33px] h-[33px]"
							>
								<path
									d="M6.94149 25.3859L1.98713 21.489C1.71649 21.2855 1.62788 20.9261 1.79032 20.6909C2.58439 19.5409 4.11408 19.1481 5.61707 19.7083L10.0978 22.25L6.94149 25.3859Z"
									fill="#42A8C3"
								/>
								<path
									d="M8.60413 27.0485L12.5112 32.0131C12.7148 32.2837 13.0742 32.3723 13.3094 32.2099L13.6048 32.0059C14.5775 31.3343 14.9097 30.0404 14.4358 28.7691L11.7502 23.9023L8.60413 27.0485Z"
									fill="#42A8C3"
								/>
								<path
									d="M7.23049 20.6233L4.42737 23.4083L6.94143 25.3858L10.0978 22.2498L7.23049 20.6233Z"
									fill="#219FC0"
								/>
								<path
									d="M8.28357 10.1235C7.66137 9.50129 7.61215 8.50988 8.16801 7.82779C8.96307 6.85214 9.95916 5.76575 10.5567 5.16822C11.3741 4.35077 11.4456 4.44843 12.3189 3.91308C12.4475 3.83424 12.6135 3.85325 12.7201 3.95989L14.4472 5.68704C14.5539 5.79368 14.5728 5.95963 14.4941 6.08821C13.9587 6.96158 14.0564 7.03293 13.2389 7.85038C12.6414 8.4479 11.555 9.444 10.5793 10.239C9.89718 10.7948 8.90571 10.7457 8.28357 10.1235Z"
									fill="#FFBFAB"
								/>
								<path
									d="M23.8762 25.7162C23.254 25.094 23.2048 24.1026 23.7607 23.4205C24.5557 22.4449 25.5518 21.3585 26.1493 20.761C26.9668 19.9435 27.0381 20.0412 27.9116 19.5058C28.0402 19.427 28.2061 19.446 28.3127 19.5526L30.0399 21.2798C30.1465 21.3864 30.1655 21.5524 30.0867 21.681C29.5513 22.5543 29.649 22.6257 28.8316 23.4432C28.234 24.0407 27.1476 25.0368 26.172 25.8319C25.4898 26.3877 24.4984 26.3384 23.8762 25.7162Z"
									fill="#FFBFAB"
								/>
								<path
									d="M16.0835 16.013L22.1959 9.9006L3.26093 3.95138C2.87102 3.85184 2.48339 3.94663 2.22544 4.20457L0.625705 5.80431C0.0899632 6.34005 0.319911 7.32215 1.07623 7.72827L16.0835 16.013Z"
									fill="#42A8C3"
								/>
								<path
									d="M17.9176 8.55646L12.4608 14.0132L16.0835 16.0131L22.196 9.90066L17.9176 8.55646Z"
									fill="#219FC0"
								/>
								<path
									d="M17.9868 17.9165L24.0992 11.8041L30.0485 30.7391C30.148 31.129 30.0532 31.5166 29.7953 31.7746L28.1955 33.3743C27.6598 33.9101 26.6777 33.6801 26.2716 32.9238L17.9868 17.9165Z"
									fill="#42A8C3"
								/>
								<path
									d="M29.5241 9.23455L19.2553 19.5032C17.5323 21.2263 15.7004 22.8334 13.7826 24.3047L8.89692 28.0526C7.76587 28.9203 6.42068 29.0252 5.6977 28.3023C4.97472 27.5793 5.07967 26.2341 5.94738 25.103L9.69529 20.2174C11.1665 18.2995 12.7736 16.4678 14.4967 14.7446L24.7655 4.47595C26.1693 3.07218 27.7815 1.90258 29.4847 1.09959C30.9514 0.408116 32.5105 -0.0250872 33.2678 0.732204C34.0251 1.4895 33.5919 3.04855 32.9004 4.51528C32.0975 6.2186 30.9279 7.83077 29.5241 9.23455Z"
									fill="#E0F3FC"
								/>
								<path
									d="M33.2677 0.732292C33.0012 0.465755 32.6351 0.347135 32.2088 0.334961C32.2395 1.12363 31.8975 2.12389 31.4446 3.08457C30.6416 4.78776 29.472 6.4 28.0682 7.80377L17.7995 18.0725C16.0765 19.7955 14.2446 21.4027 12.3268 22.8738L7.44114 26.6217C6.72174 27.1736 5.91588 27.4164 5.2384 27.3344C5.28931 27.7103 5.44107 28.0456 5.69771 28.3022C6.42069 29.0252 7.76588 28.9202 8.89693 28.0525L13.7826 24.3046C15.7004 22.8334 17.5322 21.2263 19.2553 19.5032L29.5241 9.23457C30.9278 7.83079 32.0974 6.21855 32.9004 4.51536C33.5918 3.04863 34.025 1.48958 33.2677 0.732292Z"
									fill="#C3D3DB"
								/>
								<path
									d="M30.3749 7.26809L30.0243 7.61875C29.6986 7.9444 26.0558 4.30156 26.3814 3.97591L26.7321 3.62526C26.9531 3.40423 27.2775 3.33457 27.5417 3.45143C28.858 4.03372 29.9664 5.14218 30.5488 6.45852C30.6655 6.72265 30.5959 7.04707 30.3749 7.26809Z"
									fill="#51C4F5"
								/>
								<path
									d="M6.80711 27.681C6.68218 27.681 6.55718 27.6334 6.46187 27.538C6.27118 27.3473 6.27118 27.0381 6.46187 26.8475L10.7259 22.5834C10.9166 22.3927 11.2258 22.3927 11.4164 22.5834C11.6071 22.7741 11.6071 23.0833 11.4164 23.2739L7.15236 27.538C7.05705 27.6333 6.93211 27.681 6.80711 27.681Z"
									fill="#42A8C3"
									fill-opacity="0.92"
								/>
							</svg>
						</div>
						<div className="">
							<p className="text-[20px] font-bold">
								Flight Ticket
							</p>
							<span className="text-[16px]">
								Vitae donec pellentesque a aliquam et ultricies
								auctor.{' '}
							</span>
						</div>
					</div>
					<div className="flex items-center gap-[30px] ml-6 rounded-[10px] bg-transparent">
						<div className="items-center justify-center p-2 bg-white shadow rounded-2xl">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="34"
								height="34"
								viewBox="0 0 34 34"
								fill="none"
								className="w-[33px] h-[33px]"
							>
								<path
									d="M6.94149 25.3859L1.98713 21.489C1.71649 21.2855 1.62788 20.9261 1.79032 20.6909C2.58439 19.5409 4.11408 19.1481 5.61707 19.7083L10.0978 22.25L6.94149 25.3859Z"
									fill="#42A8C3"
								/>
								<path
									d="M8.60413 27.0485L12.5112 32.0131C12.7148 32.2837 13.0742 32.3723 13.3094 32.2099L13.6048 32.0059C14.5775 31.3343 14.9097 30.0404 14.4358 28.7691L11.7502 23.9023L8.60413 27.0485Z"
									fill="#42A8C3"
								/>
								<path
									d="M7.23049 20.6233L4.42737 23.4083L6.94143 25.3858L10.0978 22.2498L7.23049 20.6233Z"
									fill="#219FC0"
								/>
								<path
									d="M8.28357 10.1235C7.66137 9.50129 7.61215 8.50988 8.16801 7.82779C8.96307 6.85214 9.95916 5.76575 10.5567 5.16822C11.3741 4.35077 11.4456 4.44843 12.3189 3.91308C12.4475 3.83424 12.6135 3.85325 12.7201 3.95989L14.4472 5.68704C14.5539 5.79368 14.5728 5.95963 14.4941 6.08821C13.9587 6.96158 14.0564 7.03293 13.2389 7.85038C12.6414 8.4479 11.555 9.444 10.5793 10.239C9.89718 10.7948 8.90571 10.7457 8.28357 10.1235Z"
									fill="#FFBFAB"
								/>
								<path
									d="M23.8762 25.7162C23.254 25.094 23.2048 24.1026 23.7607 23.4205C24.5557 22.4449 25.5518 21.3585 26.1493 20.761C26.9668 19.9435 27.0381 20.0412 27.9116 19.5058C28.0402 19.427 28.2061 19.446 28.3127 19.5526L30.0399 21.2798C30.1465 21.3864 30.1655 21.5524 30.0867 21.681C29.5513 22.5543 29.649 22.6257 28.8316 23.4432C28.234 24.0407 27.1476 25.0368 26.172 25.8319C25.4898 26.3877 24.4984 26.3384 23.8762 25.7162Z"
									fill="#FFBFAB"
								/>
								<path
									d="M16.0835 16.013L22.1959 9.9006L3.26093 3.95138C2.87102 3.85184 2.48339 3.94663 2.22544 4.20457L0.625705 5.80431C0.0899632 6.34005 0.319911 7.32215 1.07623 7.72827L16.0835 16.013Z"
									fill="#42A8C3"
								/>
								<path
									d="M17.9176 8.55646L12.4608 14.0132L16.0835 16.0131L22.196 9.90066L17.9176 8.55646Z"
									fill="#219FC0"
								/>
								<path
									d="M17.9868 17.9165L24.0992 11.8041L30.0485 30.7391C30.148 31.129 30.0532 31.5166 29.7953 31.7746L28.1955 33.3743C27.6598 33.9101 26.6777 33.6801 26.2716 32.9238L17.9868 17.9165Z"
									fill="#42A8C3"
								/>
								<path
									d="M29.5241 9.23455L19.2553 19.5032C17.5323 21.2263 15.7004 22.8334 13.7826 24.3047L8.89692 28.0526C7.76587 28.9203 6.42068 29.0252 5.6977 28.3023C4.97472 27.5793 5.07967 26.2341 5.94738 25.103L9.69529 20.2174C11.1665 18.2995 12.7736 16.4678 14.4967 14.7446L24.7655 4.47595C26.1693 3.07218 27.7815 1.90258 29.4847 1.09959C30.9514 0.408116 32.5105 -0.0250872 33.2678 0.732204C34.0251 1.4895 33.5919 3.04855 32.9004 4.51528C32.0975 6.2186 30.9279 7.83077 29.5241 9.23455Z"
									fill="#E0F3FC"
								/>
								<path
									d="M33.2677 0.732292C33.0012 0.465755 32.6351 0.347135 32.2088 0.334961C32.2395 1.12363 31.8975 2.12389 31.4446 3.08457C30.6416 4.78776 29.472 6.4 28.0682 7.80377L17.7995 18.0725C16.0765 19.7955 14.2446 21.4027 12.3268 22.8738L7.44114 26.6217C6.72174 27.1736 5.91588 27.4164 5.2384 27.3344C5.28931 27.7103 5.44107 28.0456 5.69771 28.3022C6.42069 29.0252 7.76588 28.9202 8.89693 28.0525L13.7826 24.3046C15.7004 22.8334 17.5322 21.2263 19.2553 19.5032L29.5241 9.23457C30.9278 7.83079 32.0974 6.21855 32.9004 4.51536C33.5918 3.04863 34.025 1.48958 33.2677 0.732292Z"
									fill="#C3D3DB"
								/>
								<path
									d="M30.3749 7.26809L30.0243 7.61875C29.6986 7.9444 26.0558 4.30156 26.3814 3.97591L26.7321 3.62526C26.9531 3.40423 27.2775 3.33457 27.5417 3.45143C28.858 4.03372 29.9664 5.14218 30.5488 6.45852C30.6655 6.72265 30.5959 7.04707 30.3749 7.26809Z"
									fill="#51C4F5"
								/>
								<path
									d="M6.80711 27.681C6.68218 27.681 6.55718 27.6334 6.46187 27.538C6.27118 27.3473 6.27118 27.0381 6.46187 26.8475L10.7259 22.5834C10.9166 22.3927 11.2258 22.3927 11.4164 22.5834C11.6071 22.7741 11.6071 23.0833 11.4164 23.2739L7.15236 27.538C7.05705 27.6333 6.93211 27.681 6.80711 27.681Z"
									fill="#42A8C3"
									fill-opacity="0.92"
								/>
							</svg>
						</div>
						<div className="">
							<p className="text-[20px] font-bold">
								Flight Ticket
							</p>
							<span className="text-[16px]">
								Vitae donec pellentesque a aliquam et ultricies
								auctor.{' '}
							</span>
						</div>
					</div>
					<p className="text-[20px] font-bold">Another Product ></p>
				</div>
			</div>
		</div>
	);
};

export default Session3;
