import "./App.css";
import {
  Header,
  MainContent,
  ProductSection,
  FAQ,
  Footer,
} from "./components/websection";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <ProductSection />
      {/* <ChakraProvider> */}
      <FAQ />
      {/* </ChakraProvider> */}
      <Footer />
    </div>
  );
}

export default App;
