import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'
import { currentTheme, sampleActiveCells, sampleInactiveCells } from './fixtures/currentTheme';	
import Grid from './../src/components/grid';

function setup() {
	const props = { currentTheme }

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

	it('correctly specifies whether a cell is active or not', () => {
		const { enzymeWrapper } = setup();

		sampleActiveCells.forEach(sampleActiveCell => {
			expect(enzymeWrapper.instance().isActive(...sampleActiveCell)).toEqual(true);
		});

		sampleInactiveCells.forEach(sampleInactiveCell => {
			expect(enzymeWrapper.instance().isActive(...sampleInactiveCell)).toEqual(false);
		});
	});
})

