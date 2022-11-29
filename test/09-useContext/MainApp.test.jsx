import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/09-useContext/MainApp";

describe('Pruebas en <MainApp />', () => {

    const user = {
        id: 1,
        name: 'Roman'
    }

    test('debe de mostrar el homePage', () => {

        render( 
            <MemoryRouter>
                <MainApp /> 
            </MemoryRouter>
        );

        // screen.debug();

        expect( screen.getByText('HomePage') ).toBeTruthy();
    });

    test('debe de mostrar el LoginPage', () => {

        render( 
            <MemoryRouter initialEntries={['/login']}>
                <MainApp /> 
            </MemoryRouter>
        );

        expect( screen.getByText('LoginPage') ).toBeTruthy();
    });
});