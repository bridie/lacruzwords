import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'
import { currentTheme, acrossWords, downWords } from './fixtures/currentTheme';
import Clues from './../src/components/clues';

function setup() {
	const props = { currentTheme }

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
		expect(enzymeWrapper.instance().getWordsWithDirection('across')).toEqual(acrossWords);
	});

	it('correctly filters the down words', () => {
		const { enzymeWrapper } = setup();
		expect(enzymeWrapper.instance().getWordsWithDirection('down')).toEqual(downWords);
	});
})

