import Main from './components/main/Main'
import Section from './components/section/Section';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';


export default function Home() {
  return (
    <main>
      <Main />
      <Section />
      <Testimonials />
      <Contact/>
    </main>
  );
}

