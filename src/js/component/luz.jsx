import React from "react";
import "/workspace/react-hello/src/js/component/estilo.css";

export const Luz = ({ variant, onClick }) => {
	return (
		<div>
			<button onClick={onClick} className={"bg-" + variant}></button>
		</div>
	);
};
