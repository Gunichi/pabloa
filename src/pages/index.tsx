import Head from 'next/head'

import { Inter } from 'next/font/google'
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import styles from '@/styles/Home.module.css'

import variables from '@/styles/variables.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Pablo A</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={variables.box}>
          <img src="https://i.imgur.com/F4LUPrb.png" alt="Pablo A" className={variables.profileImage} />
          <div className={variables.title}>
            Pablo A. Borges
          </div>
          <div className={variables.subtitle}>
            Software Engineer • CTO • Ethical hacker • Mentor
          </div>
            
          <div className={variables.subtitle}>
            @pabloaborges
          </div>
        </div>
        {/* <div className={variables.cardBox}>
          <img src="https://i.imgur.com/JgGV9nN.png" alt="Pablo A" className={variables.cardImage} />
        </div> */}
        <div className={variables.cardBox}>
          <img src="https://i.imgur.com/aFwQuER.png" alt="Pablo A" className={variables.cardImage} />
        </div>
        <div className={variables.cardBox}>
          <img src="https://i.imgur.com/WYq8QHl.png" alt="Pablo A" className={variables.cardImage} />
        </div>
        <div className={variables.cardBox}>
          <img src="https://i.imgur.com/SJlKeIr.png" alt="Pablo A" className={variables.cardImage} />
        </div>
        {/* <div className={variables.cardBox}>
          <img src="https://i.imgur.com/uh8zRmr.png" alt="Pablo A" className={variables.cardImage} />
        </div> */}
        <div className={variables.cardSocial}>
          Conecte-se comigo
          <div className={variables.cardSocialIcons}>
            <a href="https://www.linkedin.com/in/pabloa/" target="_blank" rel="noreferrer">
              <AiFillInstagram className={variables.cardSocialIcon} />
            </a>
            <a href="https://www.linkedin.com/in/pabloa/" target="_blank" rel="noreferrer">
              <AiFillLinkedin className={variables.cardSocialIcon} />
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
