import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "../data";

export default function App() {
  const EntryData = data.map((item) => {
    return (
      <Entry 
        key={item.id}
        img={item.img}
        title={item.title}
        country={item.country}
        googleMapsLink={item.googleMapsLink}
        dates={item.dates}
        text={item.text}
      />
    );
  });

  return (
    <>
      <Header />
      <div className="container">{EntryData}</div>
    </>
  );
}
