import Header from "../layout/Header";
import Section from "../layout/Section"
import Container from "../layout/Container";
import ButtonLevel from "../ui/ButtonLevel";

export default function Level() {
    return(
        <>
            <Header />
            <Section>
                <Container>
                    <ButtonLevel />
                </Container>
            </Section>
        </>
    )
}