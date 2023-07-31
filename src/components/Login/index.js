import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

export default function LoginPage() {
	const navigate = useNavigate();
	const { state, setState } = useContext(AuthContext);

	const handleChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	const handleSubmit = () => {
		navigate('/home');
		window.localStorage.setItem('email', state.email);
	};

	return (
		<div className="max-w-full w-[1440px] min-h-screen p-6 grid grid-cols-2">
			<div className="flex items-center justify-center">
				<div className="w-[326px] flex flex-col gap-4">
					<input
						placeholder="Email"
						type="email"
						name="email"
						value={state.email}
						onChange={handleChange}
						className="w-full h-[46px] px-4 rounded border border-[#D0D0D0]"
					/>
					<input
						placeholder="Password"
						type="password"
						name="password"
						value={state.password}
						onChange={handleChange}
						className="w-full h-[46px] px-4 rounded border border-[#D0D0D0]"
					/>
					<button
						className="w-full h-[46px] px-4 rounded bg-[#42A7C3] flex items-center justify-center text-white"
						onClick={handleSubmit}
						disabled={!state.email || !state.password}
					>
						LOGIN
					</button>
					<div>
						<a href="/" className="text-[#0098EA] text-sm">
							Forgot password
						</a>
					</div>
					<div className="flex flex-row items-center gap-3">
						<div className="h-[1px] flex flex-1 bg-[#D0D0D0]"></div>
						<p className="text-[#D0D0D0] text-sm">
							Login By Social
						</p>
						<div className="h-[1px] flex flex-1 bg-[#D0D0D0]"></div>
					</div>
					<button className="w-full h-[46px] px-4  border border-[#D0D0D0] rounded bg-white flex items-center justify-center text-[#505050] text-sm">
						Google
					</button>
					<button className="w-full h-[46px] px-4  border border-[#D0D0D0] rounded bg-white flex items-center justify-center text-[#505050] text-sm">
						Facebook
					</button>
				</div>
			</div>
			<div className="bg-[#42A7C3] rounded-2xl relative">
				{/* <div
					className="absolute inset-0 z-20 object-cover object-bottom"
					style={{ backgroundImage: `url("/images/bg-login.png")` }}
				></div> */}
			</div>
		</div>
	);
}
