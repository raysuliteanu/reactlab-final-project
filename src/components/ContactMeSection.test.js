import {render, screen} from '@testing-library/react';
import ContactMeSection from "./ContactMeSection";
import {AlertProvider} from "../context/alertContext";
import {ChakraProvider} from "@chakra-ui/react";

describe("'Contact me' tests", () => {
    test('has form', () => {
        render(
            <ChakraProvider>
                <AlertProvider>
                    <ContactMeSection/>
                </AlertProvider>
            </ChakraProvider>
        );
        const formElement = screen.getByRole("form");
        expect(formElement).toBeInTheDocument();
    });

    test('form submit is disabled initially', () => {
        render(
            <ChakraProvider>
                <AlertProvider>
                    <ContactMeSection/>
                </AlertProvider>
            </ChakraProvider>
        );

        const submitButton = screen.getByRole('button');
        expect(submitButton).toBeDisabled();
    });
});

