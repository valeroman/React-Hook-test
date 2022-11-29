import { render, screen, fireEvent } from '@testing-library/react'
import { MultipleCustomHooks } from '../../src/03-examples';
import { useCounter } from '../../src/hooks/useCounter';
import { useFetch } from '../../src/hooks/useFetch';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {

    const mockincrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockincrement
    });

    beforeEach( () => {
        jest.clearAllMocks();
    });

    test('debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });
        
        render( <MultipleCustomHooks /> );

        expect( screen.getByText('Loading...') );
        expect( screen.getByText('BreakingBad Quotes') );

        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        expect( nextButton.disabled ).toBeTruthy();
        // console.log(nextButton.disabled)
        // screen.debug();
    });

    test('debe de mostrar un Quote', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Roman', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks /> );
        // screen.debug()
        expect( screen.getByText('Hola Mundo') ).toBeTruthy();
        expect( screen.getByText('Roman') ).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        expect( nextButton.disabled ).toBeFalsy();
    });

    test('debe de llamar la funcion incrementar', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Roman', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null
        });


        render( <MultipleCustomHooks /> );
        // screen.debug();
        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        fireEvent.click(nextButton);
        expect( mockincrement ).toHaveBeenCalled();
    })
})