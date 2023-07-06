import { WaveButton } from '../src'

function App() {
  return (
    <main className='flex h-screen flex-col items-center gap-16 py-4 mix-blend-difference dark:bg-black dark:text-white'>
      <a
        href='https://github.com/zhangyu1818/wave-button'
        className='absolute right-0 top-0'
        aria-label='View source on GitHub'
        tabIndex={-1}
      >
        <svg
          className='fill-black text-white dark:fill-white dark:text-black'
          width='80'
          height='80'
          viewBox='0 0 250 250'
          aria-hidden='true'
        >
          <path d='M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z'></path>
          <path
            d='M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2'
            fill='currentColor'
          ></path>
          <path
            d='M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z'
            fill='currentColor'
          ></path>
        </svg>
      </a>
      <h1 className='mb-12 mt-8 text-4xl font-bold'>Wave Button</h1>
      <WaveButton
        aria-label='example wave button'
        className='group px-28 py-8 text-3xl font-semibold uppercase'
      >
        <i className='flex w-40 overflow-hidden whitespace-nowrap before:block before:w-full before:flex-none before:transition-transform before:duration-500 before:ease-[cubic-bezier(0.16,1,0.3,1)] before:content-["Hover_Me"] after:block after:w-full after:flex-none after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.16,1,0.3,1)] after:content-["Tap_Me"] group-hover:before:-translate-x-full group-hover:after:-translate-x-full' />
      </WaveButton>
      <p className='text-lg italic'>Just button, but it's cool!</p>
      <h1 className='text-xl font-semibold'>Installation</h1>
      <div className='group relative bg-black dark:bg-white'>
        <pre className='px-16 py-6 text-white mix-blend-difference'>
          npm install wave-button
        </pre>
        <span
          aria-label='copy to paste'
          onClick={() => {
            navigator.clipboard
              .writeText('npm install wave-button')
              .then(() => {
                console.log('copied')
              })
              .catch(() => {
                console.error('failed')
              })
          }}
          role='button'
          className='absolute right-1 top-1/2 hidden -translate-y-1/2 p-4 text-white transition active:scale-125 group-hover:block dark:text-black'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            viewBox='0 0 24 24'
            aria-hidden='true'
          >
            <path
              d='M9 4h6v2H9zm11 7h-7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z'
              fill='currentColor'
            ></path>
            <path
              d='M21 9V6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4v-9a2 2 0 0 1 2-2h10zM9 6V4h6v2H9z'
              fill='currentColor'
            ></path>
          </svg>
        </span>
      </div>
      <div className='flex-1' />
      <footer>
        <p className='flex items-center gap-1 text-xs text-zinc-400'>
          zhangyu1818 © build with{' '}
          <a
            className='italic underline decoration-dotted underline-offset-1 outline-black'
            href='https://vitejs.dev/'
          >
            Vite
          </a>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            viewBox='0 0 256 257'
            aria-hidden='true'
          >
            <defs>
              <linearGradient
                id='logosVitejs0'
                x1='-.828%'
                x2='57.636%'
                y1='7.652%'
                y2='78.411%'
              >
                <stop offset='0%' stopColor='#41D1FF'></stop>
                <stop offset='100%' stopColor='#BD34FE'></stop>
              </linearGradient>
              <linearGradient
                id='logosVitejs1'
                x1='43.376%'
                x2='50.316%'
                y1='2.242%'
                y2='89.03%'
              >
                <stop offset='0%' stopColor='#FFEA83'></stop>
                <stop offset='8.333%' stopColor='#FFDD35'></stop>
                <stop offset='100%' stopColor='#FFA800'></stop>
              </linearGradient>
            </defs>
            <path
              fill='url(#logosVitejs0)'
              d='M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z'
            ></path>
            <path
              fill='url(#logosVitejs1)'
              d='M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z'
            ></path>
          </svg>
        </p>
      </footer>
    </main>
  )
}

export default App
