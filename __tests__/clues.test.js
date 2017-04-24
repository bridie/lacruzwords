import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'
import Clues from './../src/components/clues';

function setup() {
	const props = {
		currentTheme: {
			"perro": {
				"clue": "dog",
				"number": 1,
				"direction": "across",
				"letters": [[1, 1], [2, 1], [3, 1], [4, 1], [5, 1]]
			},
			"rinocerente": {
				"clue": "rhinoceros",
				"number": 2,
				"direction": "down",
				"letters": [[3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7], [3, 8], [3, 9], [3, 10], [3, 11]]
			},
			"cocodrilo": {
				"clue": "crocodile",
				"number": 3,
				"direction": "across",
				"letters": [[3, 5], [4, 5], [5, 5], [6, 5], [7, 5], [8, 5], [9, 5], [10, 5], [11, 5]]
			}
		}
	}

	const enzymeWrapper = shallow(<Clues {...props} />)

	return {
		props,
		enzymeWrapper
	}
}

describe("Clues Component", () => {
	it('renders correctly', () => {
		const { props } = setup();

  		const clues = renderer.create(<Clues {...props} />).toJSON();
  		expect(clues).toMatchSnapshot();
	});

	it('correctly filters the across words', () => {
		const { enzymeWrapper } = setup();

		const acrossWords = {
			"cocodrilo": {
				"clue": "crocodile",
				"number": 3,
				"direction": "across",
				"letters": [[3, 5], [4, 5], [5, 5], [6, 5], [7, 5], [8, 5], [9, 5], [10, 5], [11, 5]]
			},
			"perro": {
				"clue": "dog",
				"number": 1,
				"direction": "across",
				"letters": [[1, 1], [2, 1], [3, 1], [4, 1], [5, 1]]
			}
		}

		expect(enzymeWrapper.instance().getWordsWithDirection('across')).toEqual(acrossWords);
	});

	it('correctly filters the down words', () => {
		const { enzymeWrapper } = setup();

		const downWords = {
			"rinocerente": {
				"clue": "rhinoceros",
				"number": 2,
				"direction": "down",
				"letters": [[3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7], [3, 8], [3, 9], [3, 10], [3, 11]]
			},
		}

		expect(enzymeWrapper.instance().getWordsWithDirection('down')).toEqual(downWords);
	});
})

