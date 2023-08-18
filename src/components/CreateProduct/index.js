import React, { useState } from 'react';
import axios from 'axios';
export default function CreateProduct() {
	const [file, setFile] = useState(null);
	const onChangeFile = (event) => {
		// Trường hợp chọn 1 file
		const files = event.target.files;
		setFile(files[0]);
		// Trường hợp chọn nhiều file
		// const files = event.target.files;
		// setFile(files);
	};
	const onUpload = async () => {
		const form = new FormData();
		form.append('file', file);
		await axios.post('API_URL', form, {
			headers: {
				'Content-Type': 'multipart/form-data',
				Authorization: 'Bearer token', // Nếu API yêu cầu
			},
		});
	};
	const onRemoveFile = () => {
		setFile(null);
	};

	return (
		<div className="flex items-center justify-center w-screen h-screen">
			<div>
				<div className="flex flex-col gap-4">
					<label>Hình ảnh sản phẩm ( Chọn 1 )</label>
					<input type="file" className="" onChange={onChangeFile} />

					<p>Xem ảnh đã chọn</p>
					{file && (
						<div>
							<img
								src={URL.createObjectURL(file)}
								alt=""
								className="w-40 "
							/>
						</div>
					)}

					{/* <p>Xem nhiều ảnh đã chọn</p> */}
					{/* {files &&
						files.map((file) => (
							<div>
								<img
									src={URL.createObjectURL(file)}
									alt=""
									className="w-40 "
								/>
							</div>
						))} */}

					<div className="flex flex-row gap-4">
						<button type="button" onClick={onRemoveFile}>
							Xóa ảnh
						</button>
						<button type="button" onClick={onUpload}>
							Tải ảnh lên
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
