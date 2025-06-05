import "global.css"
import Navbar from "components/navBar/Nav"

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <main className='darkbg-zinc-900 darktext-gray-100 flex h-screen justify-center bg-blue-200 text-gray-900'>
      <section className='my-4 max-w-screen-md flex-col space-y-4 p-4'>
        <h1 className='text-3xl font-bold'>
          Hiya, I'm Lottie Judge and I love the Internet
        </h1>

        <section>
          <h3 className='text-xl font-bold'>
           Full-Stack Developr
          </h3>
          <br></br>
          <h4 className='font-bold'>Overview:</h4>
          <br></br>
          <ul className='list-inside list-disc text-sm'>
            <li>Python </li>
            <li>JavaScript: React, Next.Js, TypeScript </li>
            <li>HTMl & CSS</li>
            <li>Version Control</li>
            <li>Will save worms and bees from these streets</li>
            <li>Long distance runner == Great Zombie apocalypse partner </li>
          </ul>
        </section>
      </section>  
    </main>
    </div>
  );
}

export default App;
