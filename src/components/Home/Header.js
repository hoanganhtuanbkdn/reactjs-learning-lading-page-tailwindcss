import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

export default function Header() {
	const { state, setState } = useContext(AuthContext);

	const handleLogout = () => {
		setState({ email: '', password: '' });
		window.localStorage.setItem('email', '');
	};
	return (
		<div className="container mx-auto">
			<div className="flex justify-between px-20 py-10">
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
				{state?.email ? (
					<div className="flex flex-row items-center gap-4">
						<p className="text-green-800">{state.email}</p>
						<button
							onClick={handleLogout}
							className="py-3 px-3 rounded-md bg-[#FA8443] text-white"
						>
							LOGOUT
						</button>
					</div>
				) : (
					<Link to="/">
						<button className="py-3 px-8 rounded-md bg-[#FA8443] text-white">
							Sign Up
						</button>
					</Link>
				)}
			</div>
		</div>
	);
}
