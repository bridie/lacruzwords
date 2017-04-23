import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'
import { Grid } from './../src/components/grid';

function setup() {
	const props = {
		match: { params: { theme: 'animals' }},
		// Fetch theme just fetches the current theme,
		// which we are explicitly setting in the next variable anyway.
		fetchTheme: () => {},
		currentTheme: {
			"perro": {
				"clue": "dog",
				"letters": [[1, 1], [2, 1], [3, 1], [4, 1], [5, 1]]
			},
			"rinocerente": {
				"clue": "rhinoceros",
				"letters": [[3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7], [3, 8], [3, 9], [3, 10], [3, 11]]
			},
			"cocodrilo": {
				"clue": "crocodile",
				"letters": [[3, 5], [4, 5], [5, 5], [6, 5], [7, 5], [8, 5], [9, 5], [10, 5], [11, 5]]
			}
		}
	}

	const enzymeWrapper = shallow(<Grid {...props} />)

	return {
		props,
		enzymeWrapper
	}
}

describe("Grid Component", () => {
	it('renders correctly', () => {
		const { props } = setup();

  		const grid = renderer.create(<Grid {...props} />).toJSON();
  		expect(grid).toMatchSnapshot();
	});
})

