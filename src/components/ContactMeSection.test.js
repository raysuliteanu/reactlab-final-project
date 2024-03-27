import {render, screen} from '@testing-library/react';
import ContactMeSection from "./ContactMeSection";
import {AlertProvider} from "../context/alertContext";
import {ChakraProvider} from "@chakra-ui/react";

describe("'Contact me' tests", () => {
    const contactMeSection = () => {
        return (
            <ChakraProvider>
                <AlertProvider>
                    <ContactMeSection/>
                </AlertProvider>
            </ChakraProvider>
        );
    }
    test('has form', () => {
        render(contactMeSection());
        const formElement = screen.getByRole("form");
        expect(formElement).toBeInTheDocument();
    });

    test('form submit is disabled initially', () => {
        render(contactMeSection());

        const submitButton = screen.getByRole('button');
        expect(submitButton).toBeDisabled();
    });
});

