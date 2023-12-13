import { useState } from 'react';
import '../App.css';

const faqs = [
  {
    title: "Is a long established fact that a reader will",
    text: "There are many variations of passages , but the majority have suffered."
  },
  {
    title: "Established fact that a reader will be distracted",
    text: "There are  passages of Lorem Ipsum available, but the majority have suffered."
  },
  {
    title: "It is a long established fact that a reader will be distracted",
    text: "Mmany variations of passages of Lorem Ipsum available, but the majority."
  },
  {
    title: "Long established fact that a reader will be distracted",
    text: "There are many variations of passages of Lorem Ipsum available."
  },


]

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null)
  return (
    <div className="accordion">
      {data.map((el, idx) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          text={el.text}
          num={idx}
          key={idx}>{el.title}</AccordionItem>
      ))}
    </div>
  )
}

function AccordionItem({ num, text, curOpen, onOpen, children }) {
  const isOpen = num === curOpen
  function handleToggle() {
    onOpen(isOpen ? null : num)
    console.log(isOpen)
  }
  return (
    <>
      <div className='container'>
        <div onClick={handleToggle} className='item'>
          <p className='number'>{num < 10 ? `0${num+1}` : num}</p>
          <p className='text'>{text}</p>
          <p className='icon'>{isOpen ? "-" : "+"}</p>
        </div>
        {isOpen && <div className="content-box">{children}</div>}
      </div>
    </>

  )
}
