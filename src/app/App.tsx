import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function App({ children }: { children?: React.ReactNode }) {
  return (
    <div id="app">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
