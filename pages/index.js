import Head from 'next/head'

export default function Home() {
  return <>
      <Head>
        <title>Andrew Cairns</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className='flex flex-col'>
          <div className='flex items-center justify-center'>
              <div className="sm:max-w-6xl p-10 w-full">
                  <div className='flex'>
                      <img src="/andrew-cairns.png" alt="Andrew Cairns" style={{width: 33}} />
                      <ul className='flex flex-row space-x-4 text-sm font-bold flex-grow justify-end'>
                          <li>
                              <a href="https://twitter.com/andrewcairns" className='text-blue-700'>Contact me</a>
                          </li>
                          <li>
                              <a href="https://trypatchwork.com" className='text-blue-700 border border-blue-700 border-2 px-5 py-2 rounded-full'>Patchwork</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
          <div className='mt-8 flex flex-grow items-center justify-center'>
              <div className="max-w-2xl p-10 sm:w-full">
                  <h2 className="text-6xl text-gray-700 font-bold">
                      <a href="https://acairns.co.uk/">Howdy!</a>
                  </h2>
                  <div className='prose prose-xl mt-8'>
                      <p>
                          My name is Andrew Cairns and I'm a Software Engineer living in Scotland. I've been building software
                          since Turbo Pascal on Amstrad. That's an old programming language for an old computer.
                      </p>
                      <p>
                          I'm building a platform to help {' '}
                          <a href="https://trypatchwork.com" target="_blank" className="text-indigo-500">charities tell their stories</a>.
                          I'm also a Lead Back-End Engineer at {' '}
                          <a href="https://transfergo.com" target="_blank" className="text-indigo-500">TransferGo</a>.
                      </p>
                      <p>
                          <a href="https://twitter.com/andrewcairns?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="false" data-size="large">
                            Follow @andrewcairns
                          </a>
                      </p>
                </div>
              </div>
          </div>
      </div>
  </>;
}
