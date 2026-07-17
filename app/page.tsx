"use client"
import Image from "next/image";
import { faqs } from "../data/faqs";
import { useState } from "react";

export default function Home() {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div>
      <header className="relative w-full h-[200px] md:h-[300px] overflow-hidden">
        
          {/* Desktop */}
          <Image
            className="object-cover hidden md:block"
            src="/assets/images/background-pattern-desktop.svg"
            alt="background"
            fill
            priority
          />
          {/* Mobile */}
          <Image
            className="object-cover md:hidden"
            src="/assets/images/background-pattern-mobile.svg"
            alt="background"
            fill
            priority
          />
          {/* priority 
          dla obrazów które są wyświetlane jako pierwsze np tło strony  */}
        
      </header>
      <main className="flex align-center justify-center items-center">
        <section className="flex-row relative z-10 -mt-[80px] m-5 md:-mt-[180px] w-full max-w-[650px] bg-[white] text-[black] rounded-lg p-4 md:p-8">
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
          {/* 
          group w tailwind pozwala grupować elementy i np hover działa wtedy jako na jeden element całościowo
          */}

          {faqs.map((faq, index) => (
            <article key={index} className="flex flex-col border-b border-[hsl(275,10%,97%)]">
              <button className="group flex grow-1 align-center items-center justify-between m-4" 
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}>
              <h2 className="text-left text-[hsl(292,42%,14%)] font-semibold mr-10 group-hover:text-[hsl(292,58%,49%)]">
                {faq.question}
              </h2>
              
                {/* jest to krótsze a zarazem wydajnieszje */}
                <Image 
                  src={activeIndex === index ? "/assets/images/icon-minus.svg" : "/assets/images/icon-plus.svg"} 
                  alt="" 
                  width={30}
                  height={30} 
                  className=" w-[30px] h-[30px]"
                />
                {/* 
                Jest lepszy sposób niz wgrywanie dwoch obrazków mozna je wgrywac zapomoca warunku w src
                <Image src="/assets/images/icon-plus.svg" alt="" width={30} height={30} className={activeIndex === index ? "hidden" : "show"} />
                <Image src="/assets/images/icon-minus.svg" alt="" width={30} height={30} className={activeIndex === index ? "show" : "hidden"} /> */}
              </button>
              <p className={activeIndex === index ? "text-[hsl(292,16%,49%)] mb-6 ml-4 mr-9 font-normal" : "hidden"}>
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
