import React, { useState } from "react";
import { Luz } from "./luz.jsx";
import "/workspace/react-hello/src/js/component/estilo.css";

const Home = () => {
	const [selectedColor, setSelectedColor] = useState("dark");
	//const [show, setShow] = useState(false);

	return (
		<>
			<div className="stick"></div>
			<div className="semaforo">
				<Luz
					onClick={() => setSelectedColor("danger")}
					variant={
						selectedColor +
						(selectedColor === "danger" ? " brillored" : "")
					}
				/>
				<Luz
					onClick={() => setSelectedColor("warning")}
					variant={
						selectedColor +
						(selectedColor === "warning" ? " brilloyellow" : "")
					}
				/>
				<Luz
					onClick={() => setSelectedColor("success")}
					variant={
						selectedColor +
						(selectedColor === "success" ? " brillogreen" : "")
					}
				/>
			</div>
		</>
	);
};

export default Home;

/*const getColor = (color) => {
	switch (color) {
		case "dark":
			setColor(color);
			break;

		default:
			setColor("warning");
			break;
	}
};*/
/*{{
	variant: show ? "dark" : "danger",
}}*/
