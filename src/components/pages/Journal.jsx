import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import { query, collection, onSnapshot, updateDoc, doc } from "firebase/firestore";

export const Journal = () => {
	const [participants, setParticipants] = useState([].sort((a, b) => (a.name > b.name ? 1 : -1)));

	// Read todo from firebase
	useEffect(() => {
		const q = query(collection(db, "people"));
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			let todosArr = [];
			querySnapshot.forEach((doc) => {
				todosArr.push({ ...doc.data(), id: doc.id });
			});
			setParticipants(todosArr);
		});
		return () => unsubscribe();
	}, []);

	const handleClick = (status, name) => {
		const updatedParticipants = participants.map((participant) => {
			if (participant.name === name) {
				updateDoc(doc(db, "people", participant.id), { status });
				return { ...participant, status };
			}
			return participant;
		});
		setParticipants(updatedParticipants);
	};

	// const handleClick = (status, name) => {
	// 	const updatedParticipants = participants.map((participant) => {
	// 		if (participant.name === name) {
	// 			return { ...participant, status: status };
	// 		}
	// 		return participant;
	// 	});
	// 	setParticipants(updatedParticipants);
	// };

	const peopleParticipants = participants.filter((participant) => participant.status === "People");
	const presentParticipants = participants.filter((participant) => participant.status === "Present");
	const excusedParticipants = participants.filter((participant) => participant.status === "Excused");
	const absentParticipants = participants.filter((participant) => participant.status === "Absent");

	return (
		<>
			<div>
				<h1>Attendance</h1>
				<h2>People List</h2>
				<ol>
					{peopleParticipants.map((participant) => (
						<li key={participant.name}>
							{participant.name}
							<button onClick={() => handleClick("Present", participant.name)}>Present</button>
							<button onClick={() => handleClick("Absent", participant.name)}>Absent</button>
							<button onClick={() => handleClick("Excused", participant.name)}>Excused</button>
						</li>
					))}
				</ol>
				<h2>Present:</h2>
				<ol>
					{presentParticipants.map((participant) => (
						<li key={participant.name}>
							{participant.name}
							<button onClick={() => handleClick("Absent", participant.name)}>Absent</button>
							<button onClick={() => handleClick("Excused", participant.name)}>Excused</button>
							<button onClick={() => handleClick("People", participant.name)}>Reset</button>
						</li>
					))}
				</ol>
				<h2>Absent:</h2>
				<ol>
					{absentParticipants.map((participant) => (
						<li key={participant.name}>
							{participant.name}
							<button onClick={() => handleClick("Present", participant.name)}>Present</button>
							<button onClick={() => handleClick("Excused", participant.name)}>Excused</button>
							<button onClick={() => handleClick("People", participant.name)}>Reset</button>
						</li>
					))}
				</ol>
				<h2>Excused:</h2>
				<ol>
					{excusedParticipants.map((participant) => (
						<li key={participant.name}>
							{participant.name}
							<button onClick={() => handleClick("Present", participant.name)}>Present</button>
							<button onClick={() => handleClick("Absent", participant.name)}>Absent</button>
							<button onClick={() => handleClick("People", participant.name)}>Reset</button>
						</li>
					))}
				</ol>
			</div>
		</>
	);
};
