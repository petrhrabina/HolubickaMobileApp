import React from 'react';

import PersonList from './PersonList';
import PersonForm from './PersonForm';

const PeoplePage = ({ people, setPeople, menuOpen, setMenuOpen }) => {
	return (
		<>
			<PersonList people={people} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<PersonForm people={people} setPeople={setPeople} />
		</>
	);
};

export default PeoplePage;
