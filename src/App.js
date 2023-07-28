import Header from './components/Home/Header';
import Session1 from './components/Home/Session1';
import Session2 from './components/Home/Session2';
import Session3 from './components/Home/Session3';
function App() {
	return (
		<div className="bg-gradient-to-b text-[#333333] from-[#E2EEFC] to-[rgba(255, 255, 255, 0.00)]">
			<Header />
			<Session1 />
			<Session2 />
			<Session3 />
			<div>
				<img
					src="/images/session4.png"
					className="block w-full"
					alt=""
				/>
			</div>
			<div>
				<img src="/images/footer.png" alt="" />
			</div>
		</div>
	);
}

export default App;
