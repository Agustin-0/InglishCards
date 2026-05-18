import Container from "../layout/Container";
import Header from "../layout/Header";
import Section from "../layout/Section";
import Cards from "../ui/Cards";

export default function WordsPage(){
    return(
        <>
            <Header />
            <h1 className="text-center text-4xl font-semibold text-neutral-50">The first word is...</h1>
            <Section>
                <Container>
                    <Cards />
                </Container>
            </Section>
        </>
    )
}