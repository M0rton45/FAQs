"use client"
import Image from "next/image";
import { faqs } from "../data/faqs";
import { useState } from "react";

export default function Home() {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div>
      <header>
        <Image
          className="absolute -z-10"
          src="/assets/images/background-pattern-desktop.svg"
          alt="background"
          width={1440}
          height={200}
          loading="eager"
        />
      </header>
      <main className="flex align-center justify-center items-center">
        <section className="flex-row mt-[100px] w-[600px] min-h-[500px] bg-[white] text-[black] rounded-lg p-8">
          <article className="flex align-center items-center">
            <Image src="/assets/images/icon-star.svg" alt="" width={40} height={40}  className="w-[40px] h-[40px]"/>
            <h1 className="text-5xl font-bold p-5">FAQs</h1>
          </article>      
          {/* 
            Map wykorzystanie przy elementach, które są powtarzalne
            Łatwa zmiana zawartośći poprzez zmianę w pliku .ts         
            article key={index} uniklany klucz dla kazdego elementu ale nie jest to wzorowe rozwiązanie,
            lepiej uzyc unikalnego id w obiekcie FAQ i potem uzyc go jako key={faq.id}
          */}

          {faqs.map((faq, index) => (
            <article key={index} className="flex flex-wrap align-center items-center justify-between p-4">
              <h2>
                {faq.question}
              </h2>
              <button onClick={() => setActiveIndex(activeIndex === index ? null : index)}>
                {/* jest to krótsze a zarazem wydajnieszje */}
                <Image 
                  src={activeIndex === index ? "/assets/images/icon-minus.svg" : "/assets/images/icon-plus.svg"} 
                  alt="" 
                  width={30}
                  height={30} 
                  className="w-[30px] h-[30px]"
                />
                {/* 
                Jest lepszy sposób niz wgrywanie dwoch obrazków mozna je wgrywac zapomoca warunku w src
                <Image src="/assets/images/icon-plus.svg" alt="" width={30} height={30} className={activeIndex === index ? "hidden" : "show"} />
                <Image src="/assets/images/icon-minus.svg" alt="" width={30} height={30} className={activeIndex === index ? "show" : "hidden"} /> */}
              </button>
              <p className={activeIndex === index ? "" : "hidden"}>
                {faq.answer}
              </p>
            </article>
          ))}
  

{/* 
          <article>
            <h2>What is Frontend Mentor, and how will it help me? </h2>
            <button onClick={() => console.log("clicked")}>
              <Image src="/assets/images/icon-plus.svg" alt="" width={30} height={30} />
            </button>
            <p>
              Frontend Mentor offers realistic coding challenges to help developers improve their 
              frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
              all levels and ideal for portfolio building.
            </p>
          </article>

          <article>
            <h2>Is Frontend Mentor free?</h2>

            <p>
              Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
              option providing access to a range of projects suitable for all skill levels.
            </p>
          </article>

          <article>
            <h2>Can I use Frontend Mentor projects in my portfolio?</h2>

            <p>
              Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
              way to showcase your skills to potential employers!
            </p>
          </article>

          <article>
            <h2>How can I get help if I'm stuck on a Frontend Mentor challenge?</h2>

            <p>
              The best place to get help is inside Frontend Mentor's Discord community. There's a help 
              channel where you can ask questions and seek support from other community members.
            </p>
          </article>
           */}
        </section>
      </main>
    </div>
  );
}
