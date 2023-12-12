import { useState } from 'react';
import '../App.css';

const faqs = [
  {
    title: "Is a long established fact that a reader will",
    text: "There are many variations of passages , but the majority have suffered alteration in some form, by injected humour."
  },
  {
    title: "Established fact that a reader will be distracted",
    text: "There are  passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
  },
  {
    title: "It is a long established fact that a reader will be distracted",
    text: "Mmany variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
  },
  {
    title: "Long established fact that a reader will be distracted",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
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
  return (
    <div className="accordion">
      {data.map((el, idx) => (
        <AccordionItem title={el.title} text={el.text} num={idx + 1} key={idx}/>
      ))}
    </div>
  )
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false)

  function handleToggle(){
    setIsOpen((isOpen)=> !isOpen)
  }

  return (
    <>
      <div className='container'>
        <div onClick={handleToggle} className='item'>
          <p className='number'>{num < 10 ? `0${num}` : num}</p>
          <p className='title'>{title}</p>
          <p className='icon'>{isOpen? "-" : "+"}</p>
        </div>
        {isOpen && <div className="content-box">{text}</div>}
      </div>
    </>

  )
}
